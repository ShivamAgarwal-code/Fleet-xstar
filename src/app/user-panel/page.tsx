'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import RainbowKitCustomProvider from '../components/RainbowKitCustomProvider';

export default function userPage() {
  return (
    <RainbowKitCustomProvider>
      <div className='relative w-full overflow-visible'>
        <section
          className="w-full h-auto bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center my-auto pt-[140px] pb-[100px]"
          style={{ backgroundImage: "url('/images/heroBg.png')" }}
        >
          <div className="flex flex-col items-center justify-center text-center md:pt-20 pt-0 lg:w-3/5 md:w-4/5 sm:w-2/3 w-full xl:px-0 sm:px-5 px-8">
            <div className="flex w-[200px] text-white md:px-5 px-2 py-3 lg:mb-8 md:mb-6 mb-2 text-base mx-auto justify-center items-center">
                <ConnectButton/>
            </div>
            
            <div className="flex flex-col space-y-8">
              <span className="text-[#8c8c8c] xl:text-[25px] md:text-[20px] text-[10px] md:mb-[25px] mb-[15px] font-semibold uppercase">
                Unlocking Celestial Treasures
              </span>
              <h1 className="font-genos 2xl:text-8xl xl:text-7xl md:text-6xl sm:text-4xl text-3xl font-[1000] text-white lg:mb-[70px] md:mb-[50px] mb-[20px]">
                7 <span className="text-[#bba490] uppercase ">s a i n t s</span>
              </h1>
              <p className="text-white xl:text-[22px] lg:text-[20px] md:text-[15px] md:font-[300] text-[10px] 2xl:px-[170px] ">
                Embark on a transformative journey of enlightenment and discovery
                with 7 Saints, where spirituality meets cryptocurrency in a
                harmonious union. Our platform offers a sacred sanctuary for
                seekers of divine wisdom, powered by the revolutionary TRX
                blockchain technology.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full h-auto flex justify-center md:pt-[-100px] ">
          <div className='relative z-20 grid xl:grid-cols-2 grid-cols-1 md:justify-items-end justify-items-center items-end 3xl:gap-30 md:gap-10 gap-5 md:mx-[150px] mx-[50px] w-full '>
            <div id="deposit" className="
              md:w-full w-[300px]
              xl:px-20 px-10 
              2xl:py-[120px] md:py-[100px] py-10
              text-white 
              rounded-[20px] border-2 border-[rgba(255,255,255,0.1)] 
              bg-white/5 backdrop-blur-2xl 
              flex flex-col md:items-start items-center  
              xl:justify-between 
              md:space-y-6 space-y-4">
              <div className='flex md:flex-row flex-col-reverse items-center md:space-x-4 '>
                <h1 className='uppercase md:text-3xl text-[12px] font-semibold'>DEPOSIT SECTION</h1>
                <figure className='mb-3'>
                    <img src='/images/withdraw.svg' className='w-10 h-10 ' />
                </figure>
              </div>
              <h2 className="text-[#a0aec0] font-bold md:text-[16px] text-[7px]">The deposit amount is 700 TRX.</h2>
              <input type="email" placeholder="Enter referr address" className="input 
                md:rounded-xl rounded-md md:border-2 border-1 border-white/10 
                w-full
                bg-gradient-to-r from-transparent via-white/4 to-transparent backdrop-blur-lg 
                md:h-12 h-5 
                md:px-10 px-4 
                md:py-4 
                md:text-sm text-[8px] font-extrabold text-white" />
              <button className="btn btn-primary md:rounded-[15px] rounded-[5px] bg-[#bba490] max-w-[350px] 
                md:py-2 py-1 
                2xl:px-30 md:px-20 px-10
                text-black font-bold 
                md:text-[15px] text-[8px]">Sacrifice</button>
              <h2 className="text-[#a0aec0] md:text-[16px] text-[7px]"> &nbsp;&nbsp;&nbsp;Please note : A account can only deposit once.</h2>
              <h2 className="text-[#a0aec0] md:text-[16px] text-[7px]">The deposit amount is 700 TRX.</h2>
              <ol className='list-decimal list-inside md:text-left text-center  text-white text-sm md:space-y-4 space-y-3 md:text-[15px] text-[7px] '>
                <li>Enter the Referrer Trx Wallet address in the designated field.
                </li>
                <li>Ensure that your TronLink wallet is connected and ready for the transaction.
                </li>
                <li>Click on the &quot;Sacrifice&quot; button to initiate the deposit process.
                </li>
              </ol>
            </div>
            <div id="withdraw" className="flex flex-col justify-between 
              md:w-full w-[300px]
              3xl:px-20 2xl:px-10 px-10
              2xl:py-16 md:py-8 py-6
              md:text-start text-center
              text-white rounded-[20px]
              border-2 border-[rgba(255,255,255,0.1)] bg-white/5 backdrop-blur-2xl ">
                <h2 className="2xl:text-[28px] md:text-2xl text-[12px] font-black">WITHDRAWAL SECTION</h2>
                <h2 className="2xl:text-5xl md:text-3xl text-[12px] font-black md:mt-6 mt-4 md:mb-12 mb-1">O TRX <span className='lg:text-xl md:text-[16px] text-[8px] text-[#5b636e] md:inline hidden'>( Your current Trx balance )</span> </h2>
                <p className='md:text-xl text-[8px] text-[#8e97a1] md:hidden block mb-8'>( Your current Trx balance )</p>
                <button className="btn btn-primary md:rounded-[15px] rounded-[8px] border-2 border-[#737e8d] max-w-[350px] 
                  md:py-[10px] py-1 text-[#a0aec0] md:text-[15px] text-[8px] font-bold">Withdraw</button>
                <p className="text-[#a0aec0] md:text-[15px] text-[7px] md:mt-7 mt-4 mb-5">&nbsp;&nbsp;&nbsp;Please note : A minimum of 7000 TRX is required for withdrawl.</p>
                <p className='text-[#a0aec0] md:text-[16px] text-[7px]'>Withdrawl Instructions</p>
                <ol className='list-decimal xl:pl-5 pl-3 text-white text-sm md:space-y-3 space-y-2 md:text-[15px] text-[7px] py-4'>
                  <li>
                  To initiate a withdrawal, ensure that you have accumulated a minimum balance of 7000 TRX.
                  </li>
                  <li>Complete Mission 1 and Mission 2 to become eligible for withdrawal.
                  </li>
                  <li>
                  You must have referred at least one user within the last 7 days to qualify for withdrawal.
                  </li>
                  <li>
                  Once the withdrawal conditions are met, click on the &quot;Withdraw&quot; button to begin the withdrawal process.
                  </li>
                </ol>
                <ul className='list-disc xl:pl-5 pl-3 text-[#a0aec0] text-sm md:space-y-2 space-y-1 text-left md:leading-4 leading-3 md:text-[16px] text-[7px]'>
                  <li>
                     Withdrawals are processed automatically once the withdrawal conditions are met.
                  </li>
                  <li>Your TRX balance will be transferred to your connected TronLink wallet.
                  </li>
                  <li>Please allow up to 24 hours for the withdrawal to reflect in your wallet.
                  </li>
                </ul>
            </div>
            <div className="  
                w-full h-auto
                p-[57px] 
                3xl:mt-0 md:mt-15 mt-5
                md:pt-[40px] md:pb-[70px] py-[40px]   
                text-white 
                rounded-[20px] 
                border-2 border-[rgba(255,255,255,0.1)] 
                flex flex-col justify-between text-left 
                md:space-y-8 space-y-4
                bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/balance-card-bg.png')" }}>
              <h3 className="text-[#a0aec0] xl:font-semibold md:text-[20px] text-[12px]">Hi User001</h3>
              <h2 className="text-[#a0aec0] 2xl:text-2xl md:text-xl text-[16px] md:leading-10 leading-5 font-[1000]"> Your current TRX <br/>balance</h2>
              <h1 className="text-white 2xl:text-4xl md:text-3xl text-xl md:leading-10 leading-5 md:font-[1000] font-[600]">1000 TRX</h1>
            </div>
            <div className='xl:block hidden'></div>
            <div className=" 
              w-full h-auto px-10 
              xl:mt-0 mt-[-5px]
              md:pt-[50px] pb-[70px] py-[40px]
              text-white rounded-[20px] border-2 border-[rgba(255,255,255,0.1)] 
              flex flex-col justify-between  bg-cover bg-center bg-no-repeat md:space-y-8 space-y-4"
                style={{ backgroundImage: "url('/images/mission-bg.png')" }}>
                
                <h2 className="text-[#a0aec0] md:text-[30px] text-[20px] md:leading-10 leading-5 md:font-[1000] font-[600]"> Mission Status</h2>
                <div className='flex items-center space-x-4'>
                  <figure>
                    <img  src='/images/user.png' alt="Shoes" className='md:w-[54px] md:h-[54px] w-[25px] h-[25px]' />
                  </figure>
                  <h2 className='uppercase font-semibold md:text-2xl text-[10px]'>Debbie Reese</h2>
                </div>
                <div className='flex flex-row justify-between 2xl:w-2/3 w-4/5  '>
                  <div className='flex flex-col md:space-y-4 space-y-2'>
                    <p className="text-[#a0aec0] md:text-[15px] text-[8px] "> Mission</p>
                    <div className='flex items-center space-x-4'>
                      <figure>
                        <img  src='/images/ethereum.svg' alt="Shoes" className='md:w-[15px] md:h-[24px] w-[10px] h-[15px]' />
                      </figure>
                      <h2 className='uppercase font-semibold md:text-[15px] text-[10px]'>Mission 01</h2>
                    </div>
                    <div className='flex items-center space-x-4'>
                      <figure>
                      <img  src='/images/ethereum.svg' alt="Shoes" className='md:w-[15px] md:h-[24px] w-[10px] h-[15px]' />
                      </figure>
                      <h2 className='uppercase font-semibold md:text-[15px] text-[10px]'>Mission 02</h2>
                    </div>
                  </div>
                  <div className='flex flex-col md:space-y-4 space-y-2'>
                  <p className="text-[#a0aec0] md:text-[15px] text-[8px] "> Time left
                  </p>
                    <h2 className='uppercase font-semibold md:text-[15px] text-[10px]'>02h 32m 44s</h2>
                    <h2 className='uppercase font-semibold md:text-[15px] text-[10px]'>PENDING
                    </h2>
                  </div>
                  <div className='flex flex-col md:space-y-4 space-y-2'>
                    <p className="text-[#a0aec0] md:text-[15px] text-[8px]"> Referrals</p>
                    <h2 className='uppercase font-semibold text-black md:text-[15px] text-[10px]'>0/1
                    </h2>
                    <h2 className='uppercase font-semibold text-black md:text-[15px] text-[10px]'>0/7
                    </h2>
                  </div>
                </div>         
            </div>
            <div className="md:flex flex-col 2xl:w-[550px] xl:w-[450px] xl:max-h-[350px] w-full h-[250px] 2xl:p-20 p-10 text-white rounded-[40px]
               border-2 border-[rgba(255,255,255,0.1)] bg-white/10 backdrop-blur-2xl space-y-15 items-end hidden">
                <h2 className="text-white 2xl:text-[55px] text-[45px] leading-10 font-[1000] "> 7 <span className='uppercase text-[#bba490]'>s a i n t s</span> </h2>
                <Link href="http://telegram.org" className='flex items-center space-x-5' >
                  <Image src='/images/telegram.png' alt="Shoes" width={40} height={40} />
                  <h2 className='uppercase font-semibold 2xl:text-3xl text-xl'>Join Telegram</h2>
                </Link>
            </div>
            
            <Link href="http://telegram.org" className='md:hidden flex w-full space-x-4 pt-[100px]' >
              <Image src='/images/telegram.png' alt="Shoes" width={10 } height={10} />
              <h2 className='uppercase font-semibold xl:text-xl text-[8px] text-white'>Join Telegram</h2>
            </Link>
      
            <img src='/images/shape-icon.svg' alt="Menu Icon" className='w-[615px] h-[647px] absolute z-[-10] top-20 left-1/2 transform -translate-x-1/2 md:block hidden'/>
          </div>
          <Image src='/images/saint-sacred-img.png' alt="" width={1300} height={1276}  className='absolute bottom-0 right-0 z-10 ' />
          <Image src='/images/saint-group-bg.png' alt="" width={1903} height={533} className='absolute bottom-0 right-0 z-0' />
        </section>
        <div className='relative w-full text-center z-30 pt-[120px] pb-[70px]'>
          <h2 className='uppercase font-semibold md:text-[15px] text-[8px] text-white'>All content © [Current Year] 7 Saints. All rights reserved.</h2>
        </div>
      </div>
    </RainbowKitCustomProvider>
  );
}
