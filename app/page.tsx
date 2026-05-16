import LeadForm from "./components/LeadForm";

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
  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px 24px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "12px" }}>
        AI Business Daily
      </h1>

      <p style={{ color: "#666", marginBottom: "40px", fontSize: "18px" }}>
        Daily insights about AI, business and productivity.
      </p>

      <LeadForm />

      {featuredArticle && (
        <a
          href={`/articles/${featuredArticle.slug}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <article
            style={{
              background: "#111827",
              color: "white",
              borderRadius: "24px",
              padding: "40px",
              marginBottom: "40px",
            }}
          >
            <p
              style={{
                color: "#93c5fd",
                fontSize: "13px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "14px",
              }}
            >
              Featured · Edition #{featuredArticle.id}
            </p>

            <h2
              style={{
                fontSize: "40px",
                lineHeight: 1.1,
                marginBottom: "18px",
                letterSpacing: "-0.03em",
              }}
            >
              {featuredArticle.title}
            </h2>

            <p
              style={{
                color: "#d1d5db",
                fontSize: "18px",
                lineHeight: 1.7,
                marginBottom: "22px",
              }}
            >
              {featuredArticle.summary}
            </p>

            <span style={{ color: "#93c5fd", fontWeight: "bold" }}>
              Read featured article →
            </span>
          </article>
        </a>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {otherArticles.map((article: any) => (
          <a
            key={article.slug}
            href={`/articles/${article.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <article
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "28px",
                border: "1px solid #e5e7eb",
              }}
            >
              <p
                style={{
                  color: "#2563eb",
                  fontSize: "13px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "10px",
                }}
              >
                Edition #{article.id}
              </p>

              <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>
                {article.title}
              </h2>

              <p style={{ color: "#555", lineHeight: 1.7, marginBottom: "16px" }}>
                {article.summary}
              </p>

              <span style={{ color: "#2563eb", fontWeight: "bold" }}>
                Read article →
              </span>
            </article>
          </a>
        ))}
      </div>
    </main>
  );
}
