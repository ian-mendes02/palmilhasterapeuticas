// noinspection HtmlRequiredTitleElement

import Gtm from '@/lib/components/gtm'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { type ReactNode } from 'react'
import '$/globals.css'

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: 'Palmilhas Terapêuticas'
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode; }>) {
    return (
        <html lang="pt">
            <head>
                <Gtm.Header/>
            </head>
            <body className={`${poppins.className} antialiased`}>
                {children}

                <Gtm.Footer/>
            </body>
        </html>
    )
}
