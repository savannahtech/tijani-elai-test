import BannerCard from '@/components/BannerCard';
import Head from '@/components/Head';

const bannersList = [
  {
    image:
      'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84927.jpg',
    description:
      'Make the moment merry. Order Starbucks® holiday favorites on Uber Eats***.',
    _id: '141e5912-9d38-40da-ad44-a6aa4feecf48',
    btn_text: 'Order now',
    title: 'Let the holiday cheer come to you',
    bg_color: '#eb81a5',
    btn_url: '/',
  },
  {
    image:
      'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84954.jpg',
    description:
      'Make the moment merry. Order Starbucks® holiday favorites on Uber Eats***.',
    _id: 'f86bd8d0-4c24-40f8-8bdf-f21ec16dea6a',
    btn_text: 'Order now',
    title: 'Let the holiday cheer come to you',
    bg_color: '#e5ff67',
    btn_url: '/',
  },
  {
    image:
      'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84930.jpg',
    description:
      'Make the moment merry. Order Starbucks® holiday favorites on Uber Eats***.',
    _id: '485ca018-63e0-4148-8302-4c9f7f15eb84',
    btn_text: 'Order now',
    title: 'Let the holiday cheer come to you',
    bg_color: '#8f8bf4',
    btn_url: '/',
  },
  {
    image:
      'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84933.jpg',
    description:
      'Make the moment merry. Order Starbucks® holiday favorites on Uber Eats***.',
    _id: '50d78560-a927-4cc9-a819-9b2305bd77f6',
    btn_text: 'Order now',
    title: 'Let the holiday cheer come to you',
    bg_color: '#f1ff67',
    btn_url: '/',
  },

  {
    image:
      'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84617.jpg',
    description:
      'Make the moment merry. Order Starbucks® holiday favorites on Uber Eats***.',
    _id: '7eb58ada-99f5-4da7-aae4-feeef8964227',
    btn_text: 'Order now',
    title: 'Let the holiday cheer come to you',
    bg_color: '#e1fccd',
    btn_url: '/',
  },
];

export default function Home() {
  // const banners: Banners[] = await getBanners()

  return (
    <>
      <Head>
        <title>Starbucks Coffee Company-Clone</title>
      </Head>
      <section>
        <div className='order mx-auto mb-16 flex max-w-[1440px] flex-col'>
          {bannersList.map((banner) => (
            <BannerCard key={banner._id} banner={banner} />
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
