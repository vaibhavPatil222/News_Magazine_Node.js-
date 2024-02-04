import { useState } from 'react'

import Navbar from './Component/Navbar'
import NewsBoard from './Component/NewsBoard'

function App() {
const[category, setCategory]= useState('general')
 
  return (
    <>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category} />    
    </>
  )
}
export default App
