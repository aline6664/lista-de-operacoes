// components
import Header from './components/Header'
import Navbar from './components/Navbar'

// pages
import Home from './pages/Home'
import Operacoes from './pages/Operacoes'
import Avaliacoes from './pages/Avaliacoes'

// router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//css
import './App.css'

function App() {
  return (
    <>
      <div className="page-wrapper">
      <Header />
      <BrowserRouter>
          <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/operacoes" element={<Operacoes/>} />
              <Route path="/avaliacoes" element={<Avaliacoes />} />
            </Routes>

      </BrowserRouter>
      </div>
    </>
  )
}

export default App
