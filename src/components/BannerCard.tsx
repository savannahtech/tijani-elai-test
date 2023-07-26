import Image from 'next/legacy/image';
import Link from 'next/link';
import { BannerProps } from '../models/interface';

type Props = {
  bannerInfo: BannerProps;
};

function BannerCard({ bannerInfo }: Props) {
  return (
    <aside
      className='flex-between mb-4 w-full max-md:flex-col lg:mb-8'
      style={{ backgroundColor: bannerInfo.bg_color }}
    >
      <div className='py-10 text-center text-white max-md:w-full sm:w-full md:w-1/2'>
        <h1
          className='mx-auto mb-[35px] w-2/3 font-bold sm:text-[35px] md:text-[50px]'
          style={{ color: bannerInfo.color }}
        >
          {bannerInfo.title}
        </h1>
        <p
          className='mx-auto mb-[35px] w-2/3 text-2xl font-medium'
          style={{ color: bannerInfo.color }}
        >
          {bannerInfo.description}
        </p>
        <Link href={bannerInfo.btn_url}>
          <button
            className='banner-btn'
            style={{ color: bannerInfo.color, borderColor: bannerInfo.color }}
          >
            {bannerInfo.btn_text}
          </button>
        </Link>
      </div>
      <Image
        src={bannerInfo.image}
        width={900}
        height={700}
        alt={bannerInfo.title}
        className='md:min-w-1/2 max-md:w-full'
      />
    </aside>
  );
}

export default BannerCard;
