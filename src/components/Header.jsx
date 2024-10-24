import React from 'react'
import SiteLogo from "../assets/images/SiteLogo.svg"
import { ArrowDownIcon, CallIcon} from '../assets/images/Icon'
import FlagIcon from "../assets/images/FlagIcon.svg"
import MenuIcon from "../assets/images/MenuIcon.svg"

const Header = () => {
  const NavbarList = [
    {
      id:1,
      title:"Biz haqimizda",
      path:"#",
    },
    {
      id:2,
      title:"Xizmatlar",
      path:"#",
    },
    {
      id:3,
      title:"Mijozlar",
      path:"#",
    },
    {
      id:4,
      title:"Bog’lanish",
      path:"#",
    },
  ]
  return (
    <header className='mt-[16px] mb-[12px] lg:mt-0 lg:mb-0 lg:py-[7px]'>
      <div className='w-full lg:w-[1680px] px-5 lg:px-0 mx-auto flex items-center justify-between lg:block'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-[280px]'>
              <img className='w-[77.13px] lg:w-[148.74px] h-[23.69px] lg:h-[45.69px] cursor-pointer' src={SiteLogo} alt='SiteLogo'/>
              <ul className='hidden lg:flex items-center space-x-[48px]'>
                {NavbarList.map(item => (
                  <li key={item.id}>
                      <a className='font-medium text-[16px] leading-[24px]' href={item.path}>{item.title}</a>
                  </li>
                ))}
              </ul>
          </div>
          <div className='hidden lg:flex items-center'>
            <a className='flex items-center space-x-[3px] pr-[22px]' href='tel:+998999034440'>
              <CallIcon/>
             <p className='font-medium text-[16px] leading-[20px] text-black'>+998 99 903 44 40</p>
            </a>
            <div className='flex items-center'>
                <div className='flex items-center px-[22px] border-l-[2px] border-r-[2px] border-[#E3E3E3] cursor-pointer'>
                  <img className='w-[20px] h-[14px] pr-[2px]' src={FlagIcon} alt="FlagIcon" />
                  <span className='font-medium text-[14px] leading-[24px] text-black pr-[5px]'>Uz</span>
                  <ArrowDownIcon/>
                </div>
                <div className='pl-[56px]'>
                  <button className='w-[169px] bg-[#108F25] rounded-[5px] py-[5px] font-semibold text-[16px] text-white leading-[24px]'>Mijoz bo’lish</button>
                </div>
            </div>
          </div>
        </div>
        <button className='block lg:hidden cursor-pointer'>
          <img className='w-[25px] h-[25px]' src={MenuIcon} alt="MenuIcon" />
        </button>
      </div>
    </header>
  )
}

export default Header