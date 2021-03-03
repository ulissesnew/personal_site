import React from 'react'
import "./Footer.scss";
import Section from "../../hoc/Section/Section";
import BigText from "../../components/BigText/BigText";
import  Button from "../../components/Button/Button"
import Image from "../../components/Image/Image";
import photo from "../../assets/my.png"
import Icon from "./Icons/Icon/Icon";
import IconList  from "./Icons/Icon/Icon";


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
               
                <div className="icons-container">
                    <Icon 
                        imgUrl="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-128.png"
                        url="https://www.facebook.com/"
                    />
                     <Icon 
                        imgUrl="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Twitter_svg-128.png"
                        url="https://twitter.com/?lang=en"
                    />
                     <Icon 
                        imgUrl="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-128.png"
                        url="https://www.instagram.com/"
                    />
                     <Icon 
                        imgUrl="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Behance4_svg-128.png"
                        url="https://www.behance.net/"
                    />
                     <Icon 
                        imgUrl="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Dribbble_svg-128.png"
                        url="https://dribbble.com/"
                    />
                </div>
                
           </div>

       </Section>
    )
}

export default Footer
