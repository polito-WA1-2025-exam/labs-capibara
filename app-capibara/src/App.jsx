import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

{/* Components */}
import Header from './components/Header'
import DisplayOrder from './components/DisplayOrder'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return <>
    <Header/>

    <DisplayOrder order = "placeHolder"/>

    <Footer/>
  </>;
}

export default App
