const express = require("express");
const app = express();
const PORT = 5050;

const cors = require("cors");

// corsの設定
app.use(
  cors({
    // どこからのアクセスを許可するか。オリジン(スキーマ、ドメイン、ポート)を記す。
    origin: "http://127.0.0.1:5500",
    // どのメソッドを許可するかは配列で記述。書かない場合は全て通す。
    // methods: ["GET", "POST", "PUT", "DELETE"],
    // クッキーを残すかどうか
    // credentials: true,
  })
);



app.get('/', (req, res) => {
  res.send("Hello")
});

// dataというエンドポイントを作成
app.get("/data", (req, res) => {
  // /dataにアクセスすればresでオブジェクトを返す。
  res.json({ name: "shincode", age: 24 });
})

app.listen(PORT, () => console.log("server is running"));