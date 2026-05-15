async function getArticles() {
const res = await fetch(
"https://ai-business-news-api.onrender.com/articles",
{
cache: "no-store",
}
);

return res.json();
}

export default async function HomePage() {
const articles = await getArticles();

return (
<main
style={{
maxWidth: "900px",
margin: "0 auto",
padding: "40px",
fontFamily: "Arial",
}}
>
<h1
style={{
fontSize: "42px",
marginBottom: "40px",
}}
>
AI Business Daily </h1>

{articles.map((article: any) => (
    <article
      key={article.id}
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "24px",
        marginBottom: "24px",
      }}
    >
      <h2>{article.title}</h2>

      <p
        style={{
          color: "#666",
          marginBottom: "16px",
        }}
      >
        {article.summary}
      </p>

      <div
        style={{
          whiteSpace: "pre-wrap",
          lineHeight: 1.6,
        }}
      >
        {article.content}
      </div>
    </article>
  ))}
</main>
);
}