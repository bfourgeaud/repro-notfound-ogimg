export default function Home({ params: { subdomain } }: { params: { subdomain: string } }) {
  return (
    <main className="grid gap-6 text-center my-24">
      <h1 className="text-2xl font-semibold">Opengraph-Image not working properly with middleware.</h1>
      <blockquote>
        <p>Check head element for meta property <span className="font-medium">og:image</span></p>
        <p>The path generated is invalid, and therefore does not present any ogImage to social websites</p>
        <p>invalid URL : {`http://localhost:3000/${subdomain}/opengraph-image?[id]`}</p>
      </blockquote>
    </main>
  )
}