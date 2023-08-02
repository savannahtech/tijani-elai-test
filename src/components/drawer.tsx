import React from 'react';
import Button from './Button';
import StoreIcon from '../assets/icons/geo';
import Link from 'next/link';
import { AiOutlineArrowRight, AiOutlineClose } from 'react-icons/ai';

export default function Drawer({ isOpen, setIsOpen }: any) {
  const handleClose = () => setIsOpen(false);

  return (
    <main
      className={
        ' fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out md:hidden' +
        (isOpen
          ? ' transition-opacity opacity-100 duration-500 translate-x-0  '
          : ' transition-all delay-500 opacity-0 translate-x-full  ')
      }
    >
      <section
        className={
          ' w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  ' +
          (isOpen ? ' translate-x-0 ' : ' translate-x-full ')
        }
      >
        <article className='relative w-screen max-w-lg px-10 py-5 flex flex-col space-y-6 overflow-y-scroll h-full'>
          <div className='flex-between p-4'>
            <header className='font-bold text-lg'>{'  '}</header>
            <AiOutlineClose onClick={() => setIsOpen(false)} />
          </div>

          <div className='py-10'>
            <ul className='flex-col space-x-5'>
              <Link href={'/'}>
                <li className='flex-between font-medium capitalize'>
                  Menu <AiOutlineArrowRight />
                </li>
              </Link>
              <Link href={'/'}>
                <li className='font-medium capitalize'>Rewards</li>
              </Link>
              <Link href={'/'}>
                <li className='font-medium capitalize'>Gift Cards</li>
              </Link>
            </ul>

            <div className='border border-silver-200 border-b-silver-500 mt-5'></div>
          </div>

          <div className='space-x-5'>
            <Link href={'/account/signin'} onClick={handleClose}>
              <Button className='nav-btn bg-white hover:bg-neutral-300'>
                Sign in
              </Button>
            </Link>
            <Link href={'/account/create'} onClick={handleClose}>
              <Button className='nav-btn bg-black text-white hover:bg-opacity-75'>
                Join now
              </Button>
            </Link>
          </div>
          <div className='flex-between space-x-5'>
            <Link href={'/'} className='flex-between hover-green space-x-1.5'>
              <StoreIcon />
              <p className='text-xs font-bold'>Find a store</p>
            </Link>
          </div>
        </article>
      </section>
      <section
        className=' w-screen h-full cursor-pointer '
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
