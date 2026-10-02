import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/core'
import './logosList.css'

const logos = [
    '/temp/Placeholder-Logo1@2x.png',
    '/temp/Placeholder-Logo2@2x.png',
    '/temp/Placeholder-Logo3@2x.png',
    '/temp/Placeholder-Logo4@2x.png',
    '/temp/Placeholder-Logo1@2x.png',
    '/temp/Placeholder-Logo2@2x.png',
    '/temp/Placeholder-Logo3@2x.png',
    '/temp/Placeholder-Logo4@2x.png',
]

export const LogosList = () => {
    const canSlide = logos.length > 6

    return (
        <div className="logos-list">
        <h4>Нам доверяют</h4>
        <Splide
            className="logo-container"
            aria-label="Нам доверяют"
            options={{
                type: canSlide ? 'loop' : 'slide',
                perPage: 6,
                perMove: 1,
                gap: 24,
                arrows: false,
                pagination: false,
                autoplay: canSlide,
                interval: 2500,
                speed: 700,
                drag: canSlide,
                breakpoints: {
                    1279: {
                        perPage: 1,
                    },
                },
            }}
        >
            {logos.map((src, index) => (
                <SplideSlide key={`${src}-${index}`}>
                    <img src={src} alt="" className="logo-item" />
                </SplideSlide>
            ))}
        </Splide>
        </div>
    )
}