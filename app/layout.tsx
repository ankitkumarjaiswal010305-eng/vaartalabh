import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: 'Vartalaabh - Real Conversations About Life & Tech',
  description: 'An open community for students, professionals, and founders to have real conversations about life and tech. Making sense of life through conversations.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/white circle-bglogo.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/white circle-bglogo.svg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/white circle-bglogo.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/white circle-bglogo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
