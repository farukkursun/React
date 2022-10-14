
import CourseCard from "./copponents/CourseCard";
import data from "./data"
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./copponents/MyNavbar";

function App() {
  return (
    <div>
    <MyNavbar/>
    <CourseCard dataa={data} />
     
    </div>
  );
}

export default App;
