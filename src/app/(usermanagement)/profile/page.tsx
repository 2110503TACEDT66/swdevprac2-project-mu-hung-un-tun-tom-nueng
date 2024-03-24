import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import ProfilePanel from '@/components/ProfilePanel';
import SideBar from '@/components/SideBar';

export default async function Profile() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  return (
    <main>
      <SideBar />
      <ProfilePanel />
    </main>
  );
}
