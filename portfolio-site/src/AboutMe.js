import React from 'react';
import myPhoto from './"c:\Users\yazee\OneDrive\Pictures\me.jpg"'; 
function AboutMe() {
    return (
        <div>
            <h1>About Me</h1>
            <img src={myPhoto} alt="My Photo" />
            <p>My name is [Your Name]. I am a [short bio].</p>
            <a href="path-to-your-resume.pdf" download>Download My Resume</a>
        </div>
    );
}

export default AboutMe;
