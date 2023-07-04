import { notFound } from "next/navigation"

interface ProductPageProps {
  params: {
    id: string
  }
}

const PRODUCTS_CATALOG = [
  { id: '1' }
]

export default function ProductPage({ params }: ProductPageProps) {
  const currentProduct = PRODUCTS_CATALOG.find(p => p.id === params.id)
  if(!currentProduct) {
    notFound()
  }

  return (
    <main className="">
      <span>This is product {currentProduct.id}</span>
    </main>
  )
}