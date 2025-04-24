import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

{/* Components */}
import Header from './contents/Header'

import Footer from './contents/Footer'

function App() {
  const [count, setCount] = useState(0)

  return <>
    <Header/>

    <Footer/>
  </>;
}

export default App
