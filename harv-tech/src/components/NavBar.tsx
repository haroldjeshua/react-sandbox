import ArrowRight from "../assets/ArrowRight"
import Logo from "../assets/Logo"

const NavBar = () => {
  return (
    <div className="w-full flex items-center justify-around h-80px fixed top-0 bg-white z-100">
        <Logo />
        <div className="flex gap-32px items-center <md:hidden">
            <span className="cursor-pointer">Solutions</span>
            <span className="cursor-pointer">Services</span>
            <span className="cursor-pointer">About</span>
            <span className="cursor-pointer">Resources</span>
        </div>
        <div className="flex gap-8px items-center cursor-pointer">
            <span className="mb-4px">Sign in</span>
            <ArrowRight />
        </div>
    </div>
  )
}

export default NavBar