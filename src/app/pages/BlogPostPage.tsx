import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { POSTS } from "../data/posts";
import { Container, linkClass } from "../components/primitives";
import { useMotionPreset } from "../components/motion";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

// Supports **bold** spans within paragraph/heading text — the only markdown the CMS-lite post data uses.
function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index} className="font-semibold text-[#14171a]">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    ),
  );
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
              ← Back to Inside the Formula
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
            ← Back to Inside the Formula
          </Link>

          <span className="font-['Inter',sans-serif] text-[11.5px] text-[#737870]">{formatDate(post.date)}</span>

          <h1 className="font-['Archivo',sans-serif] text-[28px] font-bold leading-[1.15] tracking-[-0.4px] text-[#14171a] lg:text-[38px]">
            {post.title}
          </h1>

          {post.image ? (
            <img
              src={post.image}
              alt={post.imageAlt ?? ""}
              className="h-[320px] w-full rounded-[16px] object-cover lg:h-[440px] lg:rounded-[20px]"
            />
          ) : null}

          <div className="flex flex-col gap-[16px] lg:gap-[20px]">
            {post.body.map((block, index) =>
              block.type === "h3" ? (
                <h3
                  key={index}
                  className="font-['Archivo',sans-serif] text-[20px] font-bold text-[#32523d] lg:text-[24px]"
                >
                  {renderInline(block.text)}
                </h3>
              ) : (
                <p key={index} className="font-['Inter',sans-serif] text-[15px] leading-[1.7] text-[#3a3d3a] lg:text-[16.5px]">
                  {renderInline(block.text)}
                </p>
              ),
            )}
          </div>
        </motion.article>
      </Container>
    </section>
  );
}
