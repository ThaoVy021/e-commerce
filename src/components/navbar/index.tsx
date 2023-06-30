import { useEffect, useState } from 'react'
import Logo from './logo'
import NavBar from './menu'
import Toolbar from './toolbar'
import Search from './search'
import { useLocation } from 'react-router-dom'
import './index.scss'

function Header() {
  const [show, setShow] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const location = useLocation()
  const shouldShowMenu =
    !location.pathname.match(/pageDetailProduct\/\d+/) &&
    location.pathname !== '/PageCart' &&
    location.pathname !== '/sign_in' &&
    location.pathname !== '/sign_up' &&
    location.pathname !== '/user'

  const shouldShowToolBar =
    location.pathname !== '/sign_in' && location.pathname !== '/sign_up'

  const handleShow = () => {
    setShow(() => {
      return window.pageYOffset >= 50 ? true : false
    })
  }

  const handleShowSearch = () => {
    setShowSearch(!showSearch)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleShow)
  }, [])

  return (
    <div className={show ? 'sticked' : 'sticky'}>
      <div className={showSearch ? 'expanded' : 'collapsed'}>
        <Search />
      </div>
      <div className="flex py-6 header container">
        <div
          className={`flex w-full items-center ${
            !shouldShowMenu
              ? 'justify-start ml-24 LogoNavBarWhenMenuHidden'
              : 'justify-around headerLogoNavBarHomePage'
          }`}
        >
          <div className="headerLogo">
            <Logo />
          </div>
          <div
            className={`flex justify-center headerNavBar ${
              shouldShowMenu ? 'block' : 'hidden'
            }`}
          >
            <NavBar />
          </div>
        </div>

        <div
          className={`flex justify-center w-1/4 ${
            shouldShowToolBar ? 'block' : 'hidden'
          }`}
        >
          <Toolbar
            handleSearch={() => handleShowSearch()}
            id={0}
            title={''}
            image={''}
            price={0}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
