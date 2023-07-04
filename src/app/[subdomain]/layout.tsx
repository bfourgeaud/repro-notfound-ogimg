import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata({ params }: { params: { subdomain: string } }):Promise<Metadata> {
  return {
    title: {
      default: params.subdomain || "default",
      template: `%s | ${params.subdomain || "default"}`
    },
    description: "This is a description",
    openGraph: {
      title: {
        default: params.subdomain || "default",
        template: `%s | ${params.subdomain || "default"}`
      },
      description: "This is a description",
      type: "website",
      siteName: params.subdomain
    },
    twitter: {
      card: "summary_large_image"
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
