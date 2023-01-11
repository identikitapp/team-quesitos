import { useEffect, useState } from "react"

const useFeed = () => {
    
    const [swipe, setSwipe] = useState(true)
    const [loader, setLoader] = useState(false)
    
    useEffect(()=> {
        document.addEventListener("touchstart", handleTouchStart, false);
        document.addEventListener("touchmove", handleTouchEnd, false);
        
        return ()=> {
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchmove", handleTouchEnd);
        }
    }, [])

    let clientX = null

    const handleTouchStart = (ev)=> {
        let firstTouch = ev.touches[0];
        clientX = firstTouch.clientX
    };

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
        swipe,
        loader
    }
}

export default useFeed