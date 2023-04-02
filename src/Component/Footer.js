import React from 'react'
import { ExternalLink } from 'react-external-link';
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GithubIcon from "@mui/icons-material/GitHub"

import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className = "socialMedia">
          <ExternalLink href = "https://www.linkedin.com/in/junwoooh/">
            <LinkedInIcon/>
          </ExternalLink>
          <ExternalLink href = "https://github.com/makislam/BetterThanU">
            <GithubIcon/>
          </ExternalLink>
          </div>
        <p> BETTER THAN U, 2023</p>
    </div>
  )
}

export default Footer
