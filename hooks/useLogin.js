import { useState } from "react"
import { validateRegister } from '../utilities/validations'
import { useRouter } from "next/router"
import { userLogin, userRegister } from "../services/user"
import { useUserContext } from "../context/user"

const useLogin = () => {

    // Context del usuario
    const { setUser } = useUserContext()
    // Tipo de formulario (login o registro, true o false)
    const [formType, setFormType] = useState(false)
    const [error, setError] = useState({ error: false })
    const navigate = useRouter()

    // Registro
    const onRegisterHandler = async (ev)=> {
        ev.preventDefault()

        let [username, email, password, confirmPassword] = [ev.target[0].value.toLowerCase(), ev.target[1].value.toLowerCase(), ev.target[2].value, ev.target[3].value]

        // Validaciones
        let validate = validateRegister(username, email, password, confirmPassword)
        if (validate.error) return setError(validate)

        // Registro
        let response = await userRegister(username, email, password, confirmPassword).then(res => { return res })
        if (response.error) return setError({ response })

        setFormType(false)
        setError({ error: false })
        return navigate.push('/login')
    }

    // Login
    const onAuthHandler = async (ev)=> {
        ev.preventDefault()

        let [username, password] = [ev.target[0].value.toLowerCase(), ev.target[1].value.toLowerCase()]

        // Inicio de sesión
        let response = await userLogin(username, password).then(res => { return res })
        if (response.error) return setError({ response })

        // JWT
        document.cookie = 'token=' + response.token + '; max-age=' + (60 * 15) + '; path=/; samesite=strict'
        setUser(response.data)
        return navigate.push('/feed')
    }

    return {
        error,
        formType,
        setFormType,
        onRegisterHandler,
        onAuthHandler
    }
}

export default useLogin