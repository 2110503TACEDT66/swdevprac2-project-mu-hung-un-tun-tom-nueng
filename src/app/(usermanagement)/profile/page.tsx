import ProfilePanel from '@/components/ProfilePanel';
import SideBar from '@/components/SideBar';

export default function Profile() {
  const admin = true;
  return (
    <main>
      <SideBar role={admin} />
      <ProfilePanel />
    </main>
  );
}
