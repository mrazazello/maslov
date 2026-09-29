import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/core'
import './logosList.css'

const logos = [
    '/public/temp/Placeholder-Logo1@2x.png',
    '/public/temp/Placeholder-Logo2@2x.png',
    '/public/temp/Placeholder-Logo3@2x.png',
    '/public/temp/Placeholder-Logo4@2x.png',
    '/public/temp/Placeholder-Logo1@2x.png',
    '/public/temp/Placeholder-Logo2@2x.png',
    '/public/temp/Placeholder-Logo3@2x.png',
    '/public/temp/Placeholder-Logo4@2x.png',
]

export const LogosList = () => {
    const canSlide = logos.length > 4

    return (
        <>
        <h4>Нам доверяют</h4>
        <Splide
            className="logo-list"
            aria-label="Нам доверяют"
            options={{
                type: canSlide ? 'loop' : 'slide',
                perPage: 4,
                perMove: 1,
                gap: 24,
                arrows: false,
                pagination: false,
                autoplay: canSlide,
                interval: 2500,
                speed: 700,
                drag: canSlide,
            }}
        >
            {logos.map((src) => (
                <SplideSlide key={src}>
                    <img src={src} alt="" className="logo-item" />
                </SplideSlide>
            ))}
        </Splide>
        </>
    )
}