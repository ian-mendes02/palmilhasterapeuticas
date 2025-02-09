import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
    title: 'Curso de Anatomia e Biomecânica do Pé e Tornozelo',
    description: 'Torne-se um especialista no tratamento das queixas musculoesqueléticas do pé e tornozelo',
    keywords: [
        'palmilhas',
        'palmilhas terapêuticas',
        'ortopedia',
        'fisioterapia',
        'podologia',
        'podoposturologia',
        'curso',
        'anatomia',
        'biomecânica',
        'pé',
        'tornozelo'
    ]
}

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
    return children
}