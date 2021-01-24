import React from 'react'

import { useSpring, animated, interpolate } from 'react-spring'
import * as easings from 'd3-ease'
import Link from '../Buttons/Link'
// import fox from './assets/fox.png'


type Props = {

}

const Stage: React.FC<Props> = () => {


    const BackgroundProps = useSpring({
        config: {
            duration: 1500,
            easing: easings.easeCubic
        },
        from: {
            transform: `scale(1)`,
            opacity: 1,
            filter: `grayscale(1)`
        },
        to: {
            transform: `scale(2.6)`,
            opacity: 0.2,
            filter: `grayscale(1)`
        },
        delay: 1400
    })

    const BGimgProps = useSpring({
        config: {
            duration: 1500,
            easing: easings.easeCubic
        },
        filter: `grayscale(100)`,
        delay: 1400
    })

    const TitleProps = useSpring({
        config: {
            duration: 300,
            easing: easings.easeCubic
        },
        from: {
            display: `none`,
            opacity: 0,
        },
        to: {
            display: `block`,
            opacity: 1,
        },
        delay: 4000
    })


    return (
        <div
            className={`
            h-screen
            w-full
            bg-background
            bg-bg-background
            flex
            flex-col
            justify-center
            items-center
        `}>

            <animated.div
                style={BackgroundProps}
                className={`
                p-4
                absolute
            `}>

                <animated.img
                    style={BGimgProps}
                    src={'https://cdn.pixabay.com/photo/2013/07/12/17/55/zebra-152604_1280.png'}
                    // src={'https://cdn.pixabay.com/photo/2012/05/02/21/37/white-46415_1280.png'}
                    className={`
                    w-40
                `} />
            </animated.div>
            <animated.h1
                style={TitleProps}
                className={`
                    h-4
                    tracking-widest
                    text-8xl
                    uppercase
                    text-white
                    z-10
                    font-serif
                    font-bold
                `}>
                H1 Title
            </animated.h1>
            <animated.div
                style={TitleProps}
                className={`
                    z-10
                    mt-28
                `}
            >
                <Link
                    primary
                    to="#"
                    text="CTA Text"
                />
            </animated.div>
        </div>

    )
}

export default Stage