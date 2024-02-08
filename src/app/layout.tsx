import type { Metadata } from "next"
import { Electrolize as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "./providers/theme-provider"
import Header from "@/components/layout/Header"
import Sidebar from "@/components/layout/Sidebar"
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper"
import Footer from "@/components/layout/Footer"
import { ReactQueryClientProvider } from "./providers/query-client-provider"
import TransitionProvider from "./providers/transition-provider"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400"],
})
export const metadata: Metadata = {
  title: "Zyle Blog",
  description: "A blog about web development and other stuff",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <MaxWidthWrapper className="relative"> */}
          <ReactQueryClientProvider>
            <TransitionProvider>
              <Header />
              <MaxWidthWrapper>
                <div className="flex flex-1 justify-between">
                  <main className="relative flex-1 py-6 lg:py-8">
                    {children}
                  </main>
                  <Sidebar />
                </div>
                <Footer />
              </MaxWidthWrapper>
            </TransitionProvider>
          </ReactQueryClientProvider>
          {/* </MaxWidthWrapper> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
