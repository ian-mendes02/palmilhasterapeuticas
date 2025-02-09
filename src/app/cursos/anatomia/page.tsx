'use client'

import { Collapsible, CollapsibleGroup } from '@/lib/components/collapsible'
import LogoPalmilhando from '@/lib/components/logo-palmilhando'
import VideoContainer from '@/lib/components/video-container'
import { FaCalendarAlt, FaChalkboardTeacher, FaCompressAlt, FaExternalLinkAlt } from 'react-icons/fa'
import { FaMagnifyingGlass, FaQuoteLeft, FaRocket } from 'react-icons/fa6'
import { GiFootprint, GiRunningShoe } from 'react-icons/gi'
import { IoChatboxEllipses } from 'react-icons/io5'
import { TiPin } from 'react-icons/ti'

const header = 'Torne-se especialista no tratamento de queixas musculoesqueléticas do pé e tornozelo'

const description = 'Aprenda a fundo a anatomia e biomecânica do pé e tornozelo para entender os mecanismos complexos de funcionamento e transformar seu atendimento clínico.'

const courseGoal = 'O objetivo principal é aprimorar o conhecimento do profissional que quer ser um especialista no tratamento das queixas musculoesqueléticas do pé capacitando a compreender os mecanismos complexos de funcionamento do pé e do tornozelo.'

const priceInfo = {
    oldPrice: 1427,
    newPrice: 199.99,
    maxInstallments: 12,
    installmentPrice: 19.99
}

const bulletPoints = [
    {
        title: 'Aprenda a relação entre movimento e pressão plantar',
        icon: GiFootprint
    },
    {
        title: 'Domine a análise das forças e pressões plantares',
        icon: FaMagnifyingGlass
    },
    {
        title: 'Descubra como o calçado influencia o padrão de pisada',
        icon: GiRunningShoe
    },
    {
        title: 'Estude os mecanismos de absorção de impacto',
        icon: FaCompressAlt
    },
    {
        title: 'Tenha suporte direto dos professores na plataforma',
        icon: FaChalkboardTeacher
    },
    {
        title: 'Acesso ao curso por 1 ano',
        icon: FaCalendarAlt
    }
]

const moduleList = [
    {
        title: 'O Foot Core',
        img: ''
    },
    {
        title: 'Subsistema Passivo',
        subtitle: 'ossos, ligamentos, fáscia, articulações e funcionamento dos arcos do pé',
        img: ''
    },
    {
        title: 'Subsistema Ativo',
        subtitle: 'músculos intrínsecos e extrínsecos',
        img: ''
    },
    {
        title: 'Subsistema Neural',
        subtitle: 'terminações nervosas e receptores',
        img: ''
    },
    {
        title: 'Tipos de Pisada e sua Influência na Marcha',
        img: ''
    },
    {
        title: 'Análise das Forças e Pressões Plantares',
        img: ''
    },
    {
        title: 'Mecanismos Complexos de Movimento e Pronação',
        img: ''
    },
    {
        title: 'Influência do Calçado no Movimento',
        img: ''
    }
]

const bonusModule = {
    title: 'Aula de Anatomia Palpatória',
    img: ''
}

const faq = [
    {
        q: 'O curso tem certificado?',
        a: 'Sim! Emitimos certificado ao final do curso.'
    },
    {
        q: 'Por quanto tempo tenho acesso?',
        a: 'O conteúdo do curso ficará à sua disposição durante 12 meses após a data da compra.'
    },
    {
        q: 'Posso assistir de qualquer lugar?',
        a: 'Sim, o curso é 100% online!'
    }
]

const PurchaseButton = () => (
    <button className="relative z-10 block w-full lg:w-max font-bold text-lg lg:text-xl py-4 lg:px-8 mx-auto rounded-lg box-glow border-t border-b-2 border-t-cyan-200 border-b-cyan-700 bg-gradient-to-tr from-cyan-500 to-teal-300 cursor-pointer hover:brightness-110 duration-150">
        QUERO ME INSCREVER AGORA<FaExternalLinkAlt size={20} className="inline-block ml-2"/>
    </button>
)

