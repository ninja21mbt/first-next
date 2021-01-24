import React from 'react'
import NextLink from 'next/link'
import { useSpring, animated } from 'react-spring'


export type TLink = {
    className?: string
    to?: string
    text?: string
    primary?: boolean
    secondary?: boolean
    disabled?: boolean
    target?: string
}

export const Link: React.FC<TLink> = ({
    to, 
    text,
    primary,
    secondary,
    disabled,
    className,
    target

}) => {

    const primaryStyling = `
        text-indigo-500 ${primary? 'hover:text-black' : ''} active:text-white
        backdrop-blur ${primary? 'hover:bg-indigo-500' : ''} active:bg-black
        border-indigo-500
        duration-200
    `
    const disabledStyling = `
        opacity-50
        pointer-events-none
    `

    const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
    const trans = (x, y) => `translate3d(${x / 5}px,${y / 5}px,0)`
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

    return (
        <animated.div
            style={{ transform: props.xy.interpolate(trans) }}
            onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
            className={`
                text-center
                text-black
                font-bold
                uppercase
                text-2xl
                px-8
                py-2
                duration-250
                ease-in-pit
                rounded-full
                border-4
                border-double
                tracking-wider
                ${primary ? primaryStyling : ''}
                ${disabled ? disabledStyling : ''}
        `}>
            <NextLink href={to} >
                <a
                    className={className}
                    target={target}
                >
                {text}
                </a>   
            </NextLink>  
        </animated.div>
    )
}

export default Link