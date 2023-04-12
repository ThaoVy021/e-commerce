import { Route, Routes } from 'react-router-dom'

import { GoogleAuthProvider } from './components/pageLogin/googleLogin'
import Header from './components/navbar'
import PageDetailProduct from './components/pageDetailProduct'
import Footer from './components/footer'
import HomePage from './components/pageHome'
import PageCart from './components/pageCart'
import LoginPage from './components/pageLogin'
import UserPage from './components/pageUser'

import './App.scss'

function App() {
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
        <Footer />
      </div>
    </GoogleAuthProvider>
  )
}

export default App
