import ReactMarkdown from "react-markdown";

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

function cleanMarkdownContent(content: string, title: string) {
  let cleaned = content || "";

  cleaned = cleaned.replace(/^#\s+.*\n+/, "");
  cleaned = cleaned.replace(/^Title:\s*.*\n+/i, "");
  cleaned = cleaned.replace(/\*\*Title:\s*.*?\*\*\n+/i, "");

  return cleaned.trim();
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

  const cleanedContent = cleanMarkdownContent(article.content, article.title);

  return (
    <main
      style={{
        maxWidth: "760px",
        margin: "0 auto",
        padding: "48px 24px",
        fontFamily: "Arial, Helvetica, sans-serif",
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
          borderRadius: "20px",
          padding: "40px",
          marginTop: "28px",
          border: "1px solid #e5e7eb",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.04)",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            lineHeight: 1.1,
            marginBottom: "20px",
            letterSpacing: "-0.03em",
          }}
        >
          {article.title}
        </h1>

        <p
          style={{
            color: "#555",
            fontSize: "19px",
            lineHeight: 1.7,
            marginBottom: "36px",
          }}
        >
          {article.summary}
        </p>

        <div className="article-content">
          <ReactMarkdown>{cleanedContent}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
