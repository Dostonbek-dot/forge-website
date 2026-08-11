import { motion } from "motion/react";
import { POSTS } from "../data/posts";
import { BlogCard } from "./blog-card";
import { Container } from "./primitives";
import { useMotionPreset, viewportOnce } from "./motion";

export function BlogGrid() {
  const { fadeUpItem, staggerContainer } = useMotionPreset();

  return (
    <section className="w-full bg-white">
      <Container>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer()}
          className="grid grid-cols-1 gap-[16px] py-[32px] sm:grid-cols-2 lg:gap-[24px] lg:py-[48px]"
        >
          {POSTS.map((post) => (
            <li key={post.slug}>
              <motion.div variants={fadeUpItem} className="h-full">
                <BlogCard post={post} />
              </motion.div>
            </li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
