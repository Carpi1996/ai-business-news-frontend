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
fontSize: "48px",
marginBottom: "12px",
}}
>
AI Business Daily </h1>

<p
style={{
color: "#666",
marginBottom: "40px",
fontSize: "18px",
}}
>
Daily insights about AI, business and productivity.
</p>

<div
style={{
display: "flex",
flexDirection: "column",
gap: "24px",
}}
>
{articles.map((article: any) => (
<a
key={article.slug}
href={`/articles/${article.slug}`}
style={{
textDecoration: "none",
color: "inherit",
}}
>
<article
style={{
background: "white",
borderRadius: "16px",
padding: "28px",
border: "1px solid #e5e7eb",
transition: "all 0.2s ease",
}}
>
<h2
style={{
fontSize: "28px",
marginBottom: "12px",
}}
>
{article.title}
</h2>

<p
style={{
color: "#555",
lineHeight: 1.7,
marginBottom: "16px",
}}
>
{article.summary}
</p>

<span
style={{
color: "#2563eb",
fontWeight: "bold",
}}
>
Read article →
</span>
</article>
</a>
))}
</div>
</main>
);
}
