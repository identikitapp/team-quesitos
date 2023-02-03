import { useState } from "react"
import { validateRegister } from '../utilities/validations'
import { useRouter } from "next/router"
import { userLogin, userRegister } from "../services/user"
import { useUserContext } from "../context/user"

const useLogin = ({ setSeePassword }) => {

    const { update, setUpdate } = useUserContext()
    // Tipo de formulario (login o registro, true o false)
    const [formType, setFormType] = useState(false)
    const [loader, setLoader] = useState(false)
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
        setLoader(true)
        const user = await userRegister(username, email, password, confirmPassword);
        setLoader(false)

        if (user.error) return setError({ error: true, message: user.message })
        else if (user.promiseError) return setError({ error: true, message: 'Ocurrio un error, intente de nuevo mas tarde.' })
        setFormType(false)
        return setError({ error: false })
    }

    // Login
    const onAuthHandler = async (ev)=> {
        ev.preventDefault()
        let [username, password] = [ev.target[0].value.toLowerCase(), ev.target[1].value.toLowerCase()]

        // Inicio de sesión
        setLoader(true)
        const user = await userLogin(username, password)
        setLoader(false)

        if (user.error) return setError({ error: true, message: user.message })
        else if (user.promiseError) return setError({ error: true, message: 'Ocurrio un error, intente de nuevo mas tarde' })
        // JWT
        document.cookie = 'token=' + user.token + '; path=/; samesite=strict';
        setUpdate(!update)
        return navigate.push('/feed')
    }

    const onSetFormTypeHandler = ()=> {
        setError({ error: null })   
        setFormType(!formType)
        setSeePassword(false)
    }

    return {
        error,
        loader,
        formType,
        onSetFormTypeHandler,
        onRegisterHandler,
        onAuthHandler
    }
}

export default useLogin