import "./textarea.css"

interface TextareaProps {
    label: string
    id: string
    name: string
}

export const Textarea = (props: TextareaProps) => {
    const { label, id, name } = props

    return (
        <div className="textarea-field">
            <label htmlFor={id}>{label}</label>
            <textarea id={id} name={name} />
        </div>
    )
}
