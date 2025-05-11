'use client'
import Image from 'next/image';
import Link from 'next/link';

export default function orgPage() {
  return (
    <div className='relative w-full overflow-visible'>
      <section
          className="w-full h-auto bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center my-auto pt-[200px] pb-[100px]"
          style={{ backgroundImage: "url('/images/heroBg.png')" }}>
        <div className="flex flex-col items-center justify-center text-center md:pt-20 pt-0 lg:w-3/5 md:w-4/5 sm:w-2/3 w-full xl:px-0 sm:px-5 px-8">
          <div className="h-15"></div>
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
      <section className="relative w-full h-auto flex justify-center md:pt-[-100px] xl:mb-[180px] md:mb-[120px] mb-[80px] ">
        <div className="relative z-10 card grid xl:grid-cols-3 grid-cols-1 gap-10 border-2 rounded-[20px]  border-[rgba(255,255,255,0.1)] 
          bg-white/5 backdrop-blur-2xl 2xl:py-[120px] py-[70px] md:mx-[120px] sm:mx-[80px] mx-[20px] 2xl:px-[120px] px-[40px]">
            <div className="card relative z-10 2xl:mr-[-100px] xl:mr-[-50px] text-white rounded-[20px] flex flex-col justify-between py-[0px] space-y-5">
              <h1 className='uppercase xl:text-2xl md:text-xl text-[12px] font-[1000] '>WELCOME TO THE ORGANIZATION PANEL OF 7 SAINTS.</h1>
              <h2 className="text-[#a0aec0] font-bold text-[15px]">Your Spiritual Network</h2>
              <input type="email" placeholder="Recommender" className="input rounded-3xl border-2 border-white/5 
                bg-gradient-to-r from-transparent via-white/2 to-transparent backdrop-blur-lg  px-5 md:py-3 py-2 text-sm font-extrabold text-white" />
              <input type="email" placeholder="Referrals count" className="input rounded-3xl border-2 border-white/10 
              bg-gradient-to-r from-transparent via-white/4 to-transparent backdrop-blur-lg px-5 md:py-3 py-2  text-sm font-extrabold text-white" />

              <h2 className="text-[#a0aec0] text-[15px]">Deposit Instructions</h2>
              <ol className='list-decimal pl-5 text-white text-sm space-y-4 text-[12px]'>
                <li>Enter the Referrer Trx Wallet address in the designated field.
                </li>
                <li>Ensure that your TronLink wallet is connected and ready for the transaction.
                </li>
                <li>Click on the &quot;Sacrifice&quot; button to initiate the deposit process.
                </li>
              </ol>
            </div>
            <div className="card relative z-10 col-span-2 px-20 py-[80px] 2xl:ml-[150px] xl:ml-[50px] text-white rounded-[20px] border-2 border-[rgba(255,255,255,0.1)] 
                bg-[linear-gradient(127deg,_#10232f_28.26%,_#061622_91.2%)] 
                backdrop-blur-[84.7674px] pt-[28px] xl:pr-[43px] pr-[23px] pb-[62px] xl:pl-[63px] pl-[23px] flex flex-col justify-between">
                <div className='flex justify-between pb-12'>
                  <h1 className='uppercase md:text-2xl text-[10px] font-semibold'>Referral Tracking
                  </h1>
                  <button className='border-1 border-gray-500 md:p-3 p-2  rounded-[20px] '
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src='/images/dots.svg' alt="" className='lg:w-[30px] lg:h-[20px] w-[20px] ' />
                  </button>
                </div>
                <div className='flex items-center justify-between'>
                  <div className="card text-white md:rounded-[20px] flex flex-col justify-between bg-cover bg-center bg-no-repeat 
                    3xl:w-[308px]  2xl:w-[250px] xl:w-[300px] lg:w-[250px] sm:w-[200px] w-[120px] lg:h-[132px] sm:h-[90px] h-[50px] "
                    style={{ backgroundImage: "url('/images/ref-img1.png')" }}>
                    <h1 className='md:text-xl text-[10px] text-gray-400 font-semibold pt-4 pl-5'>invited</h1>
                  </div>
                  <div className="card  text-white rounded-[20px] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat 
                    3xl:w-[273px] xl:w-[200px] lg:w-[210px] md:w-[170px] 3xl:h-[290px] xl:h-[212px] lg:h-[223px] md:h-[180px] sm:w-[120px] sm:h-[130px] w-[100px] h-[106px]"
                    style={{ backgroundImage: "url('/images/hour.svg')" }}>
                    <div className='text-2xl'>
                      <h4 className='lg:text-2xl text-[12px]'>Referrals</h4>
                      <span className='lg:text-7xl md:text-3xl text-[20px]'>-</span>
                      <span className='lg:text-7xl md:text-3xl text-[20px]'>/</span>
                      <span className='lg:text-7xl md:text-3xl text-[20px]'>∞</span>
                      <p className='lg:text-2xl text-[12px]'>out of</p>
                    </div>
                  </div>
               </div>
            </div>
        </div>
        <Image src="/images/shape-icon.svg" alt="Menu Icon" width={615} height={647} className='absolute top-20' />
      </section>
      <section className='relative z-20 w-full flex flex-col items-center justify-center lg:mb-30 mb-10 px-5'>
        <h1 className='text-white pb-10 xl:text-6xl lg:text-5xl md:text-3xl text-xl font-[1000]'>CELESTIAL <span className='text-[#bba490]'>HIERARCHY</span> </h1>
        <ul className='list-disc list-inside pl-5 text-white lg:text-xl md:text-[16px] text-[10px] text-center '>
          <li>Ascend through the celestial hierarchy as you grow your spiritual network.</li>
          <li>Each referral strengthens the bonds of our interconnected souls, leading us closer to enlightenment.</li>
        </ul>
      </section>
      <section
        className="relative flex items-center 2xl:mt-[400px] mt-[100px]  overflow-x-clip"
      >
        <div className=' flex flex-col md:space-y-5 space-y-2 z-20 lg:pl-[100px] px-6 mt-10 w-full'>
          <h2 className='lg:block hidden uppercase font-semibold xl:text-6xl text-4xl text-white xl:mb-20 text-left'>7 <span className='text-[#bba490]' >S A I N T S</span> </h2>
          <Link href="/user-panel"  className='flex items-center '>
              <Image src="/images/box-icon.svg" alt="Logo" 
              width={0}
              height={0}
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span className="ml-2 lg:text-xl text-sm font-bold text-gray-400">USER PANEL</span>
          </Link>
          <Link href="/organization"  className='flex items-center '>
              <Image src="/images/user-icon.svg" alt="Logo"  
              width={0}
              height={0}
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span className="ml-2 lg:text-xl text-sm font-bold text-gray-400">ORGANIZATIONS</span>
          </Link>
          <Link href={{ pathname: '/user-panel', hash: 'withdraw' }}  className='flex items-center '>
              <Image src="/images/withdraw.svg" alt="Logo"  
              width={0}
              height={0}
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span className="ml-2 lg:text-xl text-sm font-bold text-gray-400">Withdraw</span>
          </Link>
          <Link href={{ pathname: '/user-panel', hash: 'deposit' }}  className='flex items-center '>
              <Image src="/images/deposit-icon.svg" alt="Logo"  
              width={0}
              height={0}
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span className="ml-2 lg:text-xl text-sm font-bold text-gray-400">Deposit</span>
          </Link>
          <h2 className='uppercase font-semibold xl:text-xl text-[8px] text-gray-400 md:my-15 my-5'>ALL CONTENT © [CURRENT YEAR] 7 SAINTS. ALL RIGHTS RESERVED.</h2>
        </div>
        <Image src='/images/saint-group-bg.png' alt='' width={393} height={143} className='absolute bottom-0 left-0 z-10 md:hidden block' />
        <Image src='/images/saints-bg.png' alt='' width={1920} height={708} className='absolute bottom-0 right-0 z-10 md:block hidden' />
        <img src='/images/saint-img.png' alt='' className='absolute bottom-0 lg:right-0 -right-10 z-10 2xl:w-[1303px] xl:w-[1000px] lg:w-[700px] w-[500px]  h-auto' />
      </section>
    </div>
  );
}
