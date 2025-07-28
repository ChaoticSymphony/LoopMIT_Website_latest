import Navbar from "./components/navbar.jsx";
import Timeline from "./components/timeline.jsx";

const Achievements = () => {
   console.log('Achievements component is rendering');
  return (
    <div className="othernavs">
      <Navbar/>
         
      <Timeline/>
    </div>
  )
}

export default Achievements
