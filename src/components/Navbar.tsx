import Logo from '../assets/icons/logo';
import StoreIcon from '../assets/icons/geo';
import MenuIcon from '../assets/icons/menu';

import Link from 'next/link';

function Navbar() {
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
          <Link href={'/'}>
            <button className='nav-btn bg-white hover:bg-neutral-300'>
              Sign in
            </button>
          </Link>
          <Link href={'/'}>
            <button className='nav-btn bg-black text-white hover:bg-opacity-75'>
              Join now
            </button>
          </Link>
        </div>
        <div className='flex-between rounded-full p-2 transition-colors hover:bg-neutral-100 md:hidden'>
          <MenuIcon />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
