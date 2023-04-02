import React from 'react'
import '../styles/Home.css'
import early from '../Assets/early.png'
import mid from '../Assets/Cubemid.png'
import mid2 from '../Assets/mid2.png'
import cad from '../Assets/cad1.png'
import cad2 from '../Assets/cad2.png'
import c from '../Assets/c++.png'
import robotc from '../Assets/robotc.png'
import robotc2 from '../Assets/robotc2.png'
import cube from '../Assets/titleimage.gif'
import solver from '../Assets/rubikssolver.JPG'
import spec from '../Assets/Designspec.png'
import { ExternalLink } from 'react-external-link'

function Home() {
  return (
    <div className = "home">
        <div className = "intro" id = "start">
            <div className = "leftSide">
                <h1>BETTER THAN U</h1>
            </div>
            <div className = "rightSide">
                <img src = {cube}/>
            </div>
        </div>
        <div className = "description" id = "details">
            <div className = "descriptionTitle">
                <div className = "destextBox">
                    <h1>What does it do?</h1>
                    <p>Well, as the name suggests, our robot is simply better than you. Specifically at solving Rubiks Cubes!</p>
                    <h2>Design Specs:</h2>
                    <img src = {spec}/>
                </div>
            </div>
            <div className = "desdes">
                <div className = "desBox">
                <h1>Task List:</h1>
                <p>1. Receive State of Cube</p>
                <p>2. Analyze Solution Steps to Solve Cube and output to file</p>
                <p>3. RobotC Program takes File and displays it on the screen.</p>
                <p>4. Waits for button press</p>
                <p>5. Solves Cube via inputted instructions</p>
                <p>6. Displays the time to solve and completion message</p>
                </div>
            </div>
        </div>
        <div className = "hardware" id = "cad">
            <div className = "hardtitle">
                <h1>C   A   D</h1>
            </div>
            <div className = "cadescrip">
                <div className = "progress" id = "early">
                    <h2>Early Concept</h2>
                    <img src = {early}/>
                </div>
                <div className = "progress" id = "mid">
                    <h2>Mid Design</h2>
                    <div className = "pics">
                    <img src = {mid}/>
                    <img src = {mid2}/>
                    </div>
                </div>
                <div className = "progress" id = "final">
                    <h2>Final CAD</h2>
                    <div className = "pics">
                    <img src = {cad}/>
                    <img src = {cad2}/>
                    </div>
                </div>
            </div>
        </div>
        <div className = "software" id = "code">
            <div className = "cadescrip" id = "softwarepart">
                <div className = "progress" id = "calgo">
                    <h2>C++ Algorithm</h2>
                    <img src = {c}/>
                </div>
                <div className = "progress" id = "robotcalgo">
                    <h2>RobotC Program</h2>
                    <img src = {robotc}/>
                    <img src = {robotc2}/>
                </div>
            </div>
            <div className = "titless">
                <h1>S O F T W A R E</h1>
            </div>
        </div>
        <div className = "Media" id = "media">
            <div className = "race">
            <h1>THE RACE</h1>
            <iframe src="https://www.youtube.com/embed/zzZ92Bj764I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className = "contributors">
                <h1>Members:</h1>
                <div className = "members">
                    <h2>Jun Woo Oh</h2>
                    <ExternalLink href = "https://www.linkedin.com/in/junwoooh/">
                        <button>Linkedin</button>
                    </ExternalLink>
                </div>
                <div className = "members">
                    <h2>Makis Lam</h2>
                    <ExternalLink href = "https://www.linkedin.com/in/makislam/">
                        <button>Linkedin</button>
                    </ExternalLink>
                </div>
                <div className = "members">
                    <h2>Jacob Lee</h2>
                    <ExternalLink href = "https://www.linkedin.com/in/jacoblee57/">
                        <button>Linkedin</button>
                    </ExternalLink>
                </div>
                <div className = "members">
                    <h2>Ivan Lin</h2>
                    <ExternalLink href = "https://www.linkedin.com/in/lin-ivan/">
                        <button>Linkedin</button>
                    </ExternalLink>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Home
