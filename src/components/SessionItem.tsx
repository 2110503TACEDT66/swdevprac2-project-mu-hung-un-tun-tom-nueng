export default function SessionItem({
  company,
  date,
}: {
  company: Object;
  date: Date;
}) {
  return (
    <div className="flex h-[150px] w-full flex-col justify-between rounded-2xl p-5 shadow-lg">
      <div className="space-y-1">
        <div className="text-2xl font-bold">{company.name}</div>
        <div>{date.toString()}</div>
      </div>
      <button
        className="self-end rounded-3xl border-2 border-blue1 bg-blue1 px-8
                        py-1 text-white hover:bg-white hover:text-blue1"
      >
        Edit
      </button>
    </div>
  );
}