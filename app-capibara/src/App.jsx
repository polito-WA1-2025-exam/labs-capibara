import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

{/* Components */}
import Header from './components/Header'

import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return <>
    <Header/>

    

    <Footer/>
  </>;
}

export default App