export default function Page() {
    return <>

        <div className="w-screen p-3 bg-cyan-200 text-ps-primary shadow-md flex items-center">
            <LogoPalmilhando size={24}/>
        </div>

        <section id="header" className="lg:py-24">
            <div className="w-full max-w-screen-xl mx-auto">
                <div className="content">
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full place-items-center">
                        <div className="w-full text-center lg:text-left px-4">
                            <p className="text-2xl lg:text-4xl font-semibold mb-4">{header}</p>
                            <p className="lg:text-xl lg:mb-8 text-sky-100">{description}</p>

                            <div className="text-xl hidden lg:block">
                                <p className="mb-2">De <del>R${priceInfo.oldPrice}</del> por apenas:</p>
                                <p className="text-xl">
                                    <span className="text-4xl font-bold">{priceInfo.maxInstallments}x de R${priceInfo.installmentPrice} </span>
                                    <span className="text-lg italic">(R${priceInfo.newPrice} à vista)</span>
                                </p>
                                <button className="relative z-10 block w-max font-bold text-lg lg:text-xl py-4 lg:px-8 mt-8 rounded-lg box-glow border-t border-b-2 border-t-cyan-200 border-b-cyan-700 bg-gradient-to-tr from-cyan-500 to-teal-300 cursor-pointer hover:brightness-110 duration-150">
                                    QUERO ME INSCREVER AGORA<FaExternalLinkAlt size={20} className="inline-block ml-2"/>
                                </button>
                            </div>
                        </div>

                        <div className="px-4 lg:px-8 my-4 lg:my-0 w-full">
                            <VideoContainer/>
                            <p className="text-center text-base lg:text-xl my-2 lg:my-4">
                                Assista ao vídeo e descubra como esse curso pode elevar sua carreira!
                            </p>
                        </div>

                        <div className="text-xl w-full text-center p-4 lg:hidden">
                            <p className="mb-2">De <del>R${priceInfo.oldPrice}</del> por apenas:</p>
                            <p className="text-xl mb-8">
                                <span className="text-4xl font-bold">{priceInfo.maxInstallments}x de R${priceInfo.installmentPrice} </span><br/>
                                <span className="text-lg italic">(R${priceInfo.newPrice} à vista)</span>
                            </p>
                            <PurchaseButton/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="w-full h-0.5 bg-gradient-to-r from-cyan-500 via-teal-200 to-cyan-500"></div>

        <section id="bullets" className="bg-sky-700">
            <div className="w-full max-w-screen-xl mx-auto">
                <div className="content px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">

                        {bulletPoints.map((i, k) => (
                            <div
                                key={k}
                                className="flex flex-col items-center p-4 bg-gradient-to-tr from-cyan-300 to-cyan-100 text-sky-700 rounded-lg shadow-sm"
                            >
                                <i.icon size={48}/>
                                <p className="text-center text-lg mt-4">{i.title}</p>
                            </div>
                        ))}

                    </div>

                    <PurchaseButton/>
                </div>
            </div>
        </section>

        <div className="w-full h-0.5 bg-gradient-to-r from-cyan-500 via-teal-200 to-cyan-500"></div>

        <section id="conteudo-curso" className="bg-gradient-to-tr from-sky-900 to-sky-800">
            <div className="w-full max-w-screen-xl mx-auto">
                <div className="content px-8">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">

                        <div className="order-2 lg:order-1">
                            <ul className="list-chain text-xl">
                                <li>Videoaulas detalhadas e organizadas por módulos</li>
                                <li>Explicação com ilustrações e materiais didáticos</li>
                                <li>Aula Bônus: <span className="font-semibold">Anatomia Palpatória</span></li>
                                <li>Suporte direto na plataforma</li>
                            </ul>
                        </div>

                        <div className="order-1 lg:order-2">
                            <img
                                className="w-full aspect-square object-cover object-center"
                                alt=""
                                draggable={false}
                                src="https://lib.palmilhando.com.br/img/placeholder.webp"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="objetivos" className="shadow-md py-24 bg-gradient-to-tr from-cyan-600 to-cyan-500">
            <div className="w-full max-w-screen-xl mx-auto">
                <div className="content px-4">
                    <h1 className="text-4xl font-bold mb-4">
                        O objetivo desse curso:
                    </h1>
                    <p className="text-xl w-full max-w-3xl">
                        {courseGoal}
                    </p>
                </div>
            </div>
        </section>

        <section id="modulos">
            <div className="w-full max-w-screen-xl mx-auto">
                <div className="content px-4">
                    <h1 className="text-4xl text-center font-bold mb-8">
                        Confira os módulos do curso:
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">

                        {moduleList.map((i, k) => (
                            <div
                                key={k}
                                className="flex flex-col items-start justify-center p-4 pr-32 rounded-lg shadow-md border-t border-b-2 min-h-48 border-t-cyan-200 border-b-cyan-700 bg-cyan-600"
                                style={{ backgroundImage: `url('${i.img}')` }}
                            >
                                <p className="font-semibold text-xl">{i.title}</p>
                                {i.subtitle && <p>{i.subtitle}</p>}
                            </div>
                        ))}

                        <div
                            className="flex flex-col items-start justify-center p-4 pr-32 rounded-lg shadow-md border-4 border-t-cyan-400 border-l-cyan-400 border-r-teal-400 border-b-teal-400 min-h-48  bg-cyan-600"
                            style={{ backgroundImage: `url('${bonusModule.img}')` }}
                        >
                            <p className="font-bold text-2xl text-grad from-cyan-300 via-teal-300 to-cyan-300 slide">BÔNUS</p>
                            <p className="font-semibold text-xl">{bonusModule.title}</p>
                        </div>

                    </div>

                    <PurchaseButton/>
                </div>
            </div>
        </section>

        <div className="w-full h-0.5 bg-gradient-to-r from-cyan-500 via-teal-200 to-cyan-500"></div>

        <section id="material-complementar" className="bg-gradient-to-tr from-sky-900 to-sky-800 py-24">
            <div className="w-full max-w-screen-xl mx-auto">
                <div className="content px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">

                        <div className="order-2 lg:order-1">
                            <h1 className="text-4xl font-bold mb-8">
                                Material Complementar:
                            </h1>
                            <ul className="list-check text-xl">
                                <li className="before:bg-teal-400 mb-4">Apostilas com ilustrações detalhadas</li>
                                <li className="before:bg-teal-400 mb-4">Videoaulas gravadas e organizadas por temas</li>
                                <li className="before:bg-teal-400 mb-4">Gráficos de análise biomecânica</li>
                            </ul>
                        </div>

                        <div className="order-1 lg:order-2">
                            <img
                                className="w-full aspect-square object-cover object-center"
                                alt=""
                                draggable={false}
                                src="https://lib.palmilhando.com.br/img/placeholder.webp"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section id="depoimentos" className="bg-gradient-to-tr from-cyan-600 to-cyan-500 shadow-md">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500 shadow-md grid place-items-center p-4">
                <IoChatboxEllipses size={32}/>
            </div>

            <div className="w-full max-w-screen-xl mx-auto">
                <div className="content px-4 pt-4">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-screen-md mx-auto">
                        <div className="flex flex-col justify-between p-4 bg-gradient-to-tr from-cyan-300 to-cyan-100 rounded-lg shadow-md text-sky-800">
                            <p>
                                <FaQuoteLeft size={24} className="inline-block mr-2"/>
                                Esse curso transformou minha compreensão sobre o pé e tornozelo!
                            </p>
                            <p className="text-sm italic text-right mt-2">- Fulano da Silva, Fisioterapeuta</p>
                        </div>

                        <div className="flex flex-col justify-between p-4 bg-gradient-to-tr from-cyan-300 to-cyan-100 rounded-lg shadow-md text-sky-800">
                            <p>
                                <FaQuoteLeft size={24} className="inline-block mr-2"/>
                                As explicações são claras e objetivas, me ajudaram muito na prática clínica.
                            </p>
                            <p className="text-sm italic text-right mt-2">- Beltrano Siqueira, Podologista</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <PurchaseButton/>
                    </div>

                </div>
            </div>
        </section>

        <section id="comparativo-metodos">
            <div className="w-full max-w-screen-lg mx-auto">
                <div className="content px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 pt-10">

                        <div className="relative p-4 pt-12 rounded-md shadow-md bg-gradient-to-tr from-sky-700 to-sky-600">
                            <div className="absolute w-20 h-20 rounded-full shadow-md top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 grid place-items-center bg-sky-600">
                                <TiPin size={52}/>
                            </div>
                            <div className="text-center">
                                <p className="font-bold text-2xl">Outros cursos:</p>
                                <p className="font-medium text-xl">Abordam apenas conceitos superficiais</p>
                            </div>
                        </div>

                        <div className="relative p-4 pt-12 rounded-md shadow-lg bg-gradient-to-tr from-sky-950 to-sky-800 border-4 border-t-cyan-400 border-l-cyan-400 border-r-teal-400 border-b-teal-400">
                            <div className="absolute w-20 h-20 rounded-full shadow-md top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 grid place-items-center bg-gradient-to-tr from-sky-950 to-sky-800 border-4 border-t-cyan-400 border-l-cyan-400 border-r-teal-400 border-b-teal-400 text-cyan-400">
                                <FaRocket size={36}/>
                            </div>
                            <div className="text-center">
                                <p className="font-bold text-2xl text-grad from-sky-400 via-teal-400 to-sky-400 slide">Nosso curso:</p>
                                <p className="font-medium text-xl"> Ensina a aplicação clínica com aprofundamento científico e prático</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section
            id="garantia"
            className="bg-gradient-to-tr from-cyan-300 to-cyan-100 text-ps-dark shadow-lg mt-[10rem]"
        >

            <div className="absolute w-full max-w-[16rem] top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <img alt="" src="/selo_garantia.svg" className="block w-full h-auto"/>
            </div>

            <div className="w-full max-w-screen-xl mx-auto pt-[10rem] px-4">
                <div className="content text-center">
                    <p className="font-bold text-4xl lg:text-5xl mb-4 text-grad from-sky-700 to-teal-500">
                        Garantia de 7 dias
                    </p>
                    <p className="font-medium text-xl">
                        Se não gostar do curso, devolvemos seu dinheiro!
                    </p>
                    <div className="text-white my-8">
                        <PurchaseButton/>
                    </div>
                </div>
            </div>
        </section>

        <section id="faq">
            <div className="w-full max-w-screen-xl mx-auto">
                <div className="content px-4">
                    <h1 className="text-4xl font-bold mb-8 text-center">
                        Perguntas Frequentes
                    </h1>
                    <div className="w-full max-w-screen-md mx-auto">
                        <CollapsibleGroup>
                            {faq.map((i, k) => (
                                <Collapsible
                                    title={i.q}
                                    key={k}
                                    className="bg-gradient-to-tr from-cyan-300 to-cyan-100 text-ps-dark font-medium shadow-lg rounded-lg p-3 mb-2 text-lg lg:text-xl"
                                >
                                    <p className="text-lg font-normal pt-4">{i.a}</p>
                                </Collapsible>
                            ))}
                        </CollapsibleGroup>
                    </div>
                </div>
            </div>
        </section>

        <section id="bio" className="bg-gradient-to-tr from-cyan-600 to-cyan-500 shadow-md">
            <div className="w-full max-w-screen-xl mx-auto">
                <div className="content">
                    <div className="grid grid-cols-1 lg:grid-cols-2 py-12 px-4 w-full max-w-screen-lg mx-auto place-items-center">

                        <div>
                            <h1 className="font-bold text-2xl mb-4">Conheça seu instrutor</h1>
                            <p>
                                <span className="font-semibold">André Mendes</span> é fisioterapeuta especialista em biomecânica do pé e tornozelo,
                                com vasta experiência clínica e acadêmica.
                                Mestre e doutorando em fisioterapia e autor do livro Palmilhas Terapêuticas: Ciência e Prática Clínica,
                                sócio-criador da Podoshop® e do Palmilhando®,
                                com 15 anos de experiência na prescrição e confecção de palmilhas terapêuticas.
                            </p>
                        </div>

                        <img
                            alt=""
                            src="https://lib.palmilhando.com.br/img/andre-mendes-cursos-presenciais.webp"
                            className="w-full max-w-80"
                            draggable="false"
                        />

                    </div>
                </div>
            </div>
        </section>

        <section id="footer">
            <div className="w-full max-w-screen-xl mx-auto">
                <div className="content grid place-items-center">
                    <LogoPalmilhando size={36}/>
                </div>
            </div>
        </section>

    </>
}