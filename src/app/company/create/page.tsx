import SideBar from '@/components/SideBar';
import CreateCompanyPanel from '@/components/CreateCompanyPanel';

export default function CreateCompany() {
  const admin = true;
  return (
    <main>
      <SideBar role={admin} />
      <CreateCompanyPanel />
    </main>
  );
}
