'use client';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { FormEvent, FormEventHandler, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { TextField } from '@mui/material';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/getUserProfile';
import getCompany from '@/libs/getCompany';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import createCompany from '@/libs/createCompany';

type FormDataSession = {
  user: string;
  company: string;
  date: string;
};

export default async function Booking({ params }: { params: { cid: string } }) {
  const [dateTime, setDateTime] = useState(dayjs('2022-05-10T15:30'));
  const [formData, setFormData] = useState<FormDataSession>({
    user: '',
    company: '',
    date: '',
  });

  const { data: session } = useSession();

  // const session = await getServerSession(authOptions);
  if (!session || !session.user.token) {
    return <p> Please Login to see the Company</p>;
  }

  const companyDetail = await getCompany(session.user.token, params.cid);

  const profile = await getUserProfile(session.user.token);

  //var dateTime = dayjs('2022-05-10T15:30');

  // const [dateTime, setDateTime] = useState(null);
  // var dateTime = dayjs('2022-05-10T15:30');

  // const handleInputChange = (event: any) => {
  //   // const { name, value } = event.target;
  //   // setFormData({ ...formData, [name]: value });
  //   setDateTime(event.target.newValue);
  // };

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   let formData = new FormData();
  //   // const userId = await fetch("https://job-fair-frontend-but-backend.vercel.app/", {
  //   //   method: "GET",
  //   //   body: formData,
  //   // });
  //   formData.append('company', companyDetail.data._id.toJSON());
  //   formData.append('user', profile.data._id.toJSON());
  //   formData.append('date', dateTime.toJSON());
  //   const response = await fetch(
  //     'https://job-fair-frontend-but-backend.vercel.app/sessions',
  //     {
  //       method: 'POST',
  //       body: formData,
  //     }
  //   )
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (result) {
  //       alert(result);
  //     })
  //     .catch(function (error) {
  //       console.log('Request failed', error);
  //     });
  // };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formData.company = companyDetail.data._id;
    formData.user = profile.data._id;
    formData.date = dateTime.toJSON();
    const { user, company, date } = formData;

    try {
      const response = await createCompany({ user, company, date });

      if (!response.success) {
        throw new Error('Network response was not ok');
      }
      alert('Company created');
    } catch (error) {
      console.error('An unexpected error happened:', error);
      alert('Create company failed');
    }
  };

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
        <form onSubmit={handleSubmit} className="px-[3em] text-left">
          {/* {
            profile.data.role=='admin'? <div className="w-auto text-md text-left text-black">
              <p className='block'>Email</p>
              <TextField
                className="mx-10 mt-[10px] w-[19vw]"
                label="Email"
                name="Email"
                id="email"
                placeholder="Email"
                size="small"
                InputProps={{
                  style: {
                    borderRadius: '10px',
                  },
                }}
                onSubmit={ user.email }
              />
            </div> : null
          } */}
          <div className="text-md mt-[15px] w-fit space-y-2 text-left text-black">
            Available Date
            <div className="flex w-fit flex-row justify-center space-x-5 space-y-2 rounded-lg px-10 py-5">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Date Time picker"
                  name="date"
                  defaultValue={dateTime}
                  value={dateTime}
                  onChange={(newValue) => {
                    newValue ? setDateTime(newValue) : null;
                  }}
                />
              </LocalizationProvider>
            </div>
          </div>

          <button
            className="mt-2 inline h-[3em] w-[40vw] rounded-3xl bg-indigo-600 px-3 py-2 text-white shadow-sm hover:bg-indigo-800"
            type="submit"
            name="bookvaccine"
            id="bookvaccine"
            value="Book Vaccine"
          >
            Confirm
          </button>
        </form>
      </div>
    </main>
  );
}
