'use client'
import { FaCalendarAlt, FaExternalLinkAlt, FaMapMarkerAlt } from 'react-icons/fa'
import LogoPalmilhando from '@/lib/components/logo-palmilhando'
import IconeImersao from '@/lib/components/icone-imersao'
import LogoImersao from '@/lib/components/logo-imersao'
import { FaArrowDown, FaUser } from 'react-icons/fa6'
import Carousel from '@/lib/components/carousel'
import Gallery from '@/lib/components/gallery'
import { MdGroups } from 'react-icons/md'
import { scrollTo } from '@/lib/utils'
import '$/carousel.css'
import '$/cursos.css'

const whatsappLink = 'https://wa.me/5512982628132'

const courseInfo = [
    {
        date: '21 e 22 de março',
        timestamp: Date.parse('2025-03-21T00:00:00.000-03:00'),
        location: 'São José dos Campos',
        venue: 'Mercure Hotel',
        link: 'https://www.sympla.com.br/evento/curso-de-palmilhas-terapeuticas-presencial/2808151'
    },
    {
        date: '11 e 12 de abril',
        timestamp: Date.parse('2025-04-11T00:00:00.000-03:00'),
        location: 'Belo Horizonte',
        venue: 'UniBH campus Estoril',
        link: 'https://wa.me/553196580040'
    },
    {
        date: '30 e 31 de maio',
        timestamp: Date.parse('2025-05-30T00:00:00.000-03:00'),
        location: 'Curitiba',
        venue: 'Edificio West Center',
        link: 'https://www.sympla.com.br/evento/curso-de-palmilhas-terapeuticas-presencial-copia/2808153'
    }
]

const productSlideshow = [
    'https://lib.palmilhando.com.br/img/cursos_presenciais_palmilha_1.webp',
    'https://lib.palmilhando.com.br/img/cursos_presenciais_palmilha_2.webp',
    'https://lib.palmilhando.com.br/img/cursos_presenciais_palmilha_3.webp',
    'https://lib.palmilhando.com.br/img/cursos_presenciais_palmilha_4.webp'
]

const photoGallery = [
    'https://lib.palmilhando.com.br/img/cursos_1.webp',
    'https://lib.palmilhando.com.br/img/cursos_2.webp',
    'https://lib.palmilhando.com.br/img/cursos_3.webp',
    'https://lib.palmilhando.com.br/img/cursos_4.webp',
    'https://lib.palmilhando.com.br/img/cursos_5.webp',
    'https://lib.palmilhando.com.br/img/cursos_6.webp',
    'https://lib.palmilhando.com.br/img/cursos_7.webp',
    'https://lib.palmilhando.com.br/img/cursos_8.webp',
    'https://lib.palmilhando.com.br/img/cursos_9.webp',
    'https://lib.palmilhando.com.br/img/cursos_10.webp',
    'https://lib.palmilhando.com.br/img/cursos_11.webp',
    'https://lib.palmilhando.com.br/img/cursos_12.webp',
    'https://lib.palmilhando.com.br/img/cursos_13.webp',
    'https://lib.palmilhando.com.br/img/cursos_14.webp',
    'https://lib.palmilhando.com.br/img/cursos_15.webp',
    'https://lib.palmilhando.com.br/img/cursos_16.webp',
    'https://lib.palmilhando.com.br/img/cursos_17.webp',
    'https://lib.palmilhando.com.br/img/cursos_18.webp'
]

