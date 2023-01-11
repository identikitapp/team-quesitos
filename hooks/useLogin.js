import { useState } from "react"
import { validateUsername } from '../utilities/validateUsername'
import { validateEmail } from '../utilities/validateEmail'
import { validatePassword } from '../utilities/validatePassword'
import { useRouter } from "next/router"

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
    const [action, setAction] = useState(false)
    const [remember, setRemember] = useState(true)
    const [error, setError] = useState({ error: false })
    const navigate = useRouter()

    // Falta backend para completar
    const onRegisterHandler = (ev)=> {
        ev.preventDefault()
        let validate = validateRegister(ev.target[0].value, ev.target[1].value, ev.target[2].value)
        if (validate.error) return setError({ error: validate.error, message: validate.message })
        return setError({ error: false })
    }

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