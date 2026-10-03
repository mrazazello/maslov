import { useState } from "react"
import { toast } from "sonner"
import { Button } from "../../common/Button/Button"
import { Input } from "../../common/Input/Input"
import { Textarea } from "../../common/Textarea/Textarea"
import { useModal } from "../Modal/Modal"
import "./requestCall.css"

export default function RequestCall() {
    const { close } = useModal()
    const [invalid, setInvalid] = useState({ name: false, phone: false })

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const nameEmpty = String(data.get("name") ?? "").trim() === ""
        const phoneEmpty = String(data.get("phone") ?? "").trim() === ""
        setInvalid({ name: nameEmpty, phone: phoneEmpty })
        if (nameEmpty || phoneEmpty) return
        toast("Заявка отправлена")
        close()
    }

    return (
        <div>
            <form className="request-call-form" onSubmit={onSubmit}>
                <Input label="Ваше имя" id="name" name="name" invalid={invalid.name} />
                <Input label="Контактный телефон" id="phone" name="phone" type="tel" invalid={invalid.phone} />
                <Textarea label="Комментарий или пожелание" id="comment" name="comment" />
                <Button type="submit">Отправить</Button>
            </form>
        </div>
    )
}
