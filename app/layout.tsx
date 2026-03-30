import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const proximaSoft = localFont({
  src: [
    { path: '../public/fonts/ProximaSoft-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/ProximaSoft-MediumIt.woff2', weight: '500', style: 'italic' },
  ],
  variable: '--font-proxima',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yuh Quiz',
  description: 'Teste tes connaissances sur Yuh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={proximaSoft.variable}>
      <body>{children}</body>
    </html>
  )
}
