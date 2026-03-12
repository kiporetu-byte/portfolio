//ExpressでAPIサーバーを作る最小コード
import express from "express";//Expressライブラリを読み込むNode.jsでAPIサーバーを作るためのフレームワーク
import cors from "cors";//CORSというライブラリを読み込む　CORSはフロントエンド（React / Next.js）からAPIにアクセスできるようにする設定 
//import { PrismaClient } from "@prisma/client";

//const prisma = new PrismaClient();

const app = express();//Expressアプリ（サーバー）を作成  ここでAPIサーバーの本体を作っている
 
app.use(cors());//CORSを有効にする CORSを使用する設定を追加  
app.use(express.json());//JSON形式のデータを受け取れるようにする　例えばフロントから{"name": "Erika"}のようなデータを送れる

app.get("/", (req, res) => {//APIのルートを作る 「/」にGETリクエストが来たときの処理を定義  ブラウザでhttp://localhost:4000にアクセスしたときの処理
  res.json({ message: "Backend running" });//JSONデータを返す　返す内容{"message": "Backend running"}APIが動いているか確認するためのテスト
});

/* プロフィール取得 */
//app.get("/profile", async (req, res) => {
  //const profile = await prisma.profile.findFirst();
  //res.json(profile);
//});

/* プロフィール保存 */
//app.post("/profile", async (req, res) => {
  //const { name, bio, imageUrl } = req.body;

  //const profile = await prisma.profile.upsert({
    //where: { id: 1 },
    //update: { name, bio, imageUrl },
    //create: { name, bio, imageUrl }
  //});

  //res.json(profile);
//});

app.listen(4000, () => {//ポート4000でサーバーを起動 APIのURLはhttp://localhost:4000
  console.log("Server running on http://localhost:4000");//起動メッセージ「Server running on http://localhost:4000」とターミナルに表示 サーバーが正常に起動したことを確認するため
});