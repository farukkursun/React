import React from 'react'
import CourseCard from './pages/CourseCard'
import Footer from './components/Footer'
import MyNavbar from './components/MyNavbar'
import "bootstrap/dist/css/bootstrap.min.css"
import Teacher from './pages/Teacher'
import ContactForm from './pages/ContactForm'




const App = () => {
  return (
    <div>
<MyNavbar/>
<ContactForm/>
<CourseCard/>
<Teacher/>

<Footer/>
    </div>
  );
}

export default App
