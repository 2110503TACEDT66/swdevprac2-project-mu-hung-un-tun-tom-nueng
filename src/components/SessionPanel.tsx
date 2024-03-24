'use client';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import getSession from '@/libs/getSession';
import getUserProfile from '@/libs/getUserProfile';
import SessionItem from './SessionItem';
import Link from 'next/link';

export default async function SessionPanel({
  sessionsJson,
}: {
  sessionsJson: Promise<SessionJson>;
}) {
  const router = useRouter();
  const SessionJson = await sessionsJson;

  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const profile = await getUserProfile(session.user.token);

  return (
    <div className="z-50 space-y-2 p-20 sm:ml-72">
      <div className="flex flex-row items-center justify-between border-b-2">
        <div className="p-5 text-5xl">Session</div>
        {profile.data.role == 'admin' ? (
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
        ) : null}
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
