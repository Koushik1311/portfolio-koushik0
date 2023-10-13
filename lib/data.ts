import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import verbaltrove from "@/public/verbaltrove.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Regent Education & Research Foundation",
    location: "India, West Bengal",
    description:
      "I graduated with a BTech Degree in Computer Science & Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 -2022",
  },
  {
    title: "Full-Stack Web Developer",
    location: "India, Delhi(Remote)",
    description:
      "I am currently working as a full-stack web developer at Mentorsity. I'm working with technologies like React(Next.js), Node.js, and PostgreSQL.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "VerbalTrove",
    projectlink: "https://verbaltrove.netlify.app/",
    description:
      "I created a full-stack dynamic web app from scratch, featuring a Random Quote Generator. Deployed on Cyclic & Netlify.",
    tags: ["Vue.js", "Nuxt.js", "Nest.js", "PostgreSQL", "Tailwind", "Prisma"],
    imageUrl: verbaltrove,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Nest.js",
  "Vue.js",
  "Nuxt.js",
  "Git",
  "Tailwind",
  "Prisma",
  //   "MongoDB",
  //   "Redux",
  //   "GraphQL",
  //   "Apollo",
  //   "Express",
  "PostgreSQL",
  "Java",
  "Spring Boot",
  "Python",
  "Django",
  "Framer Motion",
] as const;
