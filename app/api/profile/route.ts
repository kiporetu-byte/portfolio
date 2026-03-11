//プロフィール情報をデータベースから取得したり、保存したりするための API
import { NextResponse } from "next/server";//APIの返事を作るためのもの
import { prisma } from "@/lib/prisma";// lib/prisma.tsで作った Prisma のインスタンス データベースを操作するための道具

//プロフィールを1件取得して返す処理  ブラウザやフロント側からfetch("/api/profile")のように呼ばれると、この GET が動く
export async function GET() {//プロフィールを取得する  GET リクエストが来たときに動く関数
  try {//エラーが起きるかもしれない処理を安全に書く形 try の中 →うまくいくときの処理
    const profile = await prisma.profile.findFirst({//profile テーブルから最初の1件を取ってくる
      orderBy: { id: "asc" },//id が小さい順に並べる
    });

    return NextResponse.json(profile);//取得したprofile を JSON 形式で返す
  } catch (error) {//エラーが起きるかもしれない処理を安全に書く形 catch の中 → プロフィール取得で失敗したときの処理
    console.error(error);//エラー内容をサーバーのログに出す
    return NextResponse.json(
      { message: "プロフィールの取得に失敗しました" },//「何か問題が起きてプロフィールを取れませんでした」という返事を返している
      { status: 500 }//500 はサーバー側のエラー
    );
  }
}

//プロフィールを保存する処理 すでにプロフィールがある → 更新する まだない → 新しく作るという動きをする
export async function POST(request: Request) {//POST リクエストが来たときに動く関数　フロント側からfetch("/api/profile", { method: "POST",body: JSON.stringify(...)})のように呼ばれると、この POST が実行される
  try {
    const body = await request.json();
    const { name, bio, imageUrl } = body;

    const existingProfile = await prisma.profile.findFirst({
      orderBy: { id: "asc" },
    });

    let profile;

    if (existingProfile) {
      profile = await prisma.profile.update({
        where: { id: existingProfile.id },
        data: {
          name,
          bio,
          imageUrl,
        },
      });
    } else {
      profile = await prisma.profile.create({
        data: {
          name,
          bio,
          imageUrl,
        },
      });
    }

    return NextResponse.json(profile);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "プロフィールの保存に失敗しました" },
      { status: 500 }
    );
  }
}