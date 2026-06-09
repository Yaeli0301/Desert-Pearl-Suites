/**
 * Renders a JSON-LD <script> for structured data (rich results + AI search).
 * Kept as a server component so the markup ships in the initial HTML.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is static and trusted, so direct injection is safe here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
