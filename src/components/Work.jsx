import React from 'react'
import AutoBiznessImg from "../assets/images/AutoBiznesImg.png"
import CRMImg from "../assets/images/CRMImg.png"
import MobileImg from "../assets/images/MobileImg.png"
import ComputerImg from "../assets/images/computerImg.png"
import SiteImg from "../assets/images/siteImg.png"
import ErpImg from "../assets/images/erpImg.png"



const Work = () => {
  return (
    <section className='mb-[30px] lg:mb-[100px]'>
        <div className='w-full lg:w-[1680px] mx-auto'>
            <div className='mb-[30px] lg:mb-[80px]'>
                <h2 className='font-extrabold text-[20px] lg:text-[70px] text-black leading-[24.38px] lg:leading-[85.3px] text-center mb-[18px] lg:mb-[50px]'>Bizning xizmatlar</h2>
                <div className='flex items-center justify-center space-x-[25px] lg:space-x-[164px]'>
                    <div className='relative'>
                        <p className='relative z-10 font-medium text-[15px] lg:text-[40px] leading-[18.29px] lg:leading-[48.76px]'>Hamyonbop</p>
                        <span className='absolute bottom-0 lg:bottom-[-10px] left-[-18px] lg:left-[-56px] w-[50px] lg:w-[141px] h-[9px] lg:h-[24px] bg-[#08B86D]'></span>
                    </div>
                    <div className='relative'>
                        <p className='relative z-10 font-medium text-[15px] lg:text-[40px] leading-[18.29px] lg:leading-[48.76px]'>Sifatli</p>
                        <span className='absolute bottom-0 lg:bottom-[-2px] left-[-7px] lg:left-[-21px] w-[24px] lg:w-[69px] h-[8px] lg:h-[20px] bg-[#08B86D]'></span>
                    </div>
                    <div className='relative'>
                        <p className='relative z-10 font-medium text-[15px] lg:text-[40px] leading-[18.29px] lg:leading-[48.76px]'>O’z vaqtida</p>
                        <span className='absolute bottom-0 lg:bottom-[-7px] left-[-8px] lg:left-[-24px] w-[31px] lg:w-[87px] h-[9px] lg:h-[24px] bg-[#08B86D]'></span>
                    </div>
                </div>
            </div>
            <div>
                <ul className='mx-5 lg:mx-[60px] flex flex-wrap gap-[17px] lg:gap-[50px]'>
                    <li className='autoBizness w-[150px] lg:w-[450px] py-[9px] lg:py-[27px] px-[26px] lg:px-[80px] bg-white rounded-[12px] lg:rounded-[37px] text-center mr-[16px] lg:mr-[50px] lg:mb-[50px]'>
                        <img className='w-[52px] lg:w-[156px] h-[73px] lg:h-[218px] mx-auto' src={AutoBiznessImg} alt="AutoBiznessImg" />
                        <h3 className='font-medium text-[10px] text-[#1D1D1D] lg:text-[30px] leading-[15px] lg:leading-[45px]'>Biznesni avtomatlashtirish</h3>
                    </li>
                    <li className='crmItem w-[150px] lg:w-[450px] py-[16px] lg:py-[49px] px-[43px] lg:px-[130px] bg-white rounded-[12px] lg:rounded-[37px] text-center mr-[16px] lg:mr-[50px] lg:mb-[50px]'>
                        <img className='w-[62px] lg:w-[186px] h-[62px] lg:h-[186px] mx-auto mb-[7px] lg:mb-5' src={CRMImg} alt="CRMImg" />
                        <h3 className='font-medium text-[10px] lg:text-[30px] leading-[15px] lg:leading-[45px]'>CRM tizimlar</h3>
                    </li>
                    <li className='MobileItem w-[150px] lg:w-[450px] py-[22px] lg:py-[50px] px-[35px] lg:px-[124px] bg-white rounded-[12px] lg:rounded-[37px] text-center mr-[16px] lg:mr-0 lg:mb-[50px]'>
                        <img className='w-[62px] lg:w-[186px] h-[62px] lg:h-[186px] mx-auto mb-[4px] lg:mb-5' src={MobileImg} alt="MobileImg" />
                        <h3 className='font-medium text-[10px] lg:text-[30px] leading-[15px] lg:leading-[45px]'>Mobil ilovalar</h3>
                    </li>
                    <li className='computerItem w-[150px] lg:w-[450px] py-[10px] lg:py-[32px] px-[35px] lg:px-[106px] bg-white rounded-[12px] lg:rounded-[37px] text-center  mr-[16px] lg:mr-[50px]'>
                        <img className='w-[62px] lg:w-[186px] h-[62px] lg:h-[186px] mx-auto mb-[3px] lg:mb-[10px]' src={ComputerImg} alt="ComputerImg" />
                        <h3 className='w-[79px] lg:w-[237px] font-medium text-[10px] lg:text-[30px] leading-[15px] lg:leading-[45px] text-center'>Kompyuter dasturlari</h3>
                    </li>
                    <li className='siteItem w-[150px] lg:w-[450px] py-[16px] lg:py-[49px] px-[43px] lg:px-[132px] bg-white rounded-[12px] lg:rounded-[37px] text-center  mr-[16px] lg:mr-[50px]'>
                        <img className='w-[62px] lg:w-[186px] h-[62px] lg:h-[186px] mx-auto mb-[6px] lg:mb-5' src={SiteImg} alt="SiteImg" />
                        <h3 className='font-medium text-[10px] lg:text-[30px] leading-[15px] lg:leading-[45px]'>Web saytlar</h3>
                    </li>
                    <li className='erpItem w-[150px] lg:w-[450px] py-[16px] lg:py-[50px] px-[16px] lg:px-[132px] bg-white rounded-[12px] lg:rounded-[37px] text-center'>
                        <img className='w-[62px] lg:w-[186px] h-[62px] lg:h-[186px] mx-auto mb-[6px] lg:mb-5' src={ErpImg} alt="ErpImg" />
                        <h3 className='font-medium text-[10px] lg:text-[30px] leading-[15px] lg:leading-[45px]'>ERP tizimlar</h3>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Work