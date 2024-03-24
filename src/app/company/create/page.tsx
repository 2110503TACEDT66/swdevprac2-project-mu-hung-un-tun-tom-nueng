import Company from '@/db/models/Company';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import SideBar from '@/components/SideBar';
import { dbConnect } from '@/db/dbConnect';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import getUserProfile from '@/libs/getUserProfile';
import CreateCompanyForm from '@/components/CreateCompanyForm';

export default async function CreateCompany() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) redirect('/auth/login');

  const profile = await getUserProfile(session.user.token);

  return (
    <main>
      <SideBar />
      <CreateCompanyForm />
    </main>
  );
}
