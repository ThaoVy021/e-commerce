import { Route, Routes } from 'react-router-dom'

import { GoogleAuthProvider } from './components/pageLogin/googleLogin'
import Header from './components/navbar'
import PageDetailProduct from './components/pageDetailProduct'
import NewsLetter from './components/newsLetter'
import Footer from './components/footer'
import HomePage from './components/pageHome'
import PageCart from './components/pageCart'
import LoginPage from './components/pageLogin'
import UserPage from './components/pageUser'
import PageLoves from './components/pageLoves'
import InforShip from './components/pageCart/inforShip'
import { useLocation } from 'react-router-dom'

import './App.scss'

function App() {
  const location = useLocation()
  const shouldShowNewsLetter =
    location.pathname !== '/sign_in' &&
    location.pathname !== '/sign_up' &&
    location.pathname !== '/user' &&
    location.pathname !== '/inforShip'

  return (
    <GoogleAuthProvider>
      <div className="App relative">
        <Header />
        <Routes>
          <Route path="/sign_in" element={<LoginPage />} />
        </Routes>
        <Routes>
          <Route path="/sign_up" element={<LoginPage />} />
        </Routes>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/user" element={<UserPage />} />
        </Routes>
        <Routes>
          <Route
            path="/pageDetailProduct/:id"
            element={<PageDetailProduct />}
          />
        </Routes>
        <Routes>
          <Route path="/pageCart" element={<PageCart />} />
        </Routes>
        <Routes>
          <Route path="/pageLoves" element={<PageLoves />} />
        </Routes>
        <Routes>
          <Route path="/inforShip" element={<InforShip />} />
        </Routes>
        <div className={`${shouldShowNewsLetter ? 'block' : 'hidden'}`}>
          <NewsLetter />
        </div>
        <Footer />
      </div>
    </GoogleAuthProvider>
  )
}

export default App
