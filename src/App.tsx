import './App.scss';
import Header from './components/navbar/Header';
import PageDetailProduct from './components/pageDetailProduct';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import HomePage from './components/pageHome';
import NewsLetter from './components/newsLetter/NewsLetter';
import PageCart from './components/pageCart';

function App() {
  return (
    <div className="App relative">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/pageDetailProduct/:id" element={<PageDetailProduct />} />
      </Routes>
      <Routes>
        <Route path="/pageCart" element={<PageCart />} />
      </Routes>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
