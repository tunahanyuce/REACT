import Events from "./components/events/Events";
import UseStateHook from "./components/useStateHook/UseStateHook";
import MoreData from "./components/useStateHook/MoreData";
import ClassComponent from "./components/class-component/ClassComponent";

function App() {
  // JS ALANI
  const selamla = () => {
    alert("Merhaba");
  };

  return (
    <>
      <div className="bg-warning text-center p-3">
        <h1> React Events</h1>
        {/* <Events/> */}
        {/* <UseStateHook/> */}
        {/* <MoreData/>   */}

        <ClassComponent />
      </div>
    </>
  );
}

export default App;
