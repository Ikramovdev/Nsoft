import React from 'react'
import FacebookIcon from "../assets/images/facebook.svg"
import InstagramIcon from "../assets/images/instagram.svg"
import TelegramIcon from "../assets/images/telegram.svg"
import PlayMarket from "../assets/images/playmarket.svg"

const Contact = () => {
    function handleContactSubmit(e){
        e.preventDefault()
        const data ={
            userName: e.target.userName.value, 
            UserNumber: e.target.userNumber.value,
        }
        localStorage.setItem("userContact", JSON.stringify(data))
        e.reset()
    }
  return (
    <section id='contact' className='mb-[30px] lg:mb-[50px]'>
        <div className='w-full lg:w-[1680px] mx-auto overflow-hidden'>
            <div className='w-[163px] lg:w-[769px] lg:relative mb-[15px] lg:mb-[65px] mx-auto'>
                <h2 className='relative z-10 font-bold text-[25px] lg:text-[70px] leading-[30.48px] lg:leading-[85.33px] text-center'>Biz bilan bog’lanish</h2>
                <span className='lg:absolute bottom-0 left-[7px] w-[154px] h-[30px] bg-[#08B86D]'></span>
            </div>
            <div className='Contactform bg-white rounded-[9px] mx-[21px] lg:mx-0 lg:rounded-[47px] py-[18px] lg:py-[111px] px-[18px] lg:px-[40px] text-center lg:text-left mb-2 lg:mb-5'>
                <h3 className='w-[300px] lg:w-[860px] font-Karla font-regular text-[13px] lg:text-[50px] text-black leading-[15.2px] lg:leading-[58.45px] mb-[14px] lg:mb-0'>ma'lumotlaringizni qoldiring va menejerimiz 24 soat ichida siz bilan bog'lanadi</h3>
               <form className='mx-auto' onSubmit={handleContactSubmit} autoComplete='off'>
                    <input className='w-[110px] lg:w-[331px] bg-[#00B669] rounded-[12.12px] lg:rounded-[37.5px] py-[6px] lg:pt-[17px] lg:pb-[23px] pl-2 lg:pl-[25px] pr-[2px] lg:pr-[5px] text-white text-[9.71px] lg:text-[30px] leading-[11.35px] lg:leading-[35.7px] placeholder:text-white placeholder:text-[9.71px] placeholder:lg:text-[30px] placeholder:leading-[11.35px] placeholder:lg:leading-[35.7px] outline-none' name={'userName'} type="text" placeholder='Ism' required/>
                    <input className='w-[110px] lg:w-[331px] bg-[#00B669] rounded-[12.12px] lg:rounded-[37.5px] py-[6px] lg:pt-[17px] lg:pb-[23px] pl-2 lg:pl-[25px] pr-[2px] lg:pr-[5px] text-white text-[9.71px] lg:text-[30px] leading-[11.35px] lg:leading-[35.7px] placeholder:text-white placeholder:text-[9.71px] placeholder:lg:text-[30px] placeholder:leading-[11.35px] placeholder:lg:leading-[35.7px] outline-none' name={'userNumber'} type="tel" placeholder='Tel' required/>
                    <button type='submit' className='w-[217px] lg:w-full bg-[#00B669] rounded-[12.12px] lg:rounded-[37.5px] py-[6px] lg:py-[20px] block text-center text-white text-[9.71px] lg:text-[30px] leading-[11.35px] lg:leading-[36.31px] mt-[7px] lg:mt-[39px]'>Habar qoldirish</button>
               </form>
            </div>
            <div className='contact mx-[21px] lg:mx-0'>
                <div className='bg-white w-full lg:w-[972px] pt-[12px] lg:pt-[62px] pl-[9px] lg:pl-[40px] rounded-[12.39px] lg:rounded-[62px] flex justify-between lg:justify-start space-x-[35px] lg:space-x-[208px] mb-1 lg:mb-0'>
                    <div>
                        <div className='relative mb-[3px] lg:mb-[27px]'>
                            <h2 className='relative z-10 font-Lato font-extrabold  text-[12px] lg:text-[50px] leading-[15.6px] lg:leading-[60px]'>Kontaktlar</h2>
                            <span className='absolute bottom-[3px] lg:bottom-0 left-[-8px] lg:left-[-30px] w-[30.76px] lg:w-[154px] h-[4px] lg:h-[20px] bg-[#08B86D]'></span>
                        </div>
                        <p className='w-[114px] lg:w-[455px] font-regular text-[8px] lg:text-[35px] text-black leading-[9.6px] lg:leading-[42px] mb-[2.4px] lg:mb-[30px]'>Andijon viloyati, Andijon shahri. Saidov ko‘chasi, 6-uy.</p>
                        <p className='font-regular text-[8px] lg:text-[35px] text-black leading-[9.6px] lg:leading-[42px] mb-[4px] lg:mb-[30px]'>998 93 060 50 11</p>
                        <p className='font-regular text-[8px] lg:text-[35px] text-black leading-[9.6px] lg:leading-[42px] pb-[19.38px] lg:pb-[109px]'>@NSOFT5011</p>
                    </div>
                    <ul className='flex flex-wrap lg:flex-col gap-[14px] lg:gap-[50px]'>
                        <li>
                            <a href='https://www.facebook.com/share/15WAa2QoKr/?mibextid=LQQJ4d' className='flex items-center space-x-[4px] lg:space-x-[10px] font-bold text-[9.89px] lg:text-[25px] leading-[9.48px] lg:leading-[24px]'>
                            <img className='w-[17px] lg:w-[44px] h-[17px] lg:h-[44px]' src={FacebookIcon} alt="FacebookIcon" />
                            <span>Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/naqshsoft_uz/profilecard/?igsh=MTZ0aGV5dXhxZTRlaw==' className='flex items-center space-x-[4px] lg:space-x-[10px] font-bold text-[9.89px] lg:text-[25px] leading-[9.48px] lg:leading-[24px]'>
                            <img className='w-[17px] lg:w-[44px] h-[17px] lg:h-[44px]' src={InstagramIcon} alt="InstagramIcon" />
                            <span>Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a href='https://t.me/naqshsoft_uz' className='flex items-center space-x-[4px] lg:space-x-[10px] font-bold text-[9.89px] lg:text-[25px] leading-[9.48px] lg:leading-[24px]'>
                            <img className='w-[17px] lg:w-[44px] h-[17px] lg:h-[44px]' src={TelegramIcon} alt="TelegramIcon" />
                            <span>Telegram</span></a>
                        </li>
                        <li>
                            <a href='https://play.google.com/store/apps/details?id=uz.naqshsoft.naqshsavdo&pcampaignid=web_share' className='flex items-center space-x-[4px] lg:space-x-[10px] font-bold text-[9.89px] lg:text-[25px] leading-[9.48px] lg:leading-[24px]'>
                            <img className='w-[17px] lg:w-[44px] h-[17px] lg:h-[44px]' src={PlayMarket} alt="FacebookIcon" />
                            <span>PlayMarket</span></a>
                        </li>
                    </ul>
                </div>
                <iframe className='w-full lg:w-[678px] h-[98px] lg:h-[480px] rounded-[12.39px] lg:rounded-[62px] cursor-pointer' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.718979290059!2d72.34700217625073!3d40.79019187138186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcebeb381492b9%3A0xb489d795254d00c3!2sNSOFT%20Andijon!5e0!3m2!1suz!2s!4v1730035534219!5m2!1suz!2s" loading="lazy"></iframe>
            </div>
        </div>
    </section>
  )
}

export default Contact