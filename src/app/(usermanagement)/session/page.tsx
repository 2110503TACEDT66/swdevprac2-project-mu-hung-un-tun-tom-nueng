import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import SessionPanel from '@/components/SessionPanel';
import SideBar from '@/components/SideBar';

export default async function Session() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  return (
    <main>
      <SideBar />
      <SessionPanel />
    </main>
  );
}
