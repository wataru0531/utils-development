// console.log("hello")

// 注意 ネットワークタブはファイルだけでなく、あらゆるリソース(APIエンドポイント)や画像、スタイルシートなど、
//      さまざまなリソースや通信がレスポンスヘッダーとリクエストヘッダーで表示される

async function fetchPosts (){
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  console.log(res)

  // res.ok ステータス。通信が成功、失敗

  // headers 通信の情報、認証など
  // console.log(res.headers)

  // res.bodyに取得してきたデータ本体(ReadableStream{})が格納してあり、それをjson()やtext()で取得する
  console.log(res.body)
  const posts = await res.json();

  return posts
}

async function display(){
  const posts = await fetchPosts()
  // console.log(posts)

  const html = posts.map(post => `<p>${post.title}</p>`).join("")
  // console.log(html)

  const app = document.getElementById("app");
  // console.log(app)
  app.innerHTML = html;
}

display()