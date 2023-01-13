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
    const onRegisterHandler = (ev)=> {
        ev.preventDefault()

        let [username, email, password, confirmPassword] = [ev.target[0].value.toLowerCase(), ev.target[1].value.toLowerCase(), ev.target[2].value, ev.target[3].value]

        // Validaciones
        let validate = validateRegister(username, email, password, confirmPassword)
        if (validate.error) return setError(validate)

        // Registro
        userRegister(username, email, password, confirmPassword).then(res => {
            if (res.error) return setError({ res })
            setFormType(false)
            setError({ error: false })
            return navigate.push('/login')
        }).catch(err => {
            console.log(err)
            return setError({ error: true, message: "Ocurrio un error, intente de nuevo mas tarde" })
        })

    }

    // Login
    const onAuthHandler = (ev)=> {
        ev.preventDefault()

        let [username, password] = [ev.target[0].value.toLowerCase(), ev.target[1].value.toLowerCase()]

        // Inicio de sesión
        userLogin(username, password).then(res => {
            if (res.error) return setError({ res })
            // JWT
            document.cookie = 'token=' + res.token + '; max-age=' + (60 * 15) + '; path=/; samesite=strict'
            setUser(res.data)
            return navigate.push('/feed')
        }).catch(err => {
            console.log(err)
            return setError({ error: true, message: 'Ocurrio un error, intente de nuevo mas tarde' })
        })
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