"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="max-w-[45rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        Dynamic and motivated Full Stack Web Developer adept in React(Next.js),
        Vue(Nuxt.js), Node.js(Nest.js), PrismaORM, Java, Spring Boot, Relational
        Database, HTML, CSS, Tailwind CSS, and beginner-level Python Django.
        Passionate about crafting visually appealing and intuitive web
        applications. Committed to continuous learning and growth, I thrive in
        collaborative environments and excel in delivering results. Seeking an
        opportunity to apply my skills and contribute to innovative projects as
        a part of a progressive organization. Open to exciting career prospects
        and ready to make a positive impact in the programming field.
      </p>
      <p></p>
    </motion.section>
  );
}
