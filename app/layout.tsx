import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Property Yield',
  description: 'Property Yield is a revenue management tool for hoteliers and property managers.',
  generator: 'Starbird_beats',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
