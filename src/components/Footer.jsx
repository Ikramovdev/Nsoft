import React from 'react'
import FooterSiteLogo from "../assets/images/FooterSiteLogo.svg"

const Footer = () => {
  return (
    <footer className='bg-[#00B669]'>
        <div className='w-full lg:w-[1680px] mx-auto py-[53px] lg:pt-[58px] lg:pb-[97px] flex lg:gap-[192px] overflow-hidden'>
            <div className='mx-auto'>
              <img className='w-[174px] lg:w-[285px] h-[50px] lg:h-[82px] mb-[22px] lg:mb-[15px] mx-auto lg:mx-0' src={FooterSiteLogo} alt="FooterSiteLogo" />
              <p className='w-[248px] lg:w-[360px] text-center lg:text-left font-regular text-[13px] lg:text-[20px] text-black leading-[19.64px] lg:leading-[32px]'>Dasturlar bor dasturlarning naqshidur. Sen avval insonlarning naqshi bo’l.</p>
            </div>
            <div className='hidden lg:block'>
                <strong className='font-medium text-[30px] leading-[21.33px] inline-block mb-[20px]'>Bo’limlar</strong>
                <ul className='flex flex-col gap-[21px]'>
                  <li>
                    <a className='font-medium text-[20px] leading-[21.33px]' href='#contact'>Bog’lanish</a>
                  </li>
                  <li>
                    <a className='font-medium text-[20px] leading-[21.33px]' href='#work'>Xizmatlar</a>
                  </li>
                  <li>
                    <a className='font-medium text-[20px] leading-[21.33px]' href='#praise'>Biz haqimizda</a>
                  </li>
                  <li>
                    <a className='font-medium text-[20px] leading-[21.33px]' href='#trust'>Mijozlar</a>
                  </li>
                </ul>
            </div>
            <div className='w-[310px] hidden lg:block'>
                <strong className='font-medium text-[30px] leading-[21.33px] inline-block mb-[38px]'>Manzil</strong>
                <p className='font-medium text-[20px] leading-[32.33px]' href=''>Andijon viloyati , Andijon shahar M. Saidov ko’chasi 6-uy.</p>
            </div>
            <div className='lg:flex flex-col gap-[13px] hidden '>
                <a className='font-semibold text-[25px] leading-[32px]' href='tel:+998999034440'>+99 899 903 44 40</a>
                <a className='font-semibold text-[25px] leading-[32px]' href='tel:+998930605011'>+99 893 060 50 11</a>
                <a className='font-semibold text-[25px] leading-[32px]' href='tel:+998994005639'>+99 899 400 56 39</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer