import { FiSettings } from 'react-icons/fi';
import { TbH1, TbMoon } from 'react-icons/tb';
import { BiExit } from 'react-icons/bi';
import { useTheme } from 'next-themes';
import {BsSun} from 'react-icons/bs';

const BurgerMenu = () => {
    
    const {systemTheme, theme, setTheme} = useTheme()

    const renderThemeChange = () => {
        const currentTheme = theme === 'system' ? systemTheme : theme;

        if(currentTheme === 'dark') {
            return (
                <>
                <TbMoon onClick={()=>setTheme('light')}>cambio</TbMoon>
                <h6>Oscuro</h6>
                </>
            )
        }
        else{
            return (
                <>
                <BsSun onClick={()=>setTheme('dark')}>cambio2</BsSun>
                <h6>Claro</h6>
                </>
            )
        }
    }
        
    return (
        <div>
            <div className='burgMenu'>
                <div className='ajustes'>
                    <i><FiSettings /></i>
                    <h6>Ajustes</h6>
                </div>
                <div className='vista'>
                    {renderThemeChange()}
                </div>
                <div className='salir'>
                    <i><BiExit /></i>
                    <h6> Salir </h6>
                </div>

            </div>
           
        </div>
    )
}

export default BurgerMenu