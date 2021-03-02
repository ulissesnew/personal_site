import React from 'react'
import "./Footer.scss";
import Section from "../../hoc/Section/Section";
import BigText from "../../components/BigText/BigText";
import  Button from "../../components/Button/Button"
import Image from "../../components/Image/Image";
import photo from "../../assets/my.png"

const Footer = () => {
    return (
       <Section id="contact">
           <div className="footer">
           <BigText 
            small="Get In Touch"
            title="Let's Work Togeter"
            content=""
            character="."
            />
           

           <Image 
                url={photo}
                size="s"
                alt="my photo"
                radius={true}
            />
             <p id="content">if you have a website or mobile app idea in mind or you
            need some advice abpout product desig, fell free  to contact me.
            Currently my time books quickly, so the sooner you write, 
            the better it is for both of us.</p>
            <Button 
                url="mailto:ulissesnewdev@gmail.com?subject=Mail from Our Site"
                text="johndoe@gmail.com"
                color= "White"
                bgColor="BrightOrange"
                arrow={true}
                size="large"
            />
           </div>

       </Section>
    )
}

export default Footer
