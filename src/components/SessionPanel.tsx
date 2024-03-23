'use client';
import SessionItem from './SessionItem';
import { useRouter } from 'next/navigation';

export default function SessionPanel({ role }: { role: boolean }) {
  const router = useRouter();
  return (
    <div className="z-50 space-y-2 p-20 sm:ml-72">
      <div className="flex flex-row items-center justify-between border-b-2">
        <div className="p-5 text-5xl">Session</div>
        {role && ( // Using a logical AND operator to conditionally render if 'role' is true
          <div>
            <button
              className="self-end rounded-3xl border-2 border-blue1 px-10 py-2 font-semibold text-blue1 
                              hover:shadow-[inset_-3px_-3px_0_0_rgba(71,100,247,0.2)]"
              onClick={(e) => {
                router.push(`/session/create`);
              }}
            >
              Create new session
            </button>
          </div>
        )}
      </div>
      <SessionItem companyName="MyCourseVile" date="2024-03-21T12:00:00" />
      <SessionItem companyName="MyCourseVile" date="2024-03-21T12:00:00" />
      <SessionItem companyName="MyCourseVile" date="2024-03-21T12:00:00" />
    </div>
  );
}
