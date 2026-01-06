import type { IconType } from "react-icons";

/* ---------- UI / Navigation ---------- */
import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

/* ---------- Tech / Dev ---------- */
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiDocker,
  SiGit,
  SiStripe,
  SiTailwindcss,
  SiSupabase,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
} from "react-icons/si";

/* ---------- Data / Misc ---------- */
import { FaChartLine, FaDatabase, FaJava } from "react-icons/fa";

/* ---------- Social ---------- */
import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaThreads,
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaWhatsapp,
  FaReddit,
  FaTelegram,
} from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
  /* UI */
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  openLink: HiOutlineLink,
  email: HiEnvelope,
  calendar: HiCalendarDays,
  globe: HiOutlineGlobeAsiaAustralia,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,

  /* Navigation */
  home: PiHouseDuotone,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  gallery: PiImageDuotone,

  /* Languages */
  javascript: SiJavascript,
  typescript: SiTypescript,
  java: FaJava,
  python: SiPython,
  html: SiHtml5,
  css: SiCss3,
  sql: FaDatabase,

  /* Frameworks & Tools */
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  docker: SiDocker,
  git: SiGit,
  stripe: SiStripe,
  tailwind: SiTailwindcss,
  supabase: SiSupabase,

  /* Data & Analytics */
  pandas: SiPandas,
  numpy: SiNumpy,
  matplotlib: FaChartLine,
  scikitlearn: SiScikitlearn,

  /* Social */
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  threads: FaThreads,
  discord: FaDiscord,
  instagram: FaInstagram,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;