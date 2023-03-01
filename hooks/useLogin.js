import { useState } from "react"
import { validateRegister } from 'utilities/validations'
import { userRegister } from "services/user"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import { useUserContext } from "context/user"

const useLogin = ({ setSeePassword }) => {

    // Tipo de formulario (login o registro, true o false)
    const router = useRouter()
    const [formType, setFormType] = useState(false)
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState({ error: false })
    const { update, setUpdate } = useUserContext()

    // Registro
    const onRegisterHandler = async (ev)=> {
        ev.preventDefault()
        const [username, email, password, confirmPassword] = [ev.target[0].value.toLowerCase(), ev.target[1].value.toLowerCase(), ev.target[2].value, ev.target[3].value]
        
        // Validaciones
        const validate = validateRegister(username, email, password, confirmPassword)
        if (validate.error) return setError(validate)
        
        // Registro
        setLoader(true)
        const user = await userRegister(username, email, password, confirmPassword);
        setLoader(false)

        if (user.error) {
            return setError({ error: true, message: user.message })
        }
        else if (user.promiseError) {
            return setError({ error: true, message: 'Ocurrio un error, intente de nuevo mas tarde.' })
        }
        setFormType(false)
        return setError({ error: false })
    }

    // Login
    const onAuthHandler = async (ev)=> {
        ev.preventDefault()
        const [username, password] = [ev.target[0].value.toLowerCase(), ev.target[1].value.toLowerCase()]
        
        // Inicio de sesión
        setLoader(true)
        signIn('credentials', { username, password, redirect: false }).then(res => {
            setLoader(false)
            if (res.ok) {
                setUpdate(!update)
                router.push('/feed')
            } else {
                setError({ error: true, message: "El usuario o contraseña no son válidos." })
            }
        }).catch(error => {
            console.log(error)
            setLoader(false)
            setError({ error: true, message: "Ocurrio un error, intente de nuevo mas tarde." })
        })
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