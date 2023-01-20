
import { useUserContext } from '../../context/user'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/title.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiFillHome } from 'react-icons/ai';
import { MdOutlineAddBox } from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import 'animate.css';
import { useState } from 'react'
import BurgerMenu from './BurgerMenu'
import { AiOutlineArrowUp } from 'react-icons/ai';


 

const NavDesktop = () => {
  const [Mas, setMas] = useState(<GiHamburgerMenu/>)
  const [BurgerMenuComponent, setBurgerMenuComponent] = useState(<BurgerMenu/>)
  const [Display, setDisplay] = useState('')
  const [displayArrow, setDisplayArrow] = useState('none')
  const { user } = useUserContext()
  const handleClick = () => {
    setMas(BurgerMenuComponent)
    setDisplay('none')
    setDisplayArrow('')
  }
  const hidenBurger = () => {
    setBurgerMenuComponent(Mas)
  }

  return (
    <>
      <div className='navDesktop'>
        <Link href='/'>
          <Image width={150} height={25} src={logo} alt='logo'></Image>
        </Link>
        <div className='nav'>
          <div className="home">
            <Link href='/'>
              <i><AiFillHome /></i>
            </Link>

            <h3 className='animate__animated animate__bounce'>Inicio</h3>
          </div>
          <div className="searchNav">
            <Link href='/'>
              <i><AiOutlineSearch /> </i>
            </Link>
            <h3 className='animate__animated animate__bounce'>Buscar</h3>

          </div>
          <div className="addPublication">
            <Link href='/'>
              <i><MdOutlineAddBox /></i>
            </Link>
            <h3 className='animate__animated animate__bounce'>Agregar</h3>
          </div>
          <div className="profile">
            <Link href='/'>
              <i><CgProfile /></i>
            </Link>
            <h3 className='animate__animated animate__bounce'>{user && user.username}</h3>
          </div>


        </div>
      </div>
      <div className="burger">
        <i onClick={handleClick}>{Mas}</i>
        <h3 className='display'>Mas</h3>
      <div>
      <i onClick={hidenBurger} className='arrow'><AiOutlineArrowUp/></i>
      </div>
      </div>
      <style onClick={handleClick} jsx>
      {`
      .display{
        display: ${Display};
      }
      .arrow{
        display: ${displayArrow};
      }
      `}
      </style>
      
    </>


  )
}

export default NavDesktop;