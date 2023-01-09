import { useState } from "react"
import { validateUsername } from '../utilities/validateUsername'
import { validateEmail } from '../utilities/validateEmail'
import { validatePassword } from '../utilities/validatePassword'
import { useRouter } from "next/router"

// Validaciones, si hay un error devuelve un objeto con el estado de error y el mensaje
const validateRegister = (username, email, password)=> {
    let result = validateUsername(username.toLowerCase())
    if (result.error) return result

    result = validateEmail(email.toLowerCase())
    if (result.error) return result

    result = validatePassword(password)
    if (result.error) return result

    return { error: false }
}

const useLogin = () => {
    // Action se refiere a si el formulario es de login o registro
    const [action, setAction] = useState(false)
    const [remember, setRemember] = useState(true)
    const [error, setError] = useState({ error: false })
    const navigate = useRouter()

    // Falta backend para completar
    // Validaciones y registro
    const onRegisterHandler = (ev)=> {
        ev.preventDefault()
        let validate = validateRegister(ev.target[0].value, ev.target[1].value, ev.target[2].value)
        if (validate.error) return setError({ error: validate.error, message: validate.message })
        return setError({ error: false })
    }

    // Autenticacion
    const onAuthHandler = (ev)=> {
        ev.preventDefault()
        navigate.push('/feed')
    }

    return {
        action,
        setAction,
        remember,
        setRemember,
        error,
        onRegisterHandler,
        onAuthHandler
    }
}

export default useLogin