import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import getUserProfile from '@/libs/getUserProfile';
import SessionItem from './SessionItem';
import Link from 'next/link';

export default async function SessionPanel({
  sessionsJson,
}: {
  sessionsJson: Promise<SessionJson>;
}) {
  const SessionJson = await sessionsJson;

  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  return (
    <div className="z-50 space-y-2 p-20 sm:ml-72">
      <div className="flex flex-row items-center justify-between border-b-2">
        <div className="p-5 text-5xl">Session</div>
        {/* {profile.data.role == 'admin' ? (
          <div>
            <Link
              className="self-end rounded-3xl border-2 border-blue1 px-10 py-2 font-semibold text-blue1 
                              hover:shadow-[inset_-3px_-3px_0_0_rgba(71,100,247,0.2)]"
              href="/company"
            >
              Create new session
            </Link>
          </div>
        ) : null} */}
      </div>
      {SessionJson.count === 0 && (
        <div className="pt-12 text-center">There is no session</div>
      )}
      <div>
        {SessionJson.data.map((sessionItem: SessionItem) => (
          <SessionItem
            key={sessionItem._id}
            id={sessionItem._id}
            company={sessionItem.company}
            date={sessionItem.date}
          />
        ))}
      </div>
    </div>
  );
}
