import React  from 'react'
import './style.scss'
import { TypeAnimation } from 'react-type-animation';
import {useNavigate} from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className='' id="Hero">
        <div className='about' >
          <div className='headings'><h3>Hello, </h3><h1>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Hey, I am Neelam',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Full Stack Developer',
                1000,
                'Programmer',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            /></h1>
            <p>Want to know more about me.. here is about me..want to hire me 
            </p>
            
          </div>
          <div className='btns'>
              <button>Hire Me</button>
              <button onClick={()=>navigate('/service')}>My Projects</button>
            </div>
        </div>
        <div className='me'><img src={require('./1.bmp')} alt="code" width={'70%'} /></div>
</div>
    </>
  )
}

export default Hero
