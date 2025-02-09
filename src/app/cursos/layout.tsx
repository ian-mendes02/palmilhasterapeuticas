import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
    title: 'Cursos Presenciais | Palmilhas Terapêuticas',
    description: 'Uma experiência completa para aprender a avaliar, prescrever e confeccionar palmilhas.',
    keywords: [
        'palmilhas',
        'palmilhas terapêuticas',
        'ortopedia',
        'fisioterapia',
        'podologia',
        'podoposturologia',
        'curso',
        'mentoria'
    ]
}
export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <main className="bg-gradient-to-b from-ps-primary to-ps-primary-dark text-white">
            {children}
        </main>
    )
}