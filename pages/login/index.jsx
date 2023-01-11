import logoImg from "../../public/logo.png"
import useLogin from "../../hooks/useLogin"
import Image from "next/image"

const Login = () => {

    const {
        action,
        setAction,
        remember,
        setRemember,
        error,
        onRegisterHandler,
        onAuthHandler
    } = useLogin()

    return (
        <div className="loginContainer">
            <form onSubmit={(ev) => action ? onRegisterHandler(ev) : onAuthHandler(ev)} className="login">
                <Image width={100} height={100} src={logoImg} alt="Active Moments" />
                <div className="inputs">
                    <h3>Bienvenido</h3>
                    <label><span>{action ? 'Usuario' : 'Usuario o email'}</span><input minLength={6} maxLength={action ? 16 : 40} name="user" required type="text" placeholder={action ? 'Usuario' : 'Usuario o email'} /></label>
                    {action && <label><span>Email</span><input minLength={12} maxLength={40} name="email" required type="email" placeholder="Email" /></label>}
                    <label><span>Contraseña</span><input minLength={8} maxLength={20} name="password" required type="password" placeholder="Contraseña" /></label> 
                    {!action && <label onClick={()=> setRemember(!remember)} className="remember"><div className={remember ? 'checked' : ''}></div>Recordarme</label>}
                </div>
                <input type="submit" value={action ? "Crear cuenta" : 'Iniciar sesión'} />
                <span>{action ? '¿Ya tenes cuenta?' : '¿No tenes cuenta?'} <b onClick={()=> setAction(!action)}>{action ? 'Iniciar sesión' : 'Registrarme'}</b></span>
            </form>
        </div>
    )
}

export default Login