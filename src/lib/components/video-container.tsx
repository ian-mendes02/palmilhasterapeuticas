'use client'
import { classList } from '@/lib/utils'
import { useState } from 'react'
import { FaCirclePlay } from 'react-icons/fa6'

export default function VideoContainer({ className, src, thumbnail }: {
    className?: string,
    src?: string,
    thumbnail?: string
}) {
    const [videoStarted, setVideoStarted] = useState(false)
    if (!src) {
        return (
            <div className={classList('group grid place-items-center bg-neutral-700 rounded-lg shadow-lg cursor-pointer w-full h-auto aspect-video', className)}>
                <FaCirclePlay size={64} className="opacity-50 group-hover:opacity-100 duration-150"/>
            </div>
        )
    }
    return (
        <div
            className={classList('group grid place-items-center bg-neutral-700 rounded-lg shadow-lg cursor-pointer w-full h-auto aspect-video overflow-hidden', className)}
            onClick={() => setVideoStarted(true)}
        >
            {videoStarted
                ? (
                    <iframe src={src} className="outline-none block w-full h-full rounded-[inherit]"></iframe>
                ) : (
                    <div
                        className="w-full h-full rounded-[inherit] bg-cover bg-center"
                        style={{backgroundImage: `url('${thumbnail}')`}}
                    >
                        <FaCirclePlay size={64} className="opacity-50 group-hover:opacity-100 duration-150"/>
                    </div>
                )
            }
        </div>
    )
}