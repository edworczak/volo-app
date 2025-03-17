import Login from "@/components/login/login";
import Link from "next/link";

export default function Panel() {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center">
        zalogowano
        <div className="flex flex-col gap-4">
            <Link className="button" href="/panel/events">wydarzenia</Link>
            <Link className="button" href="/panel/workshops">szkolenia</Link>
            <Link className="button" href="/panel/workshops">lista osób volo</Link>
        </div>
    </div>
  );
}
