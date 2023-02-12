import { getSession } from "next-auth/react"
import { useEffect, useRef, useState } from "react"
import { useUserContext } from "../context/user"

const usePostList = (service, userId) => {
    const [page, setPage] = useState(0)
    const [total, setTotal] = useState(null)
    const [docs, setDocs] = useState([])
    const [update, setUpdate] = useState(false)
    const [updatePage, setUpdatePage] = useState(0)
    const { user } = useUserContext()
    const visor = useRef()

    // Funcion que ejecuta el observer
    // Aca dentro no funcionan los estados entonces uso un estado y la actualizacion funcional para indicar al useEffect una actualizacion
    const onNextPageHandler = (element) => {
        if (element[0].isIntersecting) {
            setUpdatePage(updatePage => !updatePage)
        }
    };

    // Cuando se actualiza el estado de la funcion anterior, ejecuto el cambio de pagina
    // La primer condicion es para evitar el cambio de pagina al inicio
    useEffect(()=> {
        if (docs.length > 0) {
            if (docs.length < total) {
                setPage(page => page + 1)
            }
        }
    }, [updatePage])

    // Aca ejecuto un observer que sigue al div#visor situado al final de todos los posteos
    // Es para que al llegar al final de los posteos, ejecute un cambio de pagina
    useEffect(()=> {
        const { current } = visor
        const observer = new IntersectionObserver(onNextPageHandler, {
            root: null,
            rootMargin: "0px 0px 0px 0px",
            threshold: 0.2
        })
        observer.observe(current)
        return ()=> {
            observer.disconnect(current)
        }
    }, [])

    // Este useEffect trae los primeros posteos al inicio y se vuelve a ejecutar en caso de hacer un nuevo posteo
    // Eso es para mostrar el nuevo posteo del usuario despues de que lo haga
    useEffect(()=> {
        const unsub = ()=> {
            getSession().then(session => {
                const token = session.user.token
                service({ token, userId: userId ? userId : "", page: 0 }).then(res => {
                    setDocs(res.data)
                    setTotal(res.total)
                    setPage(0)
                }).catch(err => console.log(err))
            })
        }
        return unsub()
    }, [update, userId])

    // Actualiza los posteos siempre que se cambie de pagina, trae los nuevos y los suma a los ya cargados
    // La primer condicion es para evitar re-render con el useEffect anterior y para evitar una doble peticion al inicio
    useEffect(()=> {
        if (page !== 0 && docs.length > 0) {
            const token = user.token
            const unsub = ()=> {
                service({ token, userId: userId ? userId : "", page }).then(res => {
                    setDocs([...docs, ...res.data])
                    setTotal(res.total)
                }).catch(err => console.log(err))
            }
            return unsub()
        }
    }, [page])

    return {
        update,
        setUpdate,
        visor,
        docs
    }
}

export default usePostList