import React from 'react'
import HeroImg from "../assets/images/HeroImg.png"

const Hero = () => {
  return (
      <section className='hero-section mb-[98px] bg-green-600'>
          <div className='w-full lg:w-[1680px] mx-auto'>
            <div className='flex flex-col lg:flex-row lg:justify-between'>
              <div className='w-[307px] lg:w-[567px] pt-[30px] lg:pt-[163px] text-center lg:text-left mx-auto lg:mx-0'>
                <h1 className='font-semibold text-[20px] lg:text-[40px] text-black leading-[22.9px] lg:leading-[50px] mb-[10px] lg:mb-[17px]'>Biznes uchun eng yaxshi raqamli yechimlar</h1>
                <strong className='font-medium text-[13.79px] lg:text-[30px] text-black leading-[20.61px] lg:leading-[45px] mb-[10px] lg:mb-[7px]'>web, mobile , ERP, CRM , analytics</strong>
                <p className='font-light text-[10px] lg:text-[25px] text-black leading-[15px] lg:leading-[37.5px] mb-[14px] lg:mb-[17px]'>Nsoft biznes uchun veb xizmatlar va mobil ilovalar, ERP hamda CRM tizimlarini ishlab chiqadi.</p>
                <a className='inline-block text-center w-[110px] lg:w-[240px] py-[10px] lg:py-[20px] bg-white rounded-[4.58px] lg:rounded-[10px] font-medium text-black text-[11.41px] lg:text-[25px] leading-[9.16px] lg:leading-[20px] mb-[62px] lg:mb-[164px]' href='#'>Bog’lanish</a>
              </div>
              <div className='HeroContent'>
                <img className='w-full lg:w-[1071px] h-[197px] lg:h-[643px]' src={HeroImg} alt="HeroImg" />
              </div>
            </div>
          </div>
      </section>  
  )
}

export default Hero