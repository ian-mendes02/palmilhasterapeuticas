import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
    title: 'Curso Avaliação Clínica do Pé',
    description: 'Aprenda a avaliar clinicamente os pés com precisão e fundamentação científica',
    keywords: [
        'palmilhas',
        'palmilhas terapêuticas',
        'ortopedia',
        'fisioterapia',
        'podologia',
        'podoposturologia',
        'curso',
        'avaliação',
        'baropodometria',
        'podoscópio',
        'plantígrafo',
        'diagnóstico',
        'pés',
    ]
}

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
    return children
}