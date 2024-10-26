import React from 'react'
import AutoBiznessImg from "../assets/images/AutoBiznesImg.png"
import CRMImg from "../assets/images/CRMImg.png"
import MobileImg from "../assets/images/MobileImg.png"
import ComputerImg from "../assets/images/computerImg.png"
import SiteImg from "../assets/images/siteImg.png"
import ErpImg from "../assets/images/erpImg.png"



const Work = () => {
  return (
    <section className='mb-[100px]'>
        <div className='w-[1680px] mx-auto'>
            <div className='mb-[80px]'>
                <h2 className='font-extrabold text-[70px] text-black leading-[85.3px] text-center mb-[50px]'>Bizning xizmatlar</h2>
                <div className='flex items-center justify-center space-x-[164px]'>
                    <div className='relative'>
                        <p className='font-medium text-[40px] leading-[48.76px]'>Hamyonbop</p>
                        <span className='absolute bottom-[-10px] left-[-56px] w-[141px] h-[24px] bg-[#08B86D] -z-10'></span>
                    </div>
                    <div className='relative'>
                        <p className='font-medium text-[40px] leading-[48.76px]'>Sifatli</p>
                        <span className='absolute bottom-[-2px] left-[-21px] w-[69px] h-[20px] bg-[#08B86D] -z-10'></span>
                    </div>
                    <div className='relative'>
                        <p className='font-medium text-[40px] leading-[48.76px]'>O’z vaqtida</p>
                        <span className='absolute bottom-[-7px] left-[-24px] w-[87px] h-[24px] bg-[#08B86D] -z-10'></span>
                    </div>
                </div>
            </div>
            <ul className='mx-[60px] flex flex-wrap  space-x-[100px] mb-[50px]'>
                <li className='autoBizness w-[450px] py-[27px] px-[80px] bg-white rounded-[37px] text-center'>
                    <img className='w-[156px] h-[218px] mx-auto' src={AutoBiznessImg} alt="AutoBiznessImg" />
                    <h3 className='font-medium text-[30px] leading-[45px]'>Biznesni avtomatlashtirish</h3>
                </li>
                <li className='crmItem w-[450px] py-[49px] px-[130px] bg-white rounded-[37px] text-center'>
                    <img className='w-[186px] h-[186px] mx-auto mb-5' src={CRMImg} alt="CRMImg" />
                    <h3 className='font-medium text-[30px] leading-[45px]'>CRM tizimlar</h3>
                </li>
                <li className='MobileItem w-[450px] py-[50px] px-[124px] bg-white rounded-[37px] text-center'>
                    <img className='w-[186px] h-[186px] mx-auto mb-5' src={MobileImg} alt="MobileImg" />
                    <h3 className='font-medium text-[30px] leading-[45px]'>Mobil ilovalar</h3>
                </li>
            </ul>
            <ul className='mx-[60px] flex flex-wrap  space-x-[100px]'>
                <li className='computerItem w-[450px] py-[32px] px-[106px] bg-white rounded-[37px]'>
                    <img className='w-[186px] h-[186px] mx-auto mb-[10px]' src={ComputerImg} alt="ComputerImg" />
                    <h3 className='w-[237px] font-medium text-[30px] leading-[45px] text-center'>Kompyuter dasturlari</h3>
                </li>
                <li className='siteItem w-[450px] py-[49px] px-[132px] bg-white rounded-[37px] text-center'>
                    <img className='w-[186px] h-[186px] mx-auto mb-5' src={SiteImg} alt="SiteImg" />
                    <h3 className='font-medium text-[30px] leading-[45px]'>Web saytlar</h3>
                </li>
                <li className='erpItem w-[450px] py-[50px] px-[132px] bg-white rounded-[37px] text-center'>
                    <img className='w-[186px] h-[186px] mx-auto mb-5' src={ErpImg} alt="ErpImg" />
                    <h3 className='font-medium text-[30px] leading-[45px]'>ERP tizimlar</h3>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Work