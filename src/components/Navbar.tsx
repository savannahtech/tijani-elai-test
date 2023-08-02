import Logo from '../assets/icons/logo';
import StoreIcon from '../assets/icons/geo';
import MenuIcon from '../assets/icons/menu';
import Link from 'next/link';
import Drawer from './drawer';
import React from 'react';
import Button from './Button';

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav>
      <div className='nav-wrapper px-4 md:px-12'>
        <div className='flex-between space-x-5'>
          <Link href={'/'}>
            <Logo />
          </Link>
          <ul className='flex-between space-x-5 max-md:hidden'>
            <Link href={'/'}>
              <li>Menu</li>
            </Link>
            <Link href={'/'}>
              <li>Rewards</li>
            </Link>
            <Link href={'/'}>
              <li>Gift Cards</li>
            </Link>
          </ul>
        </div>

        <div className='flex-between space-x-5 max-md:hidden'>
          <Link href={'/'} className='flex-between hover-green space-x-1.5'>
            <StoreIcon />
            <p className='text-xs font-bold'>Find a store</p>
          </Link>
          <Link href={'/account/signin'}>
            <Button className='nav-btn bg-white hover:bg-neutral-300'>
              Sign in
            </Button>
          </Link>
          <Link href={'/account/create'}>
            <Button className='nav-btn bg-black text-white hover:bg-opacity-75'>
              Join now
            </Button>
          </Link>
        </div>
        <div className='flex-between rounded-full p-2 transition-colors hover:bg-neutral-100 md:hidden'>
          <Button handleClick={() => setIsOpen(true)}>
            <MenuIcon />
          </Button>
        </div>
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <h1>hello</h1>
      </Drawer>
    </nav>
  );
}

export default Navbar;
