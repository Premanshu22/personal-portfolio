import cams from "@/public/cams.png";
import GreenEdu from "@/public/GreenEdu.png";
import vcardportfolioImg from "@/public/vcardportfolio.png";

import { CgWorkAlt } from "react-icons/cg";
import { FaJava, FaPhp, FaAws, FaReact, FaRaspberryPi } from "react-icons/fa";
import {
  RiCss3Line,
  RiDatabase2Line,
  RiGatsbyLine,
  RiGitBranchLine,
  RiHtml5Line,
  RiJavascriptLine,
  RiNextjsLine,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssLine,
} from "react-icons/ri";
import {
  TbBrandFramerMotion,
  TbBrandGraphql,
  TbBrandMongodb,
  TbBrandNodejs,
  TbBrandPython,
  TbBrandReactNative,
  TbBrandRedux,
  TbBrandSocketIo,
  TbBrandTypescript,
} from "react-icons/tb";

import React from "react";

const experienceInYears = new Date().getFullYear() - 2024;

export const profile = {
  avatar: "/IMG20241223200741.jpg",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  name: "Premanshu Das Biswas",
  title: "aspiring Software Engineer",
  experience: `${experienceInYears} years`,
  likes: "building web and mobile apps",
  resumeLink: `https://drive.google.com/file/d/1iWi8lICL307muEl19yzl-TbjzLvaQhsJ/view?usp=drive_link`,
  linkedInLink: "https://www.linkedin.com/in/premanshu-das-biswas-38562a205/",
  githubLink: "https://github.com/Premanshu22",
} as const;

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.D.M.International",
    location: "Kolkata, West Bengal, IND",
    description:
      "Completed Higher Seconday Examinations, Participated in various Science and English Olympiads,served as Team Captain of School Cricket Team, demonstrating leadership and teamwork skills.",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "Techno Main Polytechnic Salt Lake",
    location: "Kolkata, West Bengal, IND",
    description:
      "Completed Diploma In Computer Science & Technology - CGPA : 8.8,Actively contributed to the Management Team in HLV 2k22 and the Management & Sponsorship Team of CSE United. Built strong fundamentals in programming and computer systems.",
      
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Techno Main Salt Lake",
    location: "Kolkata, West Bengal, IND",
    description:
      "Pursuing B.Tech in Computer Science & Engineering, Participated in Smart India Hackathon 2k24 and Smart India Hackathon 2k25",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2024",
  },
  {
    title: "Academy of Skill Development (ASD)",
    location: "Salt Lake, Kolkata, IND",
    description:
      "Completed a 12-week Full Stack MERN Internship. Built and deployed a full-stack E-Commerce application using React, Node.js, Express, and MongoDB. Gained hands-on experience in REST APIs, authentication, and backend business logic.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2025 - Sep 2025",
  },
  {
    title: "Deloitte (Forage)",
    location: "Remote",
    description:
      "Completed a Data Analytics Virtual Job Simulation. Worked on real-world tasks involving data analysis and forensic technology, gaining exposure to analytical problem-solving and professional data workflows.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2025",
  },
  {
    title: "JPMorgan Chase & Co. (Forage)",
    location: "Remote",
    description:
      "Completed a Software Engineering Job Simulation. Worked on backend-focused tasks including project setup, Kafka integration, H2 database integration, REST API development, and controller implementation.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2025",
  },
] as const;

export const projectsData = [
  {
    title: "GreenEdu",
    description:
      "An Gamified Enviornmental Learning Platform, A gamified mobile/web platform that helps learn in practical way.Tracking of eco-points, enabling school-level competitions.Rewards for sustainable practices through digital badges and recognition.",
    tags: ["React", "NodeJS", "Supabase"],
    imageUrl: GreenEdu,
    url: "",
  },
  {
    title: "Online University Admission Management System",
    description:
      "A seamless online university admission management platform. Cams allows users to take admission, submit forms, get info about notices, etc",
    tags: ["PHP", "CSS", "MySQL"],
    imageUrl: cams,
    url: "",
  },
  {
    title: "Vcard Portfolio",
    description: "An Vcard design portfolio template for developers",
    tags: ["HTML", "CSS", "JS"],
    imageUrl: vcardportfolioImg,
    url: "https://premanshu22.github.io/Portfolio_vcard/",
  },
] as const;

export const skillsData = [
    { name: "Java", icon: FaJava },
  { name: "HTML", icon: RiHtml5Line },
  { name: "CSS", icon: RiCss3Line },
  { name: "JavaScript", icon: RiJavascriptLine },
  { name: "TypeScript", icon: TbBrandTypescript },
  { name: "React", icon: RiReactjsLine },
  { name: "Next.js", icon: RiNextjsLine },
  { name: "NodeJS", icon: RiNodejsLine },
  { name: "PHP", icon: FaPhp },
  { name: "React Native", icon: TbBrandReactNative },
  { name: "Framer Motion", icon: TbBrandFramerMotion },
  { name: "Git", icon: RiGitBranchLine },
  { name: "Tailwind", icon: RiTailwindCssLine },
  { name: "MongoDB", icon: TbBrandMongodb },
  { name: "Redux", icon: TbBrandRedux },
  { name: "Express", icon: TbBrandNodejs },
  { name: "PostgreSQL", icon: RiDatabase2Line },
  { name: "Python", icon: TbBrandPython },
  { name: "AWS", icon: FaAws },
  { name: "...and more", icon: React.Fragment },
] as const;
