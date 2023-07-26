import Image from 'next/legacy/image';
import Link from 'next/link';

// import { urlFor } from '../lib/client';

import { BannerProps } from '../models/interface';

type Props = {
  banner: BannerProps;
};

function BannerCard({ banner }: Props) {
  return (
    <aside
      className='flex-between mb-4 w-full max-md:flex-col lg:mb-8'
      style={{ backgroundColor: banner.bg_color }}
    >
      <div className='py-10 text-center text-white max-md:w-full sm:w-full md:w-1/2'>
        <h1 className='mx-auto mb-[35px] w-2/3 font-bold sm:text-[35px] md:text-[50px]'>
          {banner.title}
        </h1>
        <p className='mx-auto mb-[35px] w-2/3 text-2xl font-medium'>
          {banner.description}
        </p>
        <Link href={banner.btn_url}>
          <button className='banner-btn'>{banner.btn_text}</button>
        </Link>
      </div>
      <Image
        src={banner.image}
        width={900}
        height={700}
        alt={banner.title}
        className='md:min-w-1/2 max-md:w-full'
      />
    </aside>
  );
}

export default BannerCard;
