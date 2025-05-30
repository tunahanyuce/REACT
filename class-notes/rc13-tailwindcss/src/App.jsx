import Typography from "./components/Typography";
import SpacingAndSizing from "./components/SpacingAndSizing";
import HoverFocus from "./components/HoverFocus";
import FlexAndResponsive from "./components/FlexAndResponsive";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl text-center text-green-700 font-bold underline">
        Hello Tailwind
      </h1>
      {/* <Typography /> */}
      {/* <SpacingAndSizing /> */}
      {/* <HoverFocus /> */}
      {/* <FlexAndResponsive /> */}
      <ProfileCard />
    </>
  );
}

export default App;
