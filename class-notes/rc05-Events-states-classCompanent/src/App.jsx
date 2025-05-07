import './App.css'
import Events from './components/events/Events'
import UseStateHook from './components/useStateHook/UseStateHook';

function App() {

  // JS ALANI
  const selamla=()=>{
    alert("Merhaba")
  }

  return (
    <>
    <div className='bg-warning text-center p-3'>
    <h1> React Events</h1>
    {/* <Events/> */}
    <UseStateHook/>
    </div>
    
    </>
  )
}

export default App
