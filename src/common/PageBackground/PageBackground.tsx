interface PageBackgroundProps {
  image?: string
  children: React.ReactNode
}

export const PageBackground = ({ image, children }: PageBackgroundProps) => {
  return (
    <div
      className="page-bg"
      style={
        image
          ? ({
              "--page-image": `linear-gradient(rgb(0 0 0 / 40%), rgb(0 0 0 / 40%)), url(/${image}.jpg)`,
            } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  )
}
