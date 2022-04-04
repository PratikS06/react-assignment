import React from "react"
import Masthead from "./Masthead"
import Navbar from "./Navbar"
import Portfolio from "./Portfolio"
import AboutSection from "./AboutSection"
import ContactSection from "./ContactSection"
import Footer from "./Footer"
import "./scripts"
import "./styles.css"


const App = ()=>{
    return(
        <div>
            <Navbar />
            <Masthead />
            <Portfolio />
            <AboutSection />
            <ContactSection />
            <Footer />
        </div>
    )
}




export default App;