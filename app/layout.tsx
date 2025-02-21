import type { Metadata } from "next"
import { Quicksand, Sono } from "next/font/google"
import "./globals.css"
import NavBar from "@/src/components/navbar"
import Head from "next/head"
import VoxelModel from "@/src/components/voxel-dude"

const fontSans = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
})

const fontMono = Sono({
  variable: "--font-sono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Freddie Lust-Hed",
  description: "Freddie's Homepage",
  authors: { name: "Freddie Lust-Hed", url: "https://www.musen.dev" },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`${fontSans.variable} ${fontMono.variable}`}>
      <Head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body>
        <NavBar />
        <div className="pt-18" />
        <VoxelModel hide={false} />
        <main>{children}</main>
      </body>
    </html>
  )
}
