import Heading from "@/components/heading";
import Para from "@/components/para";
import { TextScramble } from "@/components/ui/text_scramble";
import { motion } from "motion/react";

function TopSection() {
  return (
    <motion.div
      className="flex flex-col gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Heading className="text-3xl">
        <i className="hgi hgi-stroke hgi-magic-wand-02"></i>
        <TextScramble speed={0.005} duration={1}>
          Blogs
        </TextScramble>
      </Heading>
      <Para>
        Coming Soon...
      </Para>
    </motion.div>
  );
}

function Blogs() {
  return (
    <div className="flex flex-col gap-16">
      <TopSection />
    </div>
  );
}

export default Blogs;
