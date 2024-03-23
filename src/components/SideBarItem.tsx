import { useRouter } from 'next/navigation';

export default function SideBarItem() {
  const router = useRouter();
  return (
    <div>
      <div
        className="w-72 px-10 py-5 text-lg text-black 
                hover:border-t-2 hover:font-bold hover:text-blue1 hover:shadow-md"
        onClick={(e) => {
          router.push('/session');
        }}
      >
        Session
      </div>
      <div
        className="w-72 px-10 py-5 text-lg text-black 
            hover:border-t-2 hover:font-bold hover:text-blue1 hover:shadow-md"
        onClick={(e) => {
          router.push('/profile');
        }}
      >
        Account
      </div>
    </div>
  );
}
