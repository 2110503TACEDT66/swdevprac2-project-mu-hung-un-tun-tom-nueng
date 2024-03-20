import SideBarItem from './sideBarItem';
import Image from 'next/image';

export default function SideBar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-72">
      <div className="flex h-full flex-col items-center bg-white px-3 py-32 shadow-lg">
        <Image
          src={'/img/user.png'}
          alt="logo"
          width={100}
          height={100}
          sizes="100vh"
        ></Image>
        <SideBarItem />
        <button className="absolute bottom-10 rounded-2xl border-2 px-10 py-2 ">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
