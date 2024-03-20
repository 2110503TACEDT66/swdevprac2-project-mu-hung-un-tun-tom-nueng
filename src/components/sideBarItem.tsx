import Link from 'next/link';

export default function SideBarItem() {
  const name = 'First-name Last-name',
    tel = '0811111111',
    email = 'user@gmail.com';

  return (
    <div className="flex flex-col items-start py-5">
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
  );
}
