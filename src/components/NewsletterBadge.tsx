import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function NewsLetterBadge() {
  return (
    <Link className="z-10" href="/contact">
      <button className="bg-white/10 tracking-wide cursor-pointer flex text-sm border mb-2 gap-2 border-white/20 hover:border-white/60 duration-200 hover:text-white hover:shadow-xs text-neutral-50 px-4 py-1.5 rounded-full">
        Sign up for the Stoc newsletter.{" "}
        <span className="text-white font-semibold flex flex-row gap-1 items-center">
          Sign up now <ArrowUpRight size={16} strokeWidth={"2"} />
        </span>
      </button>
    </Link>
  );
}
