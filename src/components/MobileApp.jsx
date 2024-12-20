import React from 'react'
import Line from "../assets/images/Line.png"
import PhoneImgMobile from "../assets/images/PhoneImgMobile.png"

const MobileApp = () => {
  return (
        <section className='MobileApp mb-[30px] lg:mb-[100px]'>
            <div className='MobileAppContainer w-full lg:w-[1680px] mx-auto overflow-hidden'>
                <div className='phoneImg'>
                    <div className='phoneTitle mx-[27px] lg:mx-auto lg:gap-[150px] lg:pl-[168px]'>
                        <h2 className='w-[200px] text-center lg:text-left lg:w-[559px] font-extrabold text-[25px] lg:text-[70px] text-black leading-[30.48px] lg:leading-[85.33px] mx-[59px] lg:mx-0'>N-Savdo Agent  Mobil Ilovasi</h2>
                        <p className='w-[320px] lg:w-[570px] text-center font-regular text-[13px] lg:text-[25px] text-black leading-[15.73px] lg:leading-[30.26px] pt-[5px] lg:pt-[90px]'>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown</p>
                    </div>
                    <img className='block lg:hidden w-[203px] h-[291px] mt-[36px] lg:mt-0 mb-[25px] lg:mb-0' src={PhoneImgMobile} alt="PhoneImg" />
                    <div className='phoneBg mx-[53px] lg:mx-0  lg:pt-[300px]'>
                        <div className='phoneTextLeft w-[298px] lg:w-[390px] flex flex-col gap-[25px] lg:gap-[348px] mb-[25px] lg:mb-0'>
                            <p className='font-regular text-[13px] lg:text-[25px] text-black leading-[15.73px] lg:leading-[30.26px]'>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown</p>
                            <p className='font-regular text-[13px] lg:text-[25px] text-black leading-[15.73px] lg:leading-[30.26px]'>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown</p>
                        </div>
                        <div className='phoneTextRight w-[298px] lg:w-[390px] flex flex-col gap-[25px] lg:gap-[348px]'>
                            <p className='font-regular text-[13px] lg:text-[25px] text-black leading-[15.73px] lg:leading-[30.26px]'>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown</p>
                            <p className='font-regular text-[13px] lg:text-[25px] text-black leading-[15.73px] lg:leading-[30.26px]'>Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown</p>
                        </div>
                    </div>
                </div>
            </div>
            <img className='hidden lg:block mt-[258px]' src={Line} alt="Line" />
        </section>
  )
}

export default MobileApp