export default function Page() {
    const datenow = Date.now()
    return (
        <>

            <div className="w-screen flex items-center justify-between p-3 bg-sky-100 shadow-md">
                <div>
                    <LogoImersao size={36}/>
                </div>
            </div>

            <section
                id="header"
                className="bg-material before:bg-fade-bottom before:blur-sm before:opacity-30 lg:py-20"
            >
                <div className="container relative z-10 mx-auto">
                    <div className="content px-4 mx-auto">
                        <div className="flex items-center justify-center mx-auto">
                            <img
                                src="/palmilhas-leque.webp"
                                alt=""
                                draggable={false}
                                className="hidden lg:block -scale-x-100 w-72 aspect-square"
                            />
                            <div className="w-full max-w-2xl flex flex-col items-center p-4">
                                <p className="text-4xl lg:text-5xl font-semibold">
                                    <span className="text-cyan-300">Uma experiência completa </span>
                                    para aprender a avaliar, prescrever e confeccionar palmilhas.
                                </p>
                                <div className="grid place-items-center my-8 lg:hidden">
                                    <img
                                        src="/cursos_palmilha.webp"
                                        alt=""
                                        draggable={false}
                                        className="-scale-x-100 w-full"
                                    />
                                </div>
                                <p className="text-lg font-medium my-4">
                                    Dois dias intensos de teoria e muita prática de
                                    <span className="text-cyan-300"> avaliação e confecção de palmilhas </span>
                                    com diferentes técnicas de moldagem e configurações de elementos.
                                    <br/><br/>
                                    Continue lendo para saber mais <FaArrowDown className="inline"/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="about"
                className="bg-gradient-to-b from-ps-primary-light to-ps-primary-dark py-16"
            >
                <div className="container mx-auto w-full max-w-6xl">
                    <div className="content px-4">
                        <p className="text-2xl mb-4 font-semibold w-full max-w-screen-md mx-auto lg:text-center">
                            Tudo que você precisa saber sobre a
                            <span className="font-semibold text-cyan-300"> prescrição</span>,
                            <span className="font-semibold text-cyan-300"> confecção</span> e
                            <span className="font-semibold text-cyan-300"> aplicação</span> de palmilhas terapêuticas.
                        </p>

                        <div className="divider bg-gradient-to-r from-transparent via-sky-300 to-transparent my-8"></div>

                        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:place-items-center">
                            <div className="px-2">
                                <ul className="list-chain text-lg">
                                    <li>
                                        <span className="text-cyan-300 font-semibold">Anatomia e biomecânica</span> para a prescrição de palmilhas.
                                    </li>
                                    <li>
                                        Prescrição para <span className="text-cyan-300 font-semibold">diferentes queixas dos pés</span>, incluindo fasciopatias, metatarsalgias, pés diabéticos e mais.
                                    </li>
                                    <li>
                                        Avaliação do <span className="text-cyan-300 font-semibold">pé e tornozelo</span> para a prescrição de palmilhas.
                                    </li>
                                    <li>
                                        Prescrição de <span className="text-cyan-300 font-semibold">elementos podais</span> e
                                        <span className="text-cyan-300 font-semibold"> tipos de moldagens</span>.
                                    </li>
                                    <li>
                                        <span className="text-cyan-300 font-semibold">Estudos de casos</span> e discussão das prescrições dos diferentes tipos de palmilhas.
                                    </li>
                                    <li>
                                        <span className="text-cyan-300 font-semibold">Apresentação de materiais e ferramentas</span> - lixadeira, microrretífica, termoprensa, soprador e moldadores.
                                    </li>
                                </ul>
                                </div>
                                <div className="container grid w-full h-full place-items-center mx-auto">
                                    <Carousel
                                        isInfinite
                                        withIndicator
                                        visibleItemsCount={1}
                                        isFullWidth
                                        showControls={false}
                                    >
                                        {productSlideshow.map((i, k) => (
                                            <div key={k} className="w-full h-full p-4">
                                                <img
                                                    src={i}
                                                    className="w-full lg:w-3/4 h-full m-auto"
                                                    draggable="false"
                                                    alt=""
                                                />
                                            </div>
                                        ))}
                                    </Carousel>
                                </div>
                        </div>
                        <button
                            onClick={() => scrollTo('purchase', 'center')}
                            className="block w-max mt-8 rounded-full py-2 px-8 bg-gradient-to-tr from-sky-500 to-sky-400 border-t border-t-sky-300 shadow-md text-xl font-bold hover:brightness-110 duration-150 cursor-pointer lg:w-max lg:px-8 mx-auto"
                        >
                            Garanta sua vaga
                        </button>
                    </div>
                </div>
            </section>

            <section
                id="bio"
                className="bg-gradient-to-tr from-cyan-200 to-cyan-100 text-ps-dark shadow-md"
            >
                <div className="container mx-auto w-full max-w-6xl">
                    <div className="content px-4 flex flex-col lg:flex-row justify-center items-center">
                        <div className="w-full max-w-md">
                            <h1 className="text-3xl font-semibold my-2 text-ps-primary">Olá! Meu nome é <br/> André Mendes,</h1>
                            <p>Sou fisioterapeuta especialista em fisioterapia ortopédica com 20 anos de carreira. Sou mestre e doutorando em fisioterapia e autor do livro <i>Palmilhas Terapêuticas: Ciência e Prática Clínica</i>, sócio-criador da Podoshop® e do Palmilhando® com 15 anos de experiência na prescrição e confecção de palmilhas terapêuticas.</p>
                        </div>
                        <img
                            src="/andre-mendes-cursos-presenciais.webp"
                            alt=""
                            draggable="false"
                            width={480}
                            height={480}
                            className="lg:w-72"
                        />
                    </div>
                </div>
            </section>

            <section
                id="purchase"
                className="bg-material before:opacity-25 before:blur-md before:bg-fade-top overflow-hidden"
            >
                <div className="container mx-auto w-full max-w-6xl">
                    <div className="content px-4">
                        <h1 className="font-bold text-4xl text-center">Cursos presenciais</h1>

                        <div className="divider bg-gradient-to-r from-transparent via-cyan-200 to-transparent my-4"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full max-w-5xl mx-auto">

                            {courseInfo.map((course, key) => {
                                const isAvailable = course.timestamp <= datenow
                                return (
                                    <div
                                        key={key}
                                        className="relative h-full justify-evenly bg-gradient-to-tr from-cyan-200 to-cyan-100 rounded-lg shadow-lg"
                                    >
                                        <div className="flex flex-col items-center px-4 py-6">
                                            <p className="font-bold whitespace-nowrap text-2xl uppercase text-ps-primary flex items-center">
                                                <IconeImersao className="mr-2" size={24}/> {course.location}
                                            </p>
                                            <div className="my-4 flex flex-col items-center">
                                                <p className="font-medium text-2xl my-2 text-ps-primary flex items-center">
                                                    <FaCalendarAlt className="mr-2" size={24}/> {course.date}
                                                </p>
                                                <p className="font-medium text-2xl my-2 text-ps-primary flex items-center">
                                                    <FaMapMarkerAlt className="mr-2" size={24}/> {course.venue}
                                                </p>
                                            </div>
                                            <a
                                                href={isAvailable ? course.link : undefined}
                                                target="_blank"
                                                className={
                                                    isAvailable
                                                        ? 'flex items-center w-max text-center rounded-full py-2 px-8 bg-gradient-to-tr from-neutral-500 to-neutral-400 border-t border-t-neutral-300 shadow-md text-xl font-bold lg:w-max lg:px-8 mx-auto pointer-events-none opacity-70'
                                                        : 'flex items-center w-max text-center rounded-full py-2 px-8 bg-gradient-to-tr from-sky-500 to-sky-400 border-t border-t-sky-300 shadow-md text-xl font-bold hover:brightness-110 duration-150 cursor-pointer lg:w-max lg:px-8 mx-auto'
                                                }
                                            >
                                                {isAvailable
                                                    ? <>Indisponível</>
                                                    : <>Garanta sua vaga <FaExternalLinkAlt size={20} className="ml-2"/></>
                                                }
                                            </a>
                                            <p className="mt-4 text-xs italic text-slate-500 text-center">Acesse o link para ver o preço e fazer sua inscrição</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section id="mentorship" className="bg-gradient-to-tr from-cyan-200 to-cyan-100 text-ps-dark">
                 <div className="container mx-auto w-full max-w-6xl">
                    <div className="content p-4">

                        <div className="w-full flex items-center justify-center max-w-screen-md mx-auto lg:text-center">
                            <p className="font-bold text-3xl mb-4 text-ps-primary">
                                Quer uma experiência mais personalizada?
                                Conheça nossas mentorias
                            </p>
                        </div>

                        <div className="divider bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-2"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <div className="relative mt-16 bg-gradient-to-tr from-sky-500 to-sky-400 border-t border-t-sky-300 shadow-md rounded-lg text-white">
                                <div className="absolute grid place-items-center h-24 w-24 top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-lg shadow-md bg-gradient-to-tr from-sky-500 to-sky-400 border-b-4 border-t border-b-sky-600 border-t-sky-100">
                                    <FaUser size={48}/>
                                </div>
                                <div className="p-4 pt-16">
                                    <div className="text-2xl text-center font-semibold mb-4">O conteúdo que <span
                                        className="text-teal-200"
                                    >você</span> precisa.</div>
                                    <p className="lg:text-center">
                                        O conteúdo abordado é definido com base nas
                                        <span className="text-teal-200"> suas necessidades individuais</span>
                                        , em uma reunião particular com o seu mentor.
                                    </p>
                                </div>
                            </div>

                             <div className="relative mt-16 bg-gradient-to-tr from-sky-500 to-sky-400 border-t border-t-sky-300 shadow-md rounded-lg text-white">
                                <div className="absolute grid place-items-center h-24 w-24 top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-lg shadow-md bg-gradient-to-tr from-sky-500 to-sky-400 border-b-4 border-t border-b-sky-600 border-t-sky-100">
                                    <FaCalendarAlt size={48}/>
                                </div>
                                <div className="p-4 pt-16">
                                    <div className="text-2xl text-center font-semibold mb-4">Um
                                        <span className="text-teal-200"> dia inteiro </span> dedicado ao
                                        <span className="text-teal-200"> seu aprendizado</span>
                                    </div>
                                    <p className="lg:text-center">
                                        O conteúdo planejado será abordado ao longo de um dia. Durante esse período, você poderá sanar suas dúvidas diretamente com o seu mentor.
                                    </p>
                                </div>
                            </div>

                             <div className="relative mt-16 bg-gradient-to-tr from-sky-500 to-sky-400 border-t border-t-sky-300 shadow-md rounded-lg text-white">
                                <div className="absolute grid place-items-center h-24 w-24 top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-lg shadow-md bg-gradient-to-tr from-sky-500 to-sky-400 border-b-4 border-t border-b-sky-600 border-t-sky-100">
                                    <MdGroups size={64}/>
                                </div>
                                <div className="p-4 pt-16">
                                    <div className="text-2xl text-center font-semibold mb-4">Treine sua<span className="text-teal-200"> equipe</span></div>
                                    <p className="lg:text-center">
                                        Alinhe o desempenho da sua equipe com nossas mentorias em grupo.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button
                            className="block w-full text-center mt-8 rounded-full py-2 px-4 bg-gradient-to-tr from-sky-500 to-sky-400 border-t border-t-sky-300 shadow-lg text-xl font-bold hover:brightness-110 duration-150 cursor-pointer lg:w-max lg:px-8 lg:mx-auto text-white"
                            onClick={() => scrollTo('mentorship-purchase')}
                        >
                            Agende sua mentoria
                        </button>
                    </div>
                </div>
            </section>

            <section id="gallery">
                <div className="container mx-auto w-full max-w-6xl">
                    <div className="content px-4">
                        <h1 className="font-bold text-center text-4xl mb-4">
                            Galeria
                        </h1>

                        <p className="text-center">Confira fotos dos últimos cursos presenciais</p>

                        <div className="divider bg-gradient-to-r from-transparent via-cyan-300 to-transparent my-4"></div>

                        <Gallery source={photoGallery}/>
                    </div>
                </div>
            </section>

            <section id="mentorship-purchase" className="bg-gradient-to-tr from-cyan-200 to-cyan-100 text-ps-dark">
                <div className="container mx-auto w-full max-w-6xl">
                    <div className="content px-4">
                        <h1 className="font-bold text-center text-4xl mb-4 text-ps-primary">
                            Mentorias: <br/> Seu investimento
                        </h1>

                        <div className="divider bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-4"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="relative bg-gradient-to-tr from-sky-600 to-sky-400 border-t border-t-sky-300 shadow-lg rounded-lg text-white">
                                <div className="p-8 flex flex-col items-center">
                                    <p className="text-2xl lg:text-4xl text-ceter font-bold mb-4 flex items-center justify-center">
                                        <FaUser size={36} className="mr-2"/> Plano individual
                                    </p>

                                    <div className="divider bg-gradient-to-r from-transparent via-white to-transparent mb-4"></div>

                                    <p className="text-4xl text-center">R$<span className="font-semibold">2000</span><sup
                                        className="text-lg"
                                    >,00</sup></p>
                                    <p className="text-center text-base text-slate-100 italic">à vista ou em até 12x</p>
                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        className="flex items-center justify-center w-full text-center rounded-full my-4 py-2 px-4 bg-gradient-to-tr from-sky-700 to-sky-500 border-t border-t-sky-300 shadow-lg text-xl font-bold hover:brightness-110 duration-150 cursor-pointer lg:w-max lg:px-8 lg:mx-auto text-white"
                                    >
                                        Agende sua mentoria <FaExternalLinkAlt size={20} className="ml-2"/>
                                    </a>

                                    <div className="divider bg-gradient-to-r from-transparent via-white to-transparent my-4"></div>

                                    <ul className="perk-list">
                                        <li className="include"> Conteúdo personalizado</li>
                                        <li className="include"> Um dia inteiro dedicado ao seu aprendizado</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="relative bg-gradient-to-tr from-sky-600 to-sky-400 border-t border-t-sky-300 shadow-lg rounded-lg text-white">
                                <div className="p-8 flex flex-col items-center">
                                    <p className="text-2xl lg:text-4xl text-ceter font-bold mb-4 flex items-center justify-center">
                                        <MdGroups size={48} className="mr-2"/> Treine sua equipe
                                    </p>

                                    <div className="divider bg-gradient-to-r from-transparent via-white to-transparent mb-4"></div>

                                    <p className="text-4xl text-center flex items-center justify-center">R$<span
                                        className="font-semibold"
                                    >1600</span><sup
                                        className="text-lg"
                                    >,00</sup><span className="text-base ml-1">/participante</span></p>
                                    <p className="text-center text-base text-slate-100 italic">à vista ou em até 12x</p>
                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        className="flex items-center justify-center w-full text-center rounded-full my-4 py-2 px-4 bg-gradient-to-tr from-sky-700 to-sky-500 border-t border-t-sky-300 shadow-lg text-xl font-bold hover:brightness-110 duration-150 cursor-pointer lg:w-max lg:px-8 lg:mx-auto text-white"
                                    >
                                        Agende sua mentoria <FaExternalLinkAlt size={20} className="ml-2"/>
                                    </a>

                                    <div className="divider bg-gradient-to-r from-transparent via-white to-transparent my-4"></div>

                                    <ul className="perk-list">
                                        <li className="include"> Conteúdo personalizado</li>
                                        <li className="include"> Até 3 participantes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="footer" className="bg-ps-dark">
                <div className="container mx-auto w-full max-w-6xl">
                    <div className="content grid place-items-center">
                        <LogoPalmilhando size={128}/>
                    </div>
                </div>
            </section>

        </>
    )
}