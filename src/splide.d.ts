declare module '@splidejs/react-splide/css/core'

declare module '@splidejs/react-splide' {
  import type { Options } from '@splidejs/splide'
  import type { ReactNode } from 'react'

  interface SplideProps {
    options?: Options
    className?: string
    children?: ReactNode
    'aria-label'?: string
  }

  export const Splide: (props: SplideProps) => ReactNode
  export const SplideSlide: (props: { children?: ReactNode }) => ReactNode
}
