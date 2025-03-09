import { cn } from "@/lib/utils";
import Heading from "./heading";
import { motion } from "motion/react";

function Section({
  header,
  children,
  className,
}: {
  header: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={cn("flex flex-col gap-4", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Heading>
        <i className="hgi hgi-stroke hgi-magic-wand-02 text-diff"></i>
        {header}
      </Heading>
      {children}
    </motion.div>
  );
}

export default Section;
