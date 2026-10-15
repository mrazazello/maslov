import { createContext, useContext, useEffect, useState, type ComponentType, type ReactNode } from "react"
import { createPortal } from "react-dom"
import { Button } from "../../common/Button/Button"
import "./modal.css"

interface ModalContextValue {
    open: () => void
    close: () => void
}

const ModalContext = createContext<ModalContextValue | null>(null)

export function useModal() {
    const context = useContext(ModalContext)
    if (!context) {
        throw new Error("useModal must be used within Modal")
    }
    return context
}

interface ModalProps {
    component: ComponentType
    children: ReactNode
    title?: string
}

export function Modal({ component: Content, children, title = "Обратная связь" }: ModalProps) {
    const [isOpen, setIsOpen] = useState(false)
    const portalRoot = document.getElementById("portal")
    const close = () => setIsOpen(false)

    useEffect(() => {
        if (!isOpen) return

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") close()
        }

        document.addEventListener("keydown", onKeyDown)
        return () => document.removeEventListener("keydown", onKeyDown)
    }, [isOpen])

    return (
        <ModalContext.Provider value={{ open: () => setIsOpen(true), close }}>
            {children}
            {isOpen && portalRoot && createPortal(
                <div className="modal-overlay" onClick={close}>
                    <div
                        className="modal-window"
                        role="dialog"
                        aria-modal="true"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="modal-header">
                            <h2>{title}</h2>
                            <Button variant="transparent" onClick={close}>
                                <img src="/icons/close.svg" alt="Закрыть" />
                            </Button>
                        </div>
                        <div className="modal-body">
                            <Content />
                        </div>
                    </div>
                </div>,
                portalRoot,
            )}
        </ModalContext.Provider>
    )
}
