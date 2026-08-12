import { Link } from "react-router-dom";
import type { BlogPost } from "../data/posts";
import { linkClass } from "./primitives";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className={`flex h-full flex-col gap-[12px] rounded-[16px] border border-[#e5e5de] bg-white p-[20px] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-[3px] hover:shadow-md lg:gap-[16px] lg:rounded-[20px] lg:p-[28px] ${linkClass}`}
    >
      <span className="font-['Inter',sans-serif] text-[11.5px] text-[#737870]">{formatDate(post.date)}</span>
      <h3 className="font-['Archivo',sans-serif] text-[18px] font-bold leading-[1.25] text-[#14171a] lg:text-[21px]">{post.title}</h3>
      <p className="font-['Inter',sans-serif] text-[13px] leading-[1.55] text-[#737870] lg:text-[14.5px]">{post.excerpt}</p>
      <span className="mt-auto font-['Inter',sans-serif] text-[12.5px] font-semibold text-[#32523d] lg:text-[13.5px]">Read more →</span>
    </Link>
  );
}
