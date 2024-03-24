'use client';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import SideBarProfile from './SideBarProfile';
import { useRouter } from 'next/navigation';
import SideBarItem from './SideBarItem';
import getUserProfile from '@/libs/getUserProfile';

export default async function SideBar() {
  const router = useRouter();

  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const profile = await getUserProfile(session.user.token);

  return (
    <div
      className="fixed left-0 top-0 flex h-full h-screen 
      w-72 flex-col items-center bg-white px-3 py-20 shadow-lg"
    >
      <div className="absolute top-56">
        <SideBarItem route="Session" />
        {profile.data.role == 'admin' ? (
          <div>
            <SideBarItem route="Company" />
          </div>
        ) : null}
        <SideBarItem route="Profile" />
      </div>
      <div className="absolute bottom-10 flex flex-col">
        <SideBarProfile />
        <button
          className="rounded-3xl border-2 px-10 py-2
                        hover:border-blue1 hover:bg-blue1 hover:text-white"
          onClick={(e) => {
            router.push('/profile');
          }}
        >
          Edit Profile
        </button>
        <button
          className="mt-2 rounded-3xl border-2 px-10 py-2
                        hover:border-blue1 hover:bg-blue1 hover:text-white"
        >
          Log out
        </button>
      </div>
    </div>
  );
}
