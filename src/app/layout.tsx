import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import NavBar from './components/NavBar'
import AgentsProvider from "./context/agents";
const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: "600" })

export const metadata: Metadata = {
  title: 'Valo Made EZ',
  description: 'Valorant information made easy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AgentsProvider>
          <NavBar />
          {children}
        </AgentsProvider>
      </body>
    </html>
  );
}
