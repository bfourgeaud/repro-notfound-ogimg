import Link from "next/link";

const linkClass =  "p-2 border border-green-200 cursor-pointer hover:bg-green-100"

export default function ProductIndexPage({ params: { subdomain } }: { params: { subdomain: string } }) {
  return (
    <main className="grid gap-6 my-24 text-center">
      <h1 className="text-2xl font-semibold">Products for subdomain {subdomain}</h1>
      <ul className="grid gap-8">
        <li><Link className={linkClass} href="/products/1">Found</Link></li>
        <li><Link className={linkClass} href="/products/2">Not Found</Link></li>
      </ul>
    </main>
  )
}