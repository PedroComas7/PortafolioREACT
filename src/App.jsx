import { Background } from './components/Background'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { About } from './components/About'
import { Works } from './components/Works'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Works/>
      <About/>
      <Contact/>
      <Footer/>
      <Background/>
    </div>
  )
}

