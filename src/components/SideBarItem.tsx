import Link from 'next/link';

export default function SideBarItem({
  route,
  path,
}: {
  route: string;
  path: string;
}) {
  return (
    <Link
      className="left-0 h-full w-72 px-10 py-5 text-lg text-black
                hover:border-t-2 hover:font-bold hover:text-blue1 hover:shadow-md"
      href={path}
    >
      {route}
    </Link>
  );
}
