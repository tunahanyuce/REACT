import './App.css'

function App() {

  // JS ALANI
  const selamla=()=>{
    alert("Merhaba")
  }

  return (
    <>
      <h1 className='bg-danger'>React Events</h1>
      <button onClick={selamla()}>TIKLA</button>
    </>
  )
}

export default App
