import CreateSessionPanel from '@/components/CreateSessionPanel';
import SideBar from '@/components/SideBar';

export default function CreateSession() {
  const admin = true;
  return (
    <main>
      <SideBar role={admin} />
      <CreateSessionPanel />
    </main>
  );
}
