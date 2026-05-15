async function getArticle(slug: string) {
const res = await fetch(
`https://ai-business-news-api.onrender.com/articles/${slug}`,
{
cache: "no-store",
}
);

if (!res.ok) {
return null;
}

return res.json();
}

export default async function ArticlePage({
params,
}: {
params: { slug: string };
}) {
const article = await getArticle(params.slug);

if (!article) {
return (
<main style={{ maxWidth: "800px", margin: "0 auto", padding: "40px" }}>
<h1>Article not found</h1>
<a href="/">Back to home</a>
</main>
);
}

return (
<main
style={{
maxWidth: "800px",
margin: "0 auto",
padding: "40px",
fontFamily: "Arial",
}}
>
<a
href="/"
style={{
color: "#2563eb",
textDecoration: "none",
fontWeight: "bold",
}}
>
← Back to articles
</a>

<article
style={{
background: "white",
borderRadius: "16px",
padding: "32px",
marginTop: "24px",
border: "1px solid #e5e7eb",
}}
>
<h1
style={{
fontSize: "42px",
marginBottom: "20px",
}}
>
{article.title}
</h1>

<p
style={{
color: "#555",
fontSize: "18px",
lineHeight: 1.7,
marginBottom: "32px",
}}
>
{article.summary}
</p>

<div
style={{
whiteSpace: "pre-wrap",
lineHeight: 1.8,
fontSize: "17px",
}}
>
{article.content}
</div>
</article>
</main>
);
}
