import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import SideBar from '@/components/SideBar';
import CreateCompanyPanel from '@/components/CreateCompanyPanel';

export default async function CreateCompany() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  return (
    <main>
      <SideBar />
      <CreateCompanyPanel />
    </main>
  );
}
