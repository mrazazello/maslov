import "./input.css"

interface InputProps {
    label: string
    id: string
    name: string
    type?: string
    invalid?: boolean
}

export const Input = (props: InputProps) => {
    const { label, id, name, type = "text", invalid = false } = props

    return (
        <div className="input-field">
            <label htmlFor={id}>{label}</label>
            <input id={id} name={name} type={type} className={invalid ? "input--invalid" : undefined} />
        </div>
    )
}
