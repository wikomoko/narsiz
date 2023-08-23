
import './App.css'
import EditorPage from './pages/EditorPage/EditorPage'
import NavigationBar from './components/NavigationBar/NavigationBar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import FooterBar from './components/FooterBar/FooterBar'
function App() {

  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/editor' element={<EditorPage />} />
        </Routes>
        <FooterBar/>
      </BrowserRouter>
    </>
  )
}

export default App
