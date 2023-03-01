import { useState } from "react";
import useLogin from "hooks/useLogin";
import Image from "next/image";
import Loader from "components/Loader";
import styles from "./login.module.scss";

const Login = () => {
    const [seePassword, setSeePassword] = useState(false)
    const { error, loader, formType, onSetFormTypeHandler, onRegisterHandler, onAuthHandler } = useLogin({ setSeePassword })

    // Condiciones entre login y registro
    let title = formType ? "Registro" : "Inicio de sesión"
    let linkContent = formType ? "Volver al inicio" : "Crear una cuenta"
    let submitValue = loader ? <Loader width={18} height={18} /> : (formType ? "Registrarme" : "Iniciar sesión")
    let submitClass = !formType ? "bottom" : ""
    let usernamePlaceholder = formType ? "Nombre de usuario" : "Usuario o email"
    let logoStyle = formType ? {marginBottom: "-0.4rem"} : {}

    // Condiciones para ver la contraseña
    let passwordType = seePassword ? "text" : "password"
    let seePasswordClass = seePassword ? "check" : ""

    // Manejador del estado seePassword, hecho asi para evitar que se abra el teclado al ver/ocultar la contraseña
    const onSeePasswordHandler = (ev)=> {
        ev.preventDefault()
        setSeePassword(!seePassword)
    }

    return (
        <div className={styles.loginContainer}>
            <div className="background"></div>
            <form onSubmit={(ev)=> formType ? onRegisterHandler(ev) : onAuthHandler(ev)}>
                <Image style={logoStyle} priority className="logo" width={96} height={96} src="/assets/logo.svg" alt="Active Moments" />
                <h3>{title}</h3>
                {error.error && <p>• {error.message}</p>}

                <label>
                    <Image src="/assets/login/username.png" alt="Nombre de usuario" width={20} height={20} />
                    <input required type="text" name="username" placeholder={usernamePlaceholder} />
                </label>

                {formType && <label>
                    <Image src="/assets/login/email.png" alt="Email" width={22} height={22} />
                    <input required type="email" name="email" placeholder="Email" />
                </label>}

                <label className="password">
                    <Image src="/assets/login/password.png" alt="Contraseña" width={22} height={22} />
                    <input required type={passwordType} name="password" placeholder="Contraseña" />
                    <div onClick={(ev)=> onSeePasswordHandler(ev)} className={seePasswordClass}>
                        <Image src="/assets/login/seePassword.png" alt="Ver contraseña" width={22} height={22}/>
                        <div className="bar"/>
                    </div>
                </label>

                {formType && <label>
                    <Image src="/assets/login/password.png" alt="Contraseña" width={22} height={22} />
                    <input required type={passwordType} name="confirmPassword" placeholder="Confirmar contraseña" />
                </label>}

                {!formType && <span style={{justifySelf: "flex-end", textDecoration: "none"}} >Olvidé mi contraseña</span> }
                <button className={submitClass} type="submit">{submitValue}</button>
                <span onClick={onSetFormTypeHandler}>{linkContent}</span>
            </form>
        </div>
    )
}

export default Login