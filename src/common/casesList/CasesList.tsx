import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/core'
import { CaseCardItem } from "./CaseCardItem"
import "./caseList.css"

const cases = Array.from({ length: 6 }, (_, index) => index)

export const CasesList = () => {
    return (
        <div className="cases-list">
            <h2 className="cases-list-title">Примеры реализованных сделок</h2>

            <Splide
                className="cases-slider"
                aria-label="Примеры реализованных сделок"
                options={{
                    type: 'slide',
                    perPage: 3,
                    perMove: 3,
                    gap: '32px',
                    arrows: true,
                    pagination: false,
                    breakpoints: {
                        1279: {
                            perPage: 1,
                            perMove: 1,
                        },
                    },
                }}
            >
                {cases.map((id) => (
                    <SplideSlide key={id}>
                        <CaseCardItem />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    )
}
