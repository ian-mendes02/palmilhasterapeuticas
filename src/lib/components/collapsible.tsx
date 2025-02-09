import { classList } from '@/lib/utils'
import { createContext, ReactNode, useContext, useId, useState } from 'react'
import { FaCaretRight } from 'react-icons/fa6'

type CollapsibleGroupContextType = {
    activeIndex?: string,
    setActiveIndex: (index: string | undefined) => void
}

export const CollapsibleGroupContext = createContext({} as CollapsibleGroupContextType)

export function Collapsible({ children, title, className }: Readonly<{
    children: ReactNode,
    title: string,
    className?: string
}>) {
    const { activeIndex, setActiveIndex } = useContext(CollapsibleGroupContext)
    const id = useId()
    const isActive = activeIndex === id
    return (
        <div
            onClick={() => setActiveIndex(isActive ? undefined : id)}
            className={classList('w-full cursor-pointer', className)}
        >
            <div className="w-full flex items-center justify-between">
                <div className="w-full truncate">{title}</div>
                <FaCaretRight className={classList(
                    'duration-150',
                    isActive ? 'transform rotate-90' : 'transform rotate-0'
                )}/>
            </div>

            <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: isActive ? '100vh' : 0 }}
            >
                {children}
            </div>

        </div>
    )
}

export function CollapsibleGroup({ children, className }: Readonly<{ children: ReactNode, className?: string }>) {
    const [activeIndex, setActiveIndex] = useState<string>()
    return (
        <CollapsibleGroupContext.Provider value={{ activeIndex, setActiveIndex }}>
            <div className={classList('w-full', className)}>
                {children}
            </div>
        </CollapsibleGroupContext.Provider>
    )
}