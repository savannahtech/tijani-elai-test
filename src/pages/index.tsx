import { useEffect, useState } from 'react';
import BannerCard from '@/components/BannerCard';
import Head from '@/components/Head';
import getBannerList from '@/database/banner.list';
import { BannerProps } from '@/models/interface';

export default function Home() {
  const [bannersList, setBannersList] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const res = await getBannerList();
      setBannersList(res);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Starbucks Coffee Company-Clone</title>
      </Head>
      <section>
        <div className='order mx-auto mb-16 flex max-w-[1440px] flex-col'>
          {bannersList.map((banner: BannerProps) => (
            <BannerCard key={banner._id} bannerInfo={banner} />
          ))}
        </div>
        <div className='wrapper mb-[70px] w-2/3 text-center lg:w-1/2'>
          <p className='mb-32'>
            *Offer valid 7/26/23, 8/2/23, and 8/9/23 after 12 p.m. at
            participating stores. Excludes bottled or canned drinks and alcohol.
            Limit one per person. Cannot be combined with other offers or
            discounts. Offer not available through Starbucks® Delivers on Uber
            Eats or DoorDash.
          </p>
          <p>
            *After your two-month free trial, exclusive to Starbucks® Rewards
            members, the subscription renews automatically at $69.99 USD for an
            annual subscription to Headspace. You can cancel at any time. This
            offer is for new and returning Headspace users only.
          </p>
        </div>
      </section>
    </>
  );
}
