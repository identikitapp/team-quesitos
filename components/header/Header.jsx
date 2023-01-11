import { Headerdesktop } from "./Headerdesktop"
import { Headermobile } from "./Headermobile"


export const Header = () => {

   
    return (
        <>
        
        {<Headermobile/> || <Headerdesktop/>}
        </>
    )
    
}
