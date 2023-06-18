import React from 'react'
import {BsLinkedin,BsInstagram,BsGithub} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/nidhikumar1401/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/nidhikumar" target='_blank'><BsGithub/></a>
        <a href="https://www.instagram.com/lets.not.know/" target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial