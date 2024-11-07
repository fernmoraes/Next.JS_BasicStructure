import Nav from "@/components/Nav/Nav"
import Footer from "@/components/Footer/Footer"
import "./globals.css";

export const metadata = {
  title: 'Next.js',
  description: 'Projeto Next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
