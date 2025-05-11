'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const linkClasses = (path: string) =>
    `flex items-center px-3 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
      isActive(path) ? 'text-white' : 'text-[#8c8c8c]'
    }`;
  
  return (
    <nav className="flex md:flex-row flex-col md:items-center items-start justify-center">
      <div className="flex items-center md:justify-between justify-end md:hidden w-screen md:w-auto pr-2 pt-2">
        <button className="fixed top-4 right-4 z-50 md:hidden focus:outline-none" id="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <Image src="/images/close-icon.svg" alt="Open Menu" className="h-6" width={17} height={17} />
        ) : (
          <Image src="/images/menu-icon.svg" alt="Open Menu" className="h-6" width={17} height={17} />
        )}
        </button>
      </div>
      <div className="hidden md:flex justify-center items-center w-[700px] mx-auto rounded-b-[20px]
        bg-[linear-gradient(124deg,rgba(255,255,255,0)_-22.38%,rgba(255,255,255,0.04)_70.38%)] backdrop-blur-[21px] max-w-[774px] py-[20px] pb-[26px]">
        <Link href="/organization" className={linkClasses('/organization')}>
          {isActive('/organization') && (
            <Image src="/images/user2.svg" alt="Menu Icon" width={17} height={17} />
          )}
          <span className="ml-2 font-bold">ORGANIZATIONS</span>
        </Link>
        <Link href="/user-panel" className={linkClasses('/user-panel')}>
          {isActive('/user-panel') && (
            <Image src="/images/menu-icon.svg" alt="Menu Icon" width={17} height={17} />
          )}
          <span className="ml-2 font-bold">USER-PANEL</span>
        </Link>
        <Link href="/other" className={linkClasses('/other')}>
          {isActive('/other') && (
            <Image src="/images/user2.svg" alt="Menu Icon" width={17} height={17} />
          )}
          <span className="ml-2 font-bold">OTHER</span>
        </Link>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[radial-gradient(50%_50%_at_50%_50%,#08112c_0%,#020713_100%)] text-white flex flex-col items-center justify-center space-y-6">
          <h1 className="font-genos 2xl:text-8xl xl:text-7xl md:text-6xl sm:text-4xl text-3xl font-[1000] text-white lg:mb-[70px] md:mb-[150px] mb-[120px]">
            7 <span className="text-[#bba490] uppercase ">s a i n t s</span>
          </h1>
          <ul className="flex flex-col items-center mt-4 space-y-4">
            <li>
              <Link href="/user-panel"  className='flex items-center ' onClick={() => setIsOpen(false)}>
                <Image src="/images/box-icon.svg" alt="Logo" width={15} height={15} />
                <span className="ml-2 text-sm">USER PANEL</span>
            </Link>
            </li>
            <li>
              <Link href="/organization"  className='flex items-center ' onClick={() => setIsOpen(false)}>
                <Image src="/images/user2.svg" alt="" width={15} height={15} />
                <span className="ml-2 text-sm"> ORGANIZATIONS</span>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: '/user-panel', hash: 'withdraw' }}  className='flex items-center ' onClick={() => setIsOpen(false)}>
                <Image src="/images/withdraw.svg" alt="" width={15} height={15} />
                <span className="ml-2 text-sm">Withdraw</span>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: '/user-panel', hash: 'deposit' }}  className='flex items-center ' onClick={() => setIsOpen(false)}>
                <Image src="/images/Deposit-icon.svg" alt="" width={15} height={15} />
                <span className="ml-2 text-sm">Deposit</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
