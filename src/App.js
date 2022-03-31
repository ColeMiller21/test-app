import Navbar from "./components/Navbar";
import ResponsiveNav from "./components/ResponsiveNav";
import "./App.css";

function App() {
  return (
    <div className="bg-cover main-background">
      <ResponsiveNav />
      <div className="">
        <div className="grid place-items-center h-screen">
          <h1 className="text-white lg:text-[10rem] md:text-[8rem] sm:text-[6rem] font-titillium">
            Coming Soon!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
