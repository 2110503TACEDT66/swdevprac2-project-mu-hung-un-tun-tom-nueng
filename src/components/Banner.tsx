import Partner from './Partner';
import Link from 'next/link';
import Image from 'next/image';

const Banner = () => {
  const partnerLogos = [
    { logoUrl: '/img/sp1.png', name: 'Chula' },
    { logoUrl: '/img/sp2.png', name: 'CEDT' },
  ];

  return (
    <div className="relative flex h-[80vh] w-full flex-col py-5">
      <div className="mx-[4vh] my-[8vh] flex flex-row flex-wrap space-y-10">
        <div className="flex flex-col space-y-[6vh]">
          <div className="space-y-[1.5vh] text-6xl font-bold drop-shadow-lg">
            <h1>Your Career</h1>
            <h1>Path Starts</h1>
            <h1>Here !</h1>
          </div>
          <div className="space-y-[1vh] text-xl drop-shadow-sm">
            <p>Connect with top companies, find your dream job,</p>
            <p>and take your professional journey to the next level.</p>
          </div>
          <Link
            href="/company"
            className="flex w-auto min-w-[20%] max-w-[50%] items-center justify-center rounded-2xl bg-blue1 px-4 py-2 text-white"
          >
            Interview Now
          </Link>
        </div>
        <Image
          src="/img/banner.png"
          alt="Banner"
          width={0}
          height={0}
          sizes="100vw"
          className="ml-auto flex h-[40vh] w-auto min-w-[40vh] max-w-[100vh] rounded-3xl object-cover"
        />
      </div>

      <div className="absolute bottom-0 right-0 flex flex-row space-x-10">
        {partnerLogos.map((partner, index) => (
          <Partner key={index} logoUrl={partner.logoUrl} name={partner.name} />
        ))}
      </div>
    </div>
  );
};

export default Banner;
