import Link from "next/link";

export default function ProductIndexPage() {
  return (
    <main className="">
      <h1>Click on products</h1>
      <ul>
        <li><Link href="/products/1">Exists</Link></li>
        <li><Link href="/products/2">Does not exist</Link></li>
      </ul>
    </main>
  )
}