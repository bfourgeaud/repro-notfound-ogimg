export default function Home() {
  return (
    <main className="grid gap-6 text-center">
      <h1>Opengraph-Image not working properly with middleware.</h1>
      <div>
        <p>Check head element for meta property og:image</p>
        <p>The path is not routed though middleware, and therefor not OK</p>
      </div>
    </main>
  )
}
