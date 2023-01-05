import { useEffect, useState } from "react"

const useFeed = () => {
    
    const [swipe, setSwipe] = useState(true)
    
    useEffect(()=> {
        // Evento al tocar
        document.addEventListener("touchstart", handleTouchStart, false);
        // Evento al mover despues de tocar
        document.addEventListener("touchmove", handleTouchEnd, false);
        
        return ()=> {
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchmove", handleTouchEnd);
        }
    }, [])

    // Posicion del tap
    let clientX = null

    // Actualiza la posicion del primer tap
    const handleTouchStart = (ev)=> {
        let firstTouch = ev.touches[0];
        clientX = firstTouch.clientX
    };

    // Compara la posicion del primer tap con la posicion actual
    const handleTouchEnd = (ev)=> {
        // Swipe a la izquierda
        if (ev.touches[0].clientX > (clientX + 100)) {
            setSwipe(true)
            document.body.style.overflowY = 'auto'
        }
        // Swipe a la derecha
        else if (ev.touches[0].clientX < (clientX - 100)) {
            setSwipe(false)
            document.body.style.overflowY = 'hidden'
        }
    };

    return {
        swipe
    }
}

export default useFeed