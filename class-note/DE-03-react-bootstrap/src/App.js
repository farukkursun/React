
import CourseCard from "./copponents/CourseCard";
import data from "./data"
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./copponents/MyNavbar";
import Footer from "./copponents/Footer";

function App() {
  return (
    <div>
    <MyNavbar/>
    <CourseCard dataa={data} />
     <Footer/>
    </div>
  );
}

export default App;
