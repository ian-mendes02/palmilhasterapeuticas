'use client'
import { useState } from 'react'

export default function Gallery({ source }: { source: string[] }) {
    const [selectedImage, setSelectedImage] = useState(0)
    return (
        <div className="mx-auto md:flex md:justify-center">
            <div className="w-full max-w-screen-md">
                <img
                    alt=""
                    src={source[selectedImage]}
                    className="block h-auto aspect-square object-cover object-center rounded-md shadow-md mb-4"
                />
            </div>
            <div className="flex md:flex-col w-full md:w-auto md:h-full md:max-h-[768px] items-center justify-start overflow-x-scroll md:overflow-x-auto md:overflow-y-scroll pb-4 md:pb-0 md:pl-2">
                {source.map((i, k) => (
                    <img
                        key={k}
                        alt=""
                        src={i}
                        className="block w-32 h-32 aspect-square object-cover object-center rounded-md shadow-md mr-2 last-of-type:mr-0 md:mb-2 md:last-of-type:mb-0 cursor-pointer hover:brightness-75 duration-150"
                        onClick={() => setSelectedImage(k)}
                    />
                ))}
            </div>
        </div>
    )
}