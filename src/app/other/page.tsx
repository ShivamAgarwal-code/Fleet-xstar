'use client'
import Image from 'next/image';
import Link from 'next/link';
import PyramidChart from '@/app/components/pyramidChart';  
import TrxNetworkChart from '@/app/components/trexNetworkChart';

export default function orgPage() {
  return (
    <div className='relative w-full overflow-visible ' >
      <section
          className="w-full h-auto bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center my-auto pt-[200px] pb-[100px]"
          style={{ backgroundImage: "url('/images/heroBg.png')" }}>
        <div className="flex flex-col items-center justify-center text-center md:pt-20 pt-0 sm:w-2/3 md:w-full 2xl:px-40 sm:px-5 px-8">
          <div className="h-15"></div>
          <div className="flex flex-col space-y-8">
            <span className="text-[#8c8c8c] xl:text-[20px] md:text-[17px] text-[10px] md:mb-[25px] mb-[15px] font-semibold uppercase">
            Guide for New Participants in the Spiritual Network 
            </span>
            <h1 className="font-genos 2xl:text-7xl xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-[1000] text-white lg:leading-25 leading-8 md:mb-7 mb-[20px] uppercase ">
              A new believer joins our spiritual network
            </h1>
            <p className="text-white xl:text-[22px] lg:text-[20px] md:text-[15px] md:font-[300] text-[10px] 2xl:px-[170px] ">
              The 70TRX offered as tribute will be divided among the six immediate senior believers connected directly, 
            </p>
            <p className="text-white xl:text-[22px] lg:text-[20px] md:text-[15px] md:font-[300] text-[10px] 2xl:px-[170px] ">
              If a new believer fails to recruit at least 7 new believers within a month, they will lose all their privileges. This means that each believer must have a minimum of 7 immediate junior believers connected directly to them.
            </p>
          </div>
        </div>
      </section>    
      <section className="flex flex-col justify-center items-center w-full h-auto">
        <div className='xl:w-2/5 md:w-4/5 w-full md:px-1 px-3 text-center'>
          <h1 className='text-white 2xl:text-4xl text-3xl pt-15'>Our spiritual network gives you the power to receive so much glory</h1>
        </div>
        <PyramidChart />
        <div className='md:w-3/5 w-4/5 md:px-1 px-3 text-center'>
          <h2 className='text-white md:text-2xl text-lg pb-3'>
            If 7 people each recruit 7 members, 49 new believers will join our spiritual network.
          </h2>
          <h3 className='text-white md:text-xl text-md'> If those 49 each recruit 7 more, the number becomes 343, then 2,401 in the next stage. Expanding to 7 levels, there will be 823,543 members.</h3>
        </div>
      </section>
      <section className='relative flex lg:flex-row flex-col justify-center items-end w-full h-auto '>
        <TrxNetworkChart />
        <div className='absolute lg:top-10 bottom-10 md:right-20 right-5 z-10 '>
          <h2 className='md:text-[18px] text-[10px] text-white'> The Offering Will Be Given</h2>
          <h2 className='md:text-[18px] text-[10px] text-white'>Immediate Superior&apos;s Belie</h2>
        </div>
      </section>
      <section
        className="relative flex items-center 2xl:mt-[200px]  overflow-x-clip"
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
