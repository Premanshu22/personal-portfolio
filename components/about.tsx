"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hi, I'm Premanshu Das Biswas — a final-year B.Tech Computer Science student and a passionate full-stack developer. I love crafting web experiences that are not only functional but also delightful.{" "}
        Upon graduation,
        I embarked on a journey to become a{" "}
        <span className="font-medium">Software Developer</span>. What
        drives me most is the thrill of untangling a complex problem and
        crafting an effective solution. My core stack is{" "}
        <span className="font-medium">
          Java, DSA, React, Next.js, Node.js, MongoDB.
        </span>{" "}
        Beyond coding, I'm an active participant in hackathons, placement preparation, and community events. My goal is to join a team where I can solve real-world problems, continuously learn, and make meaningful contributions.{" "}
        . I am always looking to learn new technologies. I am currently looking
        for a <span className="font-medium">full-time position</span> as a
        software developer.
      </p>
      <p>
        I believe in clean code, collaborative growth, and the power of technology to make lives better. Let's connect and create something amazing!
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        cricket, video games, watching movies and anime series, or taking walks for a
        breath of fresh air.
      </p>
    </motion.section>
  );
}
