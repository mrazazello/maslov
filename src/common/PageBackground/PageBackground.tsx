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
          ? {
              backgroundImage: `linear-gradient(rgb(0 0 0 / 40%), rgb(0 0 0 / 40%)), url(/${image}.jpg)`,
            }
          : undefined
      }
    >
      {children}
    </div>
  )
}
