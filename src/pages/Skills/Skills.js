import React from 'react'
import "./Skills.scss";
import Section from "../../hoc/Section/Section";
import BigText from "../../components/BigText/BigText";
import BackgroundSkills from "./BackgroundSkills/BackgroundSkills";


const Skills = () => {
    return (
       <Section id="skills">
            <BackgroundSkills>
                <div className="skills">
                    <div className="center">
                        <BigText 
                            small="My Skills"
                            title="My Skills"
                            content="Everyday. I practising reading book and watching tutorials to gain
                                    a new skills, these skills helpes me to build my projects in the future."
                            character="."

                            />
                    </div>
                    <div className="container">
                        <div className="list">
                            <div id="column">
                                <ul>
                                    <li id="label-column"><span>Lang</span>uages</li>
                                    <li>CSS3(SCSS, LESS)</li>
                                    <li>HTML5</li>
                                    <li>JavaScript(ES6)</li>
                                    <li>PHP</li>
                                    <li>Python</li>
                                </ul>
                            </div>
                            <div id="column">
                                <ul>
                                    <li id="label-column"><span>Meth</span>ods & Tools</li>
                                    <li>BEM, ITCSS, OOCSS</li>
                                    <li>NPM scripts, Webpack, Gulp</li>
                                    <li>Progressive Web Apps</li>
                                    <li> UX principles and acessibility</li>

                                </ul>
                            </div>
                            <div id="column">
                                <ul>
                                    <li id="label-column"><span>Fram</span>eworks & Libs</li>
                                    <li>Drupal(7/8)</li>
                                    <li>Django (Wagtail</li>
                                    <li>Jquery, React (Redux), Vue</li>
                                    <li>Twig, jinja, Mustache</li>
                                    <li>Google Apps & APIS</li>
                                
                                </ul>
                            </div>
                            <div id="column">
                                <ul>
                                    <li id="label-column"><span>Addi</span>tional</li>
                                    <li>css</li>
                                    <li>Git, SVN</li>
                                    <li>UNIX server admnistration</li>
                                    <li>Vagrant, Composer, Drush</li>
                                    <li>Photoshop, Sketch</li>
                                    <li>Agile, Waterfall</li>
                                </ul>
                            </div>
                            </div>
                    </div>
                </div>
            </BackgroundSkills>
       </Section>
    )
}

export default Skills
