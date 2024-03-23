import Link from 'next/link';
import Image from 'next/image';

export default function SideBarProfile() {
  const name = 'John Doe',
    tel = '0811111111',
    email = 'user@gmail.com',
    profile = '/img/user.png';

  return (
    <div className="flex flex-col items-start items-center py-5">
      <Image
        src={profile}
        alt="logo"
        width={100}
        height={100}
        sizes="100vh"
      ></Image>
      <div>
        <div className="py-1 text-lg">
          <span className="text-gray-500">Name:</span> {name}
        </div>

        <div className="py-1 text-lg">
          <span className="text-gray-500">Tel:</span> {tel}
        </div>

        <div className="py-1 text-lg">
          <span className="text-gray-500">Email:</span> {email}
        </div>
      </div>
    </div>
  );
}
