
import { useUserContext } from '../../context/user'

const NavDesktop = () => {
    const {user} = useUserContext()

  return (
    <div>NavDesktop</div>
  )
}

export default NavDesktop