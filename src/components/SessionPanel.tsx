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
      </div>
      <div>
        {SessionJson.data.map((sessionItem: SessionItem) => (
          <Link href={`/session/${sessionItem._id}`} key={sessionItem._id}>
            <SessionItem
              company={sessionItem.company}
              date={sessionItem.date}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
