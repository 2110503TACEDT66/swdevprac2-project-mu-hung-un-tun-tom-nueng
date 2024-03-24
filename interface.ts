interface SessionItem {
  _id: string;
  user: Object;
  company: Object;
  date: Date;
}
interface SessionJson {
  success: boolean;
  count: number;
  pagination: Object;
  data: SessionItem[];
}
