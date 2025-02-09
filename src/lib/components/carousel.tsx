'use client'
import {
    Children,
    useMemo,
    useRef,
    useEffect,
    useState,
    type ReactNode,
    type TouchEvent
} from 'react'

type CarouselProps = Readonly<{
    children?: ReactNode,
    visibleItemsCount?: number,
    isInfinite?: boolean,
    withIndicator?: boolean,
    className?: string,
    id?: string,
    autoScrollEnabled?: boolean,
    autoScrollTimeout?: number,
    isFullWidth?: boolean,
    showControls?: boolean
}>

export default function Carousel({
    children = [],
    visibleItemsCount = 1,
    isInfinite,
    withIndicator,
    className = undefined,
    id = undefined,
    autoScrollEnabled = true,
    autoScrollTimeout = 3000,
    isFullWidth = false,
    showControls = true
}: CarouselProps) {

    const [timeoutInProgress, setTimeoutInProgress] = useState<boolean>(false)
    const [elementWidth, setElementWidth] = useState<number | null>(null)
    const indicatorContainerRef = useRef<HTMLDivElement>(null)
    const carouselRef = useRef<HTMLDivElement>(null)

    const originalItemsLength = useMemo(() => Children.count(children), [children])

    const isRepeating = useMemo(
        () => isInfinite && Children.count(children) > visibleItemsCount,
        [children, isInfinite, visibleItemsCount]
    )

    const [currentIndex, setCurrentIndex] = useState<number>(isRepeating ? visibleItemsCount : 0)
    const [isTransitionEnabled, setTransitionEnabled] = useState<boolean>(true)
    const [touchPosition, setTouchPosition] = useState<number | null>(null)

    useEffect(() => {
        if (isRepeating && (currentIndex === visibleItemsCount || currentIndex === originalItemsLength)) {
            setTransitionEnabled(true)
        }
    }, [currentIndex, isRepeating, visibleItemsCount, originalItemsLength])

    useEffect(() => {
        if (withIndicator) {
            const active = indicatorContainerRef.current?.querySelector('.dots-active')
            if (active) {
                let index = active.getAttribute('data-index')
                if (index !== null && indicatorContainerRef.current?.scrollTo) {
                    indicatorContainerRef.current?.scrollTo({
                        left: ((Number(index) - 2) / 5) * 50,
                        behavior: 'smooth'
                    })
                }
            }
        }
    }, [withIndicator, currentIndex])

    useEffect(() => {
        function vw() {
            let el = carouselRef.current?.querySelectorAll('.carousel-element')[0].clientWidth
            if (el) setElementWidth(el)
        }

        vw()
        window.visualViewport?.addEventListener('resize', vw)
        return () => window.visualViewport?.removeEventListener('resize', vw)
    }, [])

    const nextItem = () => {
        if (currentIndex > originalItemsLength) {
            setTimeoutInProgress(true)
        }
        if (isRepeating || currentIndex < originalItemsLength - visibleItemsCount) {
            setCurrentIndex((prevState) => prevState + 1)
        }
    }

    const previousItem = () => {
        const isOnEdgeBack = isRepeating ? currentIndex <= visibleItemsCount : currentIndex === 0
        if (isOnEdgeBack) {
            setTimeoutInProgress(true)
        }
        if (isRepeating || currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1)
        }
    }

    const handleTouchStart = (e: TouchEvent) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e: TouchEvent) => {
        const touchDown = touchPosition
        if (touchDown === null) {
            return
        }
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
        if (diff > 5) {
            nextItem()
        }
        if (diff < -5) {
            previousItem()
        }
        setTouchPosition(null)
    }

    const handleTransitionEnd = () => {
        if (isRepeating) {
            if (currentIndex === 0) {
                setTransitionEnabled(false)
                setCurrentIndex(originalItemsLength)
            } else if (currentIndex === originalItemsLength + visibleItemsCount) {
                setTransitionEnabled(false)
                setCurrentIndex(visibleItemsCount)
            }
        }
        setTimeoutInProgress(false)
    }

    const extraPreviousItems = useMemo(() => {
        let output = []
        for (let index = 0; index < visibleItemsCount; index++) {
            output.push(Children.toArray(children)[originalItemsLength - 1 - index])
        }
        output.reverse()
        return output
    }, [children, originalItemsLength, visibleItemsCount])

    const extraNextItems = useMemo(() => {
        let output = []
        for (let index = 0; index < visibleItemsCount; index++) {
            output.push(Children.toArray(children)[index])
        }
        return output
    }, [children, visibleItemsCount])

    const renderDots = useMemo(() => {
        let output = []
        const localShow = isRepeating ? visibleItemsCount : 0
        const localLength = isRepeating
            ? originalItemsLength
            : Math.ceil(originalItemsLength / visibleItemsCount)
        const calculatedActiveIndex =
            currentIndex - localShow < 0
                ? originalItemsLength + (currentIndex - localShow)
                : currentIndex - localShow
        for (let index = 0; index < localLength; index++) {
            let className = ''
            if (calculatedActiveIndex === index) {
                className = 'dots-active'
            } else {
                if (calculatedActiveIndex === 0) {
                    if (calculatedActiveIndex + index <= 2) {
                        className = 'dots-close'
                    } else {
                        className = 'dots-far'
                    }
                } else if (calculatedActiveIndex === localLength - 1) {
                    if (Math.abs(calculatedActiveIndex - index) <= 2) {
                        className = 'dots-close'
                    } else {
                        className = 'dots-far'
                    }
                } else {
                    if (Math.abs(calculatedActiveIndex - index) === 1) {
                        className = 'dots-close'
                    } else {
                        className = 'dots-far'
                    }
                }
            }
            output.push(<div key={index} data-index={index} className={className}/>)
        }
        return output
    }, [currentIndex, isRepeating, originalItemsLength, visibleItemsCount])

    const isNextButtonVisible = useMemo(() => {
        return (
            isRepeating || currentIndex < originalItemsLength - visibleItemsCount
        )
    }, [isRepeating, currentIndex, originalItemsLength, visibleItemsCount])

    const isPrevButtonVisible = useMemo(() => isRepeating || currentIndex > 0, [
        isRepeating,
        currentIndex
    ])

    const scroll = () => {
        if (!timeoutInProgress) {
            let i = currentIndex + 1
            if (i > originalItemsLength + 1) {
                i = 0
            }
            setCurrentIndex(i)
        }
    }

    useEffect(() => {
        let doAutoScroll: NodeJS.Timeout | undefined = undefined
        if (autoScrollEnabled) {
            doAutoScroll = setTimeout(scroll, autoScrollTimeout)
        }
        return () => clearTimeout(doAutoScroll)
    }, [currentIndex])

    return (
        <div className={className} id={id} ref={carouselRef}>
            <div className={`carousel-wrapper`}>
                {isPrevButtonVisible ? (
                    <button
                        disabled={timeoutInProgress}
                        style={{
                            cursor: timeoutInProgress ? 'not-allowed' : 'pointer',
                            pointerEvents: timeoutInProgress ? 'none' : 'inherit'
                        }}
                        onClick={previousItem}
                        className="left-arrow-button"
                    >
                        <span className="left-arrow"/>
                    </button>
                ) : null}
                <div
                    className={`carousel-content-wrapper`}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div
                        className={`carousel-content *:w-[calc(100% / ${visibleItemsCount})]`}
                        style={{
                            transform: elementWidth ? `translateX(-${currentIndex * elementWidth}px)` : undefined,
                            transition: !isTransitionEnabled ? 'none' : undefined
                        }}
                        onTransitionEnd={() => handleTransitionEnd()}
                    >
                        {isRepeating && extraPreviousItems}

                        {Children.map(children, (child, index) => (
                            <div
                                key={index}
                                className={isFullWidth ? 'w-full h-auto carousel-element' : 'w-auto h-auto carousel-element'}
                            >{child}</div>
                        ))}

                        {isRepeating && extraNextItems}
                    </div>
                </div>
                {isNextButtonVisible ? (
                    <button
                        disabled={timeoutInProgress}
                        style={{
                            cursor: timeoutInProgress ? 'not-allowed' : 'pointer',
                            pointerEvents: timeoutInProgress ? 'none' : 'inherit'
                        }}
                        onClick={nextItem}
                        className="right-arrow-button"
                    >
                        <span className="right-arrow"/>
                    </button>
                ) : null}
            </div>
            {withIndicator && <div ref={indicatorContainerRef} className={`indicator-container `}>{...renderDots}</div>}
        </div>
    )
};