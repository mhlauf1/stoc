import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function NewsLetterBadge() {
  return (
    <Link
      href="/contact" // or wherever your signup lives
      className="
        z-10
        flex items-center gap-3
        px-5 py-2
        text-sm font-semibold
        text-white
        bg-white/10
        border border-white/20
        rounded-full
        backdrop-blur-sm
        transition
        hover:bg-white/20 hover:border-white/40 hover:shadow-md
        mb-6
      "
    >
      Subscribe to our newsletter
      <ArrowUpRight size={16} strokeWidth={2} />
    </Link>
  );
}
