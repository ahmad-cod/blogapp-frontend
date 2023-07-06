import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"

const Navbar = () => {
  const user = useSelector(state => state.user)
  const links = user ? <SignedInLinks /> : <SignedOutLinks />

  return (
    <header className="flex items-center justify-between">
      <h1>
        <Link to='/'>
          Aroblogs
        </Link>
      </h1>
      {links}
    </header>
  )
}

export default Navbar