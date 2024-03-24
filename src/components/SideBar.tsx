'use client';
import SideBarProfile from './SideBarProfile';
import { useRouter } from 'next/navigation';
import SideBarItem from './SideBarItem';

export default function SideBar({ role }: { role: boolean }) {
  const router = useRouter();
  return (
    <div
      className="fixed left-0 top-0 flex h-full h-screen 
      w-72 flex-col items-center bg-white px-3 py-20 shadow-lg"
    >
      <div className="absolute top-56">
        <SideBarItem route="Session" />
        {role && ( // Using a logical AND operator to conditionally render if 'role' is true
          <div>
            <SideBarItem route="Company" />
          </div>
        )}
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
