import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { POSTS } from "../data/posts";
import { Container, linkClass } from "../components/primitives";
import { useMotionPreset } from "../components/motion";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = POSTS.find((p) => p.slug === slug);
  const { fadeUp, transition } = useMotionPreset();

  if (!post) {
    return (
      <section className="w-full bg-white">
        <Container>
          <div className="flex flex-col items-start gap-[16px] py-[64px] lg:py-[96px]">
            <h1 className="font-['Archivo',sans-serif] text-[28px] font-bold text-[#14171a]">Post not found</h1>
            <Link to="/blog" className={`font-['Inter',sans-serif] text-[14px] font-semibold text-[#32523d] hover:underline ${linkClass}`}>
              ← Back to The Label
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="w-full bg-white">
      <Container>
        <motion.article
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={transition()}
          className="mx-auto flex max-w-[640px] flex-col items-start gap-[20px] py-[48px] lg:gap-[24px] lg:py-[72px]"
        >
          <Link to="/blog" className={`font-['Inter',sans-serif] text-[13px] font-semibold text-[#32523d] hover:underline ${linkClass}`}>
            ← Back to The Label
          </Link>

          <div className="flex items-center gap-[10px]">
            <span className="rounded-[5px] bg-[#e7eee6] px-[8px] py-[4px] font-['Inter',sans-serif] text-[10.5px] font-semibold tracking-[0.1px] text-[#32523d]">
              {post.tag}
            </span>
            <span className="font-['Inter',sans-serif] text-[11.5px] text-[#737870]">{formatDate(post.date)}</span>
          </div>

          <h1 className="font-['Archivo',sans-serif] text-[28px] font-bold leading-[1.15] tracking-[-0.4px] text-[#14171a] lg:text-[38px]">
            {post.title}
          </h1>

          <div className="flex flex-col gap-[16px] lg:gap-[20px]">
            {post.body.map((paragraph, index) => (
              <p key={index} className="font-['Inter',sans-serif] text-[15px] leading-[1.7] text-[#3a3d3a] lg:text-[16.5px]">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.article>
      </Container>
    </section>
  );
}
