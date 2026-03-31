import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const proximaSoft = localFont({
  src: [
    { path: '../public/fonts/ProximaSoft-Thin.woff2',      weight: '100', style: 'normal' },
    { path: '../public/fonts/ProximaSoft-Light.woff2',     weight: '300', style: 'normal' },
    { path: '../public/fonts/ProximaSoft-Regular.woff2',   weight: '400', style: 'normal' },
    { path: '../public/fonts/ProximaSoft-Medium.woff2',    weight: '500', style: 'normal' },
    { path: '../public/fonts/ProximaSoft-MediumIt.woff2',  weight: '500', style: 'italic' },
    { path: '../public/fonts/ProximaSoft-SemiBold.woff2',  weight: '600', style: 'normal' },
    { path: '../public/fonts/ProximaSoft-Bold.woff2',      weight: '700', style: 'normal' },
    { path: '../public/fonts/ProximaSoft-ExtraBold.woff2', weight: '800', style: 'normal' },
    { path: '../public/fonts/ProximaSoft-Black.woff2',     weight: '900', style: 'normal' },
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
