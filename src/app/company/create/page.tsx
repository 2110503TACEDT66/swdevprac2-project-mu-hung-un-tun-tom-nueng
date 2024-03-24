import Company from '@/db/models/Company';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import SideBar from '@/components/SideBar';
import { dbConnect } from '@/db/dbConnect';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import getUserProfile from '@/libs/getUserProfile';

export default async function CreateCompany() {
  const addCompany = async (addCompanyForm: FormData) => {
    'use server';
    const picture = addCompanyForm.get('picture');
    const name = addCompanyForm.get('name');
    const address = addCompanyForm.get('address');
    const website = addCompanyForm.get('website');
    const desc = addCompanyForm.get('desc');
    const tel = addCompanyForm.get('tel');

    try {
      await dbConnect();
      const company = await Company.create({
        picture: picture,
        name: name,
        address: address,
        website: website,
        desc: desc,
        tel: tel,
      });
    } catch (error) {
      console.log(error);
    }

    revalidateTag('company');
    redirect('/company');
  };

  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) redirect('/auth/login');

  const profile = await getUserProfile(session.user.token);

  return (
    <main>
      <SideBar />
      <div className="z-50 space-y-2 p-20 sm:ml-72">
        <div className="mb-5 border-b-2 p-5 text-5xl">Edit Profile</div>
        <div className="flex h-full flex-col items-center bg-white px-3">
          {profile.data.role == 'admin' ? (
            <form className="mt-5" action={addCompany}>
              <div className="mb-3">
                <label
                  className="mb-2 block text-sm font-medium text-gray-900"
                  htmlFor="picture"
                >
                  Picture
                  <input
                    type="text"
                    id="picture"
                    name="picture"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 
                                        text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="URL"
                  />
                </label>
              </div>
              <div className="mb-3">
                <label
                  className="mb-2 block text-sm font-medium text-gray-900"
                  htmlFor="name"
                >
                  Company name
                  <input
                    type="text"
                    required
                    id="name"
                    name="name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 
                                    text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Company name"
                  />
                </label>
              </div>

              <div className="mb-3">
                <label
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="address"
                >
                  Address
                  <input
                    type="text"
                    required
                    id="address"
                    name="address"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 
                                    text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Address"
                  />
                </label>
              </div>

              <div className="mb-3">
                <label
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="website"
                >
                  Website
                  <input
                    type="text"
                    required
                    id="website"
                    name="website"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 
                                    text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Website"
                  />
                </label>
              </div>

              <div className="mb-3">
                <label
                  className="mb-2 block text-sm font-medium text-gray-900"
                  htmlFor="description"
                >
                  Description
                  <input
                    type="text"
                    id="desc"
                    name="desc"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 
                                    text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Description"
                  />
                </label>
              </div>

              <div className="mb-3">
                <label
                  className="mb-2 block text-sm font-medium text-gray-900"
                  htmlFor="tel"
                >
                  Tel.
                  <input
                    type="text"
                    id="tel"
                    name="tel"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 
                                    text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Tel."
                  />
                </label>
              </div>

              {/* <div className="mb-6 flex items-start">
                <label className="ms-2 flex flex-row text-sm font-medium text-gray-900">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="focus:ring-3 mr-2 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300"
                  />
                  <div className="mt-1">
                    I agree with the{' '}
                    <a href="#" className="text-blue1 hover:underline">
                      terms and conditions
                    </a>
                  </div>
                </label>
              </div> */}

              <button
                className="w-full rounded-3xl bg-blue-200 px-5 py-2.5 text-center 
                text-sm font-medium text-white hover:bg-blue1"
              >
                Submit
              </button>
            </form>
          ) : (
            <p>unauthorize</p>
          )}
        </div>
      </div>
    </main>
  );
}
