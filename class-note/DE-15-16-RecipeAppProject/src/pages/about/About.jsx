import React from 'react'
import {AboutContainer, HeaderContainer, InfoContainer, StyledImage} from './AboutStyles'
import codingSvg from '../../assets/coding.svg'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
const About = () => {
  return (<div>
   <Navbar />
    <AboutContainer>

      <StyledImage src={codingSvg}/>
      <HeaderContainer>
        <h1>About Frontend Devoloper <span>Faruk Kursun</span></h1>
      </HeaderContainer>
      <InfoContainer>
      <h2>Hi, I'am Faruk Kursun</h2>
        <h3>I'm currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB,SQL,
          Java, Hibernate, SpringBoot, AWS Services.
        </h4>
        <h2>
          <a href="mailto:kursunomerfaruk2@gmail.com">Send email</a> :
          kursunomerfaruk2@gmail.com
        </h2>
        {/* whatsapp://tel:3216541234 */}
      </InfoContainer>
    </AboutContainer>
    <Footer />
    </div>
  )
}

export default About