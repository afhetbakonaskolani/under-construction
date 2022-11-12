import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Construction from './components/Construction';
import Button from './components/Button';
import Social from './components/Social';

function App() {
  return (
    <section className='flex items-center justify-center lg:h-screen selection:bg-semilight md:h-screen sm:h-screen'>
      <div className='container lg:mb-28 md:pt-48 sm:my-0 sm:pt-28 pt-10'>
        <div className='flex flex-wrap mx-4'>
          <div className='w-full lg:w-1/2 items-center md:w-full md:flex md:flex-wrap md:justify-center lg:mx-0 md:mx-20'>
            <div className='xl:mr-16 lg:mr-4 lg:ml-5 md:mr-0'>
              <div className='flex lg:scale-100 lg:mr-0 md:scale-90 md:-mr-20'>
                <span className='animate-ping-slow absolute blur-md'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='50'
                    height='50'
                    fill='#54cdf0'
                    class='bi bi-exclamation-triangle'
                    viewBox='0 0 16 16'>
                    <path d='M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z' />
                    <path d='M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z' />
                  </svg>
                </span>
                <span className='relative'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='50'
                    height='50'
                    fill='#54cdf0'
                    class='bi bi-exclamation-triangle'
                    viewBox='0 0 16 16'>
                    <path d='M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z' />
                    <path d='M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z' />
                  </svg>
                </span>
              </div>
              <h1 className='uppercase xl:text-4xl lg:text-3xl font-bold text-light mt-6 lg:ml-0 md:ml-7 text-2xl'>Under Construction</h1>
              <p className='xl:text-xl text-lightToDark pt-6 text-left tracking-wider xl:leading-loose lg:leading-relaxed md:text-base lg:text-lg lg:mx-0 md:ml-7 md:mr-20'>
                Our website is under construction, but we are ready to go! We are preparing something amazing and exciting for you. Please come back
                later.
              </p>
              <p className='xl:text-xl lg:text-lg text-lightToDark tracking-wider leading-loose xl:mt-6 lg:mt-2 md:mt-2 md:text-base lg:ml-0 md:ml-7'>
                More info please contact us via {` `}
                <a href='mailto:fahmiarif96@gmail.com' className='underline underline-offset-4 hover:text-blue xl:text-xl lg:text-lg md:text-base'>
                  mail
                </a>
                .
              </p>
              <div className='lg:mt-6 md:mt-2'>
                <a href='https://t.me/muchfahmiarif' target={`_blank`}>
                  <Button className='xl:scale-100 lg:ml-0 lg:scale-90 md:scale-75 md:ml-2 scale-90 mt-4 ml-1 ease-in-out duration-200'>Notify Me</Button>
                </a>
              </div>
              <div className='xl:mt-12 md:scale-75 md:mt-4 md:mr-80 xl:scale-100 lg:mr-[268px] scale-75 mr-72 mt-4'>
                <Social >
                  <a href='https://www.instagram.com/muchfahmiarif/?hl=en' target={`_blank`}>
                    <Social.Instagram className={`hover:fill-blue`}/>
                  </a>
                  <a href='https://www.linkedin.com/in/muchammad-fahmi-arif-427b62117/' target={`_blank`}>
                    <Social.Linkedin />
                  </a>
                  <a href='https://github.com/muchfahmiarif' target={`_blank`}>
                    <Social.Github />
                  </a>
                </Social>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2 items-center md:scale-75 lg:scale-100 md:flex md:flex-wrap md:justify-center scale-50 flex flex-wrap justify-center'>
            <div className='md:scale-90 lg:scale-75 xl:scale-100'>
              <Construction />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
