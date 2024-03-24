import DateReserve from '@/components/DateReserve';
import { TextField } from '@mui/material';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/getUserProfile';
import getCompany from '@/libs/getCompany';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function Booking({ params }: { params: { cid: string } }) {
  const companyDetail = await getCompany(params.cid);

  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) {
    alert('Please Login');
    redirect('/auth/login');
  }

  const profile = await getUserProfile(session.user.token);
  var createdAt = new Date(profile.data.createdAt);

  // const companyDetail = {
  //     data: {
  //         name: "ABC",
  //         desc: "bla bla bla",
  //         picture: "/img/about1.png",
  //         website: "https://abc.com",
  //         address: "123",
  //         tel: "0812345678"
  //     }
  // }

  return (
    <main className="mx-20 my-28 rounded-3xl border p-14 shadow-inner">
      <h1 className="text-[30px] font-bold">{companyDetail.data.name}</h1>
      <div className="my-12 flex flex-row">
        <Image
          src={companyDetail.data.picture}
          alt="Company Image"
          width={0}
          height={0}
          sizes="100vw"
          className="h-fit w-[30%]"
        />
        <div className="mx-32 text-left">
          <div className="text-md w-fit space-y-2 text-left text-gray-600">
            Available Date
            <DateReserve />
          </div>

          <button
            className="mt-2 inline h-[3em] w-[40vw] rounded-3xl bg-indigo-600 px-3 py-2 text-white shadow-sm hover:bg-indigo-800"
            name="bookvaccine"
            id="bookvaccine"
            value="Book Vaccine"
          >
            Confirm
          </button>
        </div>
      </div>
    </main>
  );
}
