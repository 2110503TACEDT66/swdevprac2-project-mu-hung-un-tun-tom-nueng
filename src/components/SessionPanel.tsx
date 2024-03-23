import SessionItem from './SessionItem';

export default function SessionPanel() {
  return (
    <div className="z-50 space-y-2 p-20 sm:ml-72">
      <div className="border-b-2 p-5 text-5xl">Session</div>
      <SessionItem companyName="MyCourseVile" date="2024-03-21T12:00:00" />
      <SessionItem companyName="MyCourseVile" date="2024-03-21T12:00:00" />
      <SessionItem companyName="MyCourseVile" date="2024-03-21T12:00:00" />
    </div>
  );
}
