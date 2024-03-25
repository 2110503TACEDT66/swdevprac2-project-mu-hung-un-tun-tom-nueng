'use client';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function SessionItem({
  id,
  company,
  date,
}: {
  id: string;
  company: any;
  date: Date;
}) {
  const router = useRouter();
  const { data: session } = useSession();
  if (!session || !session.user.token) {
    return <p> Please Login</p>;
  }

  const deleteSession = async (id: string, token: string) => {
    try {
      const response = await fetch(
        `https://job-fair-frontend-but-backend.vercel.app/sessions/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error('Failed to delete session');
      }
      alert('Delete successful');
      window.location.reload();
    } catch (error) {
      console.error('An unexpected error happened:', error);
      alert('Delete failed');
    }
  };

  return (
    <div className="flex h-[150px] w-full flex-col justify-between rounded-2xl p-5 shadow-lg">
      <div className="space-y-1">
        <div className="text-2xl font-bold">{company.name}</div>
        <div>{date.toString()}</div>
      </div>
      <div className="flex flex-row self-end">
        <div
          className="mx-1 rounded-3xl border-2 border-blue3 bg-blue3 px-8 
                          py-1 text-white hover:bg-white hover:text-blue3"
        >
          <Link href="#">Edit</Link>
        </div>
        <button
          className="rounded-3xl border-2 border-blue1 bg-blue1 px-8
                          py-1 text-white hover:bg-white hover:text-blue1"
          onClick={() => deleteSession(id, session.user.token)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
