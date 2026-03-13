//Express API（profile / profile image / contacts）ExpressでAPIサーバーを作るコード
import express from "express";//Expressライブラリを読み込むNode.jsでAPIサーバーを作るためのフレームワーク
import cors from "cors";//CORSというライブラリを読み込む　CORSはフロントエンド（React / Next.js）からAPIにアクセスできるようにする設定 
import { prisma } from "./prisma";
import multer from "multer";

const app = express();//Expressアプリ（サーバー）を作成  ここでAPIサーバーの本体を作っている
const upload = multer();

app.use(cors());//CORSを有効にする CORSを使用する設定を追加  
app.use(express.json());//JSON形式のデータを受け取れるようにする　例えばフロントから{"name": "Erika"}のようなデータを送れる

app.get("/", (_req, res) => {//APIのルートを作る 「/」にGETリクエストが来たときの処理を定義  ブラウザでhttp://localhost:4000にアクセスしたときの処理
  res.json({ message: "Backend running" });//JSONデータを返す　返す内容{"message": "Backend running"}APIが動いているか確認するためのテスト
});

/* プロフィール取得 */
app.get("/profile", async (_req, res) => {
  try {
    const profile = await prisma.profile.findFirst();
    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "プロフィール取得に失敗しました" });
  }
});

/* プロフィール保存 */
app.post("/profile", async (req, res) => {
  try {
    const { name, bio, imageUrl } = req.body;

    const existingProfile = await prisma.profile.findFirst();

    if (existingProfile) {
      const updated = await prisma.profile.update({
        where: { id: existingProfile.id },
        data: { name, bio, imageUrl }
      });

      res.json(updated);
      return;
    }

    const created = await prisma.profile.create({
      data: { name, bio, imageUrl }
    });

    res.json(created);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "プロフィール保存に失敗しました" });
  }
});

app.post("/profile/image", upload.single("image"), async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      res.status(400).json({ message: "画像がありません" });
      return;
    }

    const profile = await prisma.profile.findFirst();

    if (!profile) {
      res.status(404).json({ message: "プロフィールがありません" });
      return;
    }

    await prisma.profile.update({
      where: { id: profile.id },
      data: {
        imageData: Uint8Array.from(file.buffer),
        imageType: file.mimetype,
      },
    });

    res.json({ message: "画像を保存しました" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "画像保存に失敗しました" });
  }
});

app.get("/profile/image", async (_req, res) => {
  try {
    const profile = await prisma.profile.findFirst();

    if (!profile || !profile.imageData) {
      res.status(404).end();
      return;
    }

    res.setHeader("Content-Type", profile.imageType || "image/png");
    res.send(profile.imageData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "画像取得に失敗しました" });
  }
});

app.post("/contacts", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    res.json(contact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "問い合わせ送信に失敗しました" });
  }
});

app.listen(4000, () => {//ポート4000でサーバーを起動 APIのURLはhttp://localhost:4000
  console.log("Server running on http://localhost:4000");//起動メッセージ「Server running on http://localhost:4000」とターミナルに表示 サーバーが正常に起動したことを確認するため
});