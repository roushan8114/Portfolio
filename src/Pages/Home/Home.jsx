import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import Particles from "../../Components/Particles";
import profilePic from "../../assets/profilepic.png";


import galleryPhoto1 from "../../assets/gallery/DSC_0368.JPG";
import galleryPhoto2 from "../../assets/gallery/DSC_0369.JPG";
import galleryPhoto3 from "../../assets/gallery/IMG-20240313-WA0503.jpg";
import galleryPhoto4 from "../../assets/gallery/IMG-20240313-WA0507.jpg";
import galleryPhoto5 from "../../assets/gallery/IMG-20260401-WA0430.jpg";
import galleryPhoto6 from "../../assets/gallery/IMG-20260401-WA0437.jpg";
// import galleryPhoto7 from "../../assets/gallery/IMG20250111095535.jpg";

import galleryPhoto9 from "../../assets/gallery/IMG_6886 - Copy.JPG";
import galleryPhoto10 from "../../assets/gallery/photo1.jpg";
import galleryPhoto11 from "../../assets/gallery/photo2.png";
import galleryPhoto12 from "../../assets/gallery/photo3.jpg";
import galleryPhoto13 from "../../assets/gallery/photo4.jpg";




const roles = [
  "Full Stack Developer",
  "Python & Django Developer",
  "React.js Developer",
  "REST API Developer",
  "Creative Problem Solver",
];

const skills = [
  {
    icon: "🐍",
    title: "Python",
    text: "Backend development, OOP, automation and problem solving.",
  },
  {
    icon: "⚡",
    title: "Django",
    text: "Powerful backend systems and database-driven applications.",
  },
  {
    icon: "⚛️",
    title: "React.js",
    text: "Modern interfaces, reusable components and smooth UX.",
  },
  {
    icon: "🔌",
    title: "REST API",
    text: "API design, authentication, integration and CRUD systems.",
  },
  {
    icon: "🗄️",
    title: "MySQL",
    text: "Relational databases, queries and efficient data management.",
  },
  {
    icon: "🚀",
    title: "Git & Deployment",
    text: "GitHub, Vercel, Postman and modern development workflows.",
  },
];

const technologies = [
  "Python",
  "Django",
  "Django REST Framework",
  "React.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "MySQL",
  "Git",
  "GitHub",
  "Postman",
  "JWT",
  "Vercel",
];

const projects = [
  {
    number: "01",
    title: "Corporate Management System",
    description:
      "A full-stack management platform designed for handling corporate operations, users and departmental workflows.",
    technologies: ["React", "Django", "MySQL", "REST API"],
    live: "#",
    github:
      "https://github.com/roushan8114/Corporate-Management-System",
  },

  {
    number: "02",
    title: "OLX Pro",
    description:
      "A retailer-focused management system for stock, invoices, sales tracking and daily business operations.",
    technologies: ["React", "Django", "Channels"],
    live: "#",
    github: "#",
  },

  {
    number: "03",
    title: "PALACE-A Hotel Booking",
    description:
      "A modern hotel booking interface with a clean responsive design and smooth user experience.",
    technologies: ["React", "JSON", "Tailwind", "Vercel"],
    live: "https://palace-hotel-liart.vercel.app/",
    github: "#",
  },

  {
    number: "04",
    title: "Personal Portfolio",
    description:
      "A modern developer portfolio created to showcase skills, projects, experience and professional identity.",
    technologies: ["React", "Vite", "Framer Motion"],
    live: "https://portfolio-two-steel-30.vercel.app/",
    github: "#",
  },
];

const experience = [
  {
    year: "2025 — Present",
    title: "Full Stack Developer",
    // company: "Kalash Enterprises",
    description:
      "Developing full-stack applications using React and Django, building REST APIs, integrating databases and creating responsive user experiences.",
  },

  {
    year: "2024 — 2025",
    title: "Backend & API Development",
    company: "Independent Projects",
    description:
      "Built Django applications, authentication systems, REST APIs, CRUD applications and database-driven platforms.",
  },

  // {
  //   year: "3 Years", // <-- yahan exact saal daal dena, jaise "2022 — 2025"
  //   title: "Head Student Coordinator",
  //   company: "Training & Placement Department, College",
  //   description:
  //     "Led student coordination for the Training & Placement Department for 3 years — managing placement drives, coordinating between students and recruiters, and organizing training sessions and campus events.",
  // },

  {
    year: "2022 — 2024",
    title: "Web Development Journey",
    company: "Learning & Project Work",
    description:
      "Started with HTML, CSS and JavaScript and progressed into React, Python, Django and complete full-stack development.",
  },
];


const achievements = [
  {
    year: "2nd Year",
    title: "Academic Award Winner",
    text: "Recognized for outstanding academic performance in 2nd year.",
  },
  {
    year: "3rd Year",
    title: "Academic Award Winner",
    text: "Recognized for outstanding academic performance in 3rd year.",
  },
  {
    year: "Final Year",
    title: "Academic Award Winner",
    text: "Recognized for outstanding academic performance in final year.",
  },
];


const galleryPhotos = [
  { src: galleryPhoto1, caption: "On Stage Moment 1" },
  { src: galleryPhoto2, caption: "On Stage Moment 2" },
  { src: galleryPhoto3, caption: "On Stage Moment 3" },
  { src: galleryPhoto4, caption: "On Stage Moment 4" },
  { src: galleryPhoto5, caption: "On Stage Moment 5" },
  { src: galleryPhoto6, caption: "On Stage Moment 6" },
  // { src: galleryPhoto7, caption: "Orientation Of Juniors" },

  { src: galleryPhoto9, caption: "On Stage Moment 9" },
  { src: galleryPhoto10, caption: "Anchoring — Vihaan 2K26" },
  { src: galleryPhoto11, caption: "On Stage Moment 11" },
  { src: galleryPhoto12, caption: "On Stage Moment 12" },
  { src: galleryPhoto13, caption: " Chairman of Radharaman Group" },
];

// Rows duplicate kar dete hai taaki scroll seamless/infinite lage
const galleryRowOne = [...galleryPhotos, ...galleryPhotos];
const galleryRowTwo = [...galleryPhotos, ...galleryPhotos].reverse();



function useTypewriter(items) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = items[index];

    let speed = deleting ? 40 : 70;

    if (!deleting && text.length === current.length) {
      speed = 1300;
    }

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.substring(0, text.length + 1));

        if (text.length + 1 === current.length) {
          setDeleting(true);
        }
      } else {
        setText(current.substring(0, text.length - 1));

        if (text.length === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % items.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, index, deleting, items]);

  return text;
}



function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 70,
        filter: "blur(12px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}



function TiltCard({ children, className = "", onMouseEnter, onMouseLeave }) {
  const ref = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 220,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 220,
    damping: 20,
  });

  const rotateX = useTransform(
    springY,
    [-0.5, 0.5],
    [7, -7]
  );

  const rotateY = useTransform(
    springX,
    [-0.5, 0.5],
    [-7, 7]
  );

  const handleMouseMove = (event) => {
    const rect = ref.current?.getBoundingClientRect();

    if (!rect) return;

    mouseX.set(
      (event.clientX - rect.left) / rect.width - 0.5
    );

    mouseY.set(
      (event.clientY - rect.top) / rect.height - 0.5
    );
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    onMouseLeave?.();
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        y: -8,
      }}
    >
      {children}
    </motion.div>
  );
}



function Counter({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;

      if (current >= value) {
        current = value;
        clearInterval(interval);
      }

      setCount(current);
    }, 70);

    return () => clearInterval(interval);
  }, [value]);

  return count;
}

function GalleryRow({ items, duration, reverse = false }) {
  return (
    <div className="gallery-row-wrapper">
      <div
        className={`gallery-row ${reverse ? "reverse" : ""}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {items.map((photo, index) => (
          <motion.div
            className="gallery-card"
            key={`${photo.src}-${index}`}
            whileHover={{
              scale: 1.05,
              y: -6,
            }}
            transition={{ duration: 0.35 }}
          >
            <img src={photo.src} alt={photo.caption || "Photo"} />
            {photo.caption && (
              <div className="gallery-caption">{photo.caption}</div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}



function Home() {
  const role = useTypewriter(roles);

  const [menuOpen, setMenuOpen] = useState(false);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);




  const styles = useMemo(
    () => `
    
    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      background: #030305;
      color: white;
      font-family:
        Inter,
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    button {
      font-family: inherit;
    }

    ::selection {
      background: #8b5cf6;
      color: white;
    }


    .portfolio {
      min-height: 100vh;
      overflow: hidden;

      background:
        radial-gradient(
          circle at 10% 10%,
          rgba(37, 99, 235, 0.12),
          transparent 25%
        ),

        radial-gradient(
          circle at 90% 20%,
          rgba(139, 92, 246, 0.15),
          transparent 30%
        ),

        #030305;
    }


    

    .noise {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 200;

      opacity: 0.025;

      background-image:
        url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.5'/%3E%3C/svg%3E");
    }


  

    .mouse-glow {
      position: fixed;

      width: 420px;
      height: 420px;

      border-radius: 50%;

      pointer-events: none;

      z-index: 1;

      transform: translate(-50%, -50%);

      background:
        radial-gradient(
          circle,
          rgba(124, 58, 237, 0.13),
          transparent 70%
        );

      filter: blur(8px);
    }



    .navbar {
      position: fixed;

      top: 0;
      left: 0;
      right: 0;

      z-index: 100;

      padding: 17px 5%;

      background: rgba(3, 3, 5, 0.62);

      backdrop-filter: blur(22px);

      border-bottom:
        1px solid
        rgba(255, 255, 255, 0.06);
    }

    .navbar-inner {
      max-width: 1250px;

      margin: auto;

      display: flex;

      align-items: center;

      justify-content: space-between;
    }

    .logo {
      border: none;
      background: none;

      color: white;

      font-size: 22px;

      font-weight: 950;

      letter-spacing: -1.5px;

      cursor: pointer;
    }

    .logo span {
      color: #8b5cf6;
    }

    .nav-links {
      display: flex;

      align-items: center;

      gap: 28px;
    }

    .nav-links button {
      border: none;

      background: none;

      color: #85858f;

      cursor: pointer;

      font-size: 13px;

      transition: 0.3s;
    }

    .nav-links button:hover {
      color: white;
    }

    .resume-btn {
      padding: 9px 16px;

      border:
        1px solid
        rgba(139, 92, 246, 0.5);

      border-radius: 9px;

      color: white !important;
    }

    .resume-btn:hover {
      background:
        rgba(139, 92, 246, 0.12);
    }

    .mobile-menu {
      display: none;

      border: none;

      background: none;

      color: white;

      font-size: 25px;

      cursor: pointer;
    }



    .hero {
      min-height: 100vh;

      position: relative;

      display: flex;

      align-items: center;

      padding:
        130px
        5%
        80px;
    }

    .particle-background {
      position: absolute;

      inset: 0;

      opacity: 0.5;
    }

    .hero-orb {
      position: absolute;

      border-radius: 50%;

      pointer-events: none;
    }

    .orb-one {
      width: 300px;
      height: 300px;

      right: 5%;
      top: 15%;

      background:
        radial-gradient(
          circle,
          rgba(124, 58, 237, 0.25),
          transparent 70%
        );
    }

    .orb-two {
      width: 250px;
      height: 250px;

      left: 3%;
      bottom: 8%;

      background:
        radial-gradient(
          circle,
          rgba(37, 99, 235, 0.18),
          transparent 70%
        );
    }

    .hero-container {
      width: 100%;

      max-width: 1250px;

      margin: auto;

      position: relative;

      z-index: 3;

      display: grid;

      grid-template-columns:
        1.2fr
        0.8fr;

      gap: 60px;

      align-items: center;
    }



    .availability {
      display: inline-flex;

      align-items: center;

      gap: 9px;

      padding: 8px 13px;

      border:
        1px solid
        rgba(139, 92, 246, 0.3);

      background:
        rgba(139, 92, 246, 0.07);

      border-radius: 50px;

      color: #c4b5fd;

      font-size: 11px;

      letter-spacing: 1px;

      text-transform: uppercase;
    }

    .availability-dot {
      width: 7px;
      height: 7px;

      border-radius: 50%;

      background: #22c55e;

      box-shadow:
        0 0 15px
        #22c55e;

      animation:
        pulseDot
        1.5s
        infinite;
    }

    @keyframes pulseDot {
      50% {
        transform: scale(1.7);
        opacity: 0.55;
      }
    }

    .hero-title {
      font-size:
        clamp(
          55px,
          8vw,
          105px
        );

      line-height: 0.88;

      letter-spacing: -6px;

      margin:
        27px
        0
        22px;

      font-weight: 950;
    }

    .gradient-text {
      background:
        linear-gradient(
          110deg,
          #ffffff 5%,
          #c4b5fd 45%,
          #60a5fa 75%,
          #ffffff
        );

      background-size: 220% auto;

      -webkit-background-clip: text;

      color: transparent;

      animation:
        gradientMove
        5s
        linear
        infinite;
    }

    @keyframes gradientMove {
      to {
        background-position:
          220% center;
      }
    }

    .role-text {
      min-height: 40px;

      color: #a78bfa;

      font-size:
        clamp(
          19px,
          2.4vw,
          29px
        );

      font-weight: 700;
    }

    .role-slash {
      color: #555560;

      font-style: normal;
    }

    .cursor {
      display: inline-block;

      width: 2px;

      height: 1em;

      background: #a78bfa;

      margin-left: 5px;

      vertical-align: -2px;

      animation:
        blink
        0.7s
        infinite;
    }

    @keyframes blink {
      50% {
        opacity: 0;
      }
    }

    .hero-description {
      max-width: 670px;

      color: #90909b;

      line-height: 1.85;

      font-size: 16px;

      margin:
        22px
        0
        30px;
    }

    .hero-description strong {
      color: #d4d4d8;
    }



    .button-row {
      display: flex;

      gap: 12px;

      flex-wrap: wrap;
    }

    .button {
      position: relative;

      overflow: hidden;

      display: inline-flex;

      align-items: center;

      justify-content: center;

      padding:
        14px
        21px;

      border-radius: 11px;

      font-size: 13px;

      font-weight: 800;

      cursor: pointer;

      transition: 0.3s;
    }

    .button::after {
      content: "";

      position: absolute;

      inset: 0;

      background:
        linear-gradient(
          110deg,
          transparent,
          rgba(255,255,255,0.22),
          transparent
        );

      transform:
        translateX(-120%);

      transition: 0.6s;
    }

    .button:hover::after {
      transform:
        translateX(120%);
    }

    .primary-button {
      color: white;

      border:
        1px solid
        #8b5cf6;

      background:
        linear-gradient(
          135deg,
          #7c3aed,
          #4f46e5
        );

      box-shadow:
        0 12px 35px
        rgba(124,58,237,0.25);
    }

    .primary-button:hover {
      box-shadow:
        0 18px 50px
        rgba(124,58,237,0.42);
    }

    .secondary-button {
      color: #ddd;

      border:
        1px solid
        rgba(255,255,255,0.11);

      background:
        rgba(255,255,255,0.035);
    }

    .secondary-button:hover {
      border-color: #8b5cf6;

      background:
        rgba(139,92,246,0.08);
    }



    .profile-container {
      position: relative;

      width:
        min(
          370px,
          78vw
        );

      aspect-ratio: 0.82;

      margin: auto;
    }

    .profile-ring {
      position: absolute;

      inset: -18px;

      border:
        1px solid
        rgba(139,92,246,0.3);

      border-radius: 28px;

      animation:
        spinRing
        15s
        linear
        infinite;
    }

    .profile-ring-two {
      position: absolute;

      inset: -30px;

      border:
        1px solid
        rgba(59,130,246,0.14);

      border-radius: 40px;

      animation:
        spinRing
        22s
        linear
        infinite
        reverse;
    }

    @keyframes spinRing {
      to {
        transform: rotate(360deg);
      }
    }

    .profile-box {
      position: relative;

      height: 100%;

      overflow: hidden;

      border:
        1px solid
        rgba(255,255,255,0.13);

      border-radius: 26px;

      background: #0b0b10;

      box-shadow:
        0 30px 100px
        rgba(0,0,0,0.55);
    }

    .profile-box img {
      width: 100%;
      height: 100%;

      object-fit: cover;

      display: block;

      filter: saturate(0.9);
    }

    .profile-box::after {
      content: "";

      position: absolute;

      inset: 0;

      background:
        linear-gradient(
          to top,
          rgba(3,3,5,0.85),
          transparent 50%
        );
    }

    .profile-info {
      position: absolute;

      left: 22px;
      right: 22px;
      bottom: 20px;

      z-index: 2;

      display: flex;

      justify-content:
        space-between;

      align-items:
        flex-end;
    }

    .profile-info strong {
      font-size: 15px;
    }

    .profile-info small {
      color: #a78bfa;

      font-size: 10px;

      letter-spacing: 1.5px;
    }



    .stats {
      max-width: 1250px;

      margin: auto;

      padding:
        0
        5%
        100px;

      display: grid;

      grid-template-columns:
        repeat(3,1fr);
    }

    .stat {
      padding:
        27px
        30px;

      border-left:
        1px solid
        rgba(255,255,255,0.07);
    }

    .stat:first-child {
      border-left: none;
    }

    .stat-number {
      font-size: 40px;

      font-weight: 950;

      letter-spacing: -2px;
    }

    .stat-label {
      color: #65656f;

      font-size: 12px;
    }


    .section {
      position: relative;

      padding:
        115px
        5%;
    }

    .container {
      max-width: 1250px;

      margin: auto;
    }

    .section-tag {
      color: #8b5cf6;

      font-size: 11px;

      letter-spacing: 2px;

      font-weight: 900;

      margin-bottom: 15px;
    }

    .section-title {
      font-size:
        clamp(
          42px,
          5.5vw,
          72px
        );

      line-height: 0.95;

      letter-spacing: -4px;

      margin:
        0
        0
        22px;

      font-weight: 950;
    }

    .section-title span {
      background:
        linear-gradient(
          110deg,
          #ffffff 5%,
          #c4b5fd 45%,
          #60a5fa 75%,
          #ffffff
        );

      background-size: 220% auto;

      -webkit-background-clip: text;

      color: transparent;

      animation:
        gradientMove
        5s
        linear
        infinite;
    }

    .section-description {
      max-width: 720px;

      color: #85858f;

      line-height: 1.85;

      font-size: 15px;
    }


   

    .about-grid {
      margin-top: 55px;

      display: grid;

      grid-template-columns:
        1fr
        1fr;

      gap: 18px;
    }

    .glass-card {
      padding: 34px;

      border:
        1px solid
        rgba(255,255,255,0.08);

      border-radius: 22px;

      background:
        linear-gradient(
          145deg,
          rgba(255,255,255,0.05),
          rgba(255,255,255,0.015)
        );

      position: relative;

      overflow: hidden;
    }

    .glass-card::before {
      content: "";

      position: absolute;

      width: 150px;
      height: 150px;

      right: -70px;
      top: -70px;

      background:
        radial-gradient(
          circle,
          rgba(139,92,246,0.2),
          transparent 70%
        );
    }

    .glass-card h3 {
      font-size: 20px;

      margin:
        0
        0
        14px;
    }

    .glass-card p {
      color: #85858f;

      line-height: 1.85;

      font-size: 14px;
    }

    .quote {
      margin-top: 22px;

      padding:
        16px
        18px;

      border-left:
        3px solid
        #8b5cf6;

      background:
        rgba(139,92,246,0.06);

      color: #c4b5fd;

      line-height: 1.7;

      font-size: 13px;
    }



    .skills-grid {
      margin-top: 55px;

      display: grid;

      grid-template-columns:
        repeat(3,1fr);

      gap: 16px;
    }

    .skill-card {
      padding: 28px;

      min-height: 185px;

      border:
        1px solid
        rgba(255,255,255,0.08);

      border-radius: 18px;

      background:
        rgba(255,255,255,0.025);

      transition: 0.35s;
    }

    .skill-card:hover {
      border-color:
        rgba(139,92,246,0.5);

      background:
        rgba(139,92,246,0.055);

      box-shadow:
        0 20px 60px
        rgba(0,0,0,0.25);
    }

    .skill-icon {
      font-size: 28px;

      margin-bottom: 17px;
    }

    .skill-card h3 {
      margin:
        0
        0
        8px;

      font-size: 17px;
    }

    .skill-card p {
      margin: 0;

      color: #72727c;

      font-size: 12px;

      line-height: 1.75;
    }



    .technology-wrapper {
      margin-top: 40px;

      overflow: hidden;

      mask-image:
        linear-gradient(
          90deg,
          transparent,
          black 8%,
          black 92%,
          transparent
        );
    }

    .technology-track {
      display: flex;

      width: max-content;

      gap: 10px;

      animation:
        marquee
        25s
        linear
        infinite;
    }

    .technology-track:hover {
      animation-play-state: paused;
    }

    @keyframes marquee {
      to {
        transform:
          translateX(-50%);
      }
    }

    .technology {
      padding:
        9px
        13px;

      border:
        1px solid
        rgba(255,255,255,0.07);

      border-radius: 8px;

      color: #85858f;

      font-size: 11px;

      background:
        rgba(255,255,255,0.025);
    }


 

    .timeline {
      margin-top: 60px;

      border-left:
        1px solid
        rgba(139,92,246,0.35);
    }

    .experience-item {
      position: relative;

      padding:
        0
        0
        58px
        42px;
    }

    .experience-item:last-child {
      padding-bottom: 0;
    }

    .timeline-dot {
      position: absolute;

      left: -6px;

      top: 5px;

      width: 11px;
      height: 11px;

      border-radius: 50%;

      background: #8b5cf6;

      box-shadow:
        0 0 20px
        rgba(139,92,246,0.9);
    }

    .experience-year {
      color: #8b5cf6;

      font-size: 11px;

      font-weight: 900;

      letter-spacing: 1px;
    }

    .experience-item h3 {
      font-size: 25px;

      margin:
        9px
        0
        5px;
    }

    .experience-company {
      color: #686873;

      font-size: 13px;

      margin-bottom: 14px;
    }

    .experience-item p {
      max-width: 760px;

      color: #81818b;

      font-size: 14px;

      line-height: 1.8;
    }



    .projects-grid {
      margin-top: 55px;

      display: grid;

      grid-template-columns:
        repeat(2,1fr);

      gap: 18px;
    }

    .project-card {
      min-height: 335px;

      padding: 32px;

      border:
        1px solid
        rgba(255,255,255,0.08);

      border-radius: 22px;

      position: relative;

      overflow: hidden;

      background:
        radial-gradient(
          circle at 100% 0,
          rgba(124,58,237,0.13),
          transparent 34%
        ),
        rgba(255,255,255,0.025);

      transition:
        border
        0.3s,
        box-shadow
        0.3s;
    }

    .project-card:hover {
      border-color:
        rgba(139,92,246,0.45);

      box-shadow:
        0 30px 90px
        rgba(0,0,0,0.35);
    }

    .project-card::after {
      content: "";

      position: absolute;

      width: 260px;
      height: 260px;

      right: -130px;
      bottom: -150px;

      border-radius: 50%;

      background:
        radial-gradient(
          circle,
          rgba(59,130,246,0.12),
          transparent 70%
        );

      transition: 0.5s;
    }

    .project-card:hover::after {
      transform: scale(1.5);
    }

    .project-number {
      color: #8b5cf6;

      font-size: 11px;

      font-weight: 900;

      letter-spacing: 1px;
    }

    .project-card h3 {
      font-size: 26px;

      margin:
        28px
        0
        12px;

      letter-spacing: -1px;
    }

    .project-card p {
      color: #777782;

      line-height: 1.8;

      font-size: 13px;
    }

    .project-tags {
      display: flex;

      flex-wrap: wrap;

      gap: 7px;

      margin-top: 22px;
    }

    .project-tag {
      padding:
        6px
        9px;

      border-radius: 6px;

      background:
        rgba(139,92,246,0.08);

      color: #a78bfa;

      font-size: 10px;
    }

    .project-links {
      display: flex;

      gap: 9px;

      margin-top: 25px;
    }

    .project-link {
      padding:
        9px
        13px;

      border:
        1px solid
        rgba(255,255,255,0.09);

      border-radius: 8px;

      font-size: 11px;

      font-weight: 800;

      transition: 0.3s;
    }

    .project-link:hover {
      border-color: #8b5cf6;

      background:
        rgba(139,92,246,0.1);
    }


   

    .achievements-grid {
      margin-top: 55px;

      display: grid;

      grid-template-columns:
        repeat(3,1fr);

      gap: 18px;
    }

    .achievement-card {
      padding: 32px;

      border:
        1px solid
        rgba(255,255,255,0.08);

      border-radius: 20px;

      background:
        radial-gradient(
          circle at 0 0,
          rgba(139,92,246,0.15),
          transparent 55%
        ),
        rgba(255,255,255,0.025);

      position: relative;

      overflow: hidden;
    }

    .achievement-icon {
      font-size: 30px;

      margin-bottom: 16px;
    }

    .achievement-year {
      color: #8b5cf6;

      font-size: 11px;

      font-weight: 900;

      letter-spacing: 1.5px;

      text-transform: uppercase;
    }

    .achievement-card h3 {
      font-size: 19px;

      margin:
        8px
        0
        10px;
    }

    .achievement-card p {
      color: #85858f;

      font-size: 13px;

      line-height: 1.75;

      margin: 0;
    }




    .gallery-row-wrapper {
      overflow: hidden;

      mask-image:
        linear-gradient(
          90deg,
          transparent,
          black 6%,
          black 94%,
          transparent
        );

      margin-bottom: 18px;
    }

    .gallery-row {
      display: flex;

      width: max-content;

      gap: 18px;

      animation:
        galleryScroll
        linear
        infinite;
    }

    .gallery-row.reverse {
      animation-direction: reverse;
    }

    .gallery-row-wrapper:hover .gallery-row {
      animation-play-state: paused;
    }

    @keyframes galleryScroll {
      to {
        transform: translateX(-50%);
      }
    }

    .gallery-card {
      position: relative;

      flex: 0 0 auto;

      width: 260px;
      height: 330px;

      border-radius: 20px;

      overflow: hidden;

      border:
        1px solid
        rgba(255,255,255,0.08);

      background: #0b0b10;

      box-shadow:
        0 20px 60px
        rgba(0,0,0,0.35);
    }

    .gallery-card img {
      width: 100%;
      height: 100%;

      object-fit: cover;

      display: block;

      filter: saturate(0.92);
    }

    .gallery-card::after {
      content: "";

      position: absolute;

      inset: 0;

      background:
        linear-gradient(
          to top,
          rgba(3,3,5,0.85),
          transparent 45%
        );
    }

    .gallery-caption {
      position: absolute;

      left: 16px;
      right: 16px;
      bottom: 14px;

      z-index: 2;

      color: #e5e5ea;

      font-size: 12px;

      font-weight: 700;

      letter-spacing: 0.3px;
    }




    .contact-box {
      margin-top: 55px;

      padding:
        75px
        30px;

      text-align: center;

      border:
        1px solid
        rgba(255,255,255,0.08);

      border-radius: 30px;

      background:
        radial-gradient(
          circle at 50% 0,
          rgba(124,58,237,0.2),
          transparent 48%
        ),
        rgba(255,255,255,0.025);

      position: relative;

      overflow: hidden;
    }

    .contact-ring {
      position: absolute;

      width: 330px;
      height: 330px;

      left: 50%;
      top: 50%;

      transform:
        translate(-50%,-50%);

      border:
        1px solid
        rgba(139,92,246,0.12);

      border-radius: 50%;

      animation:
        contactPulse
        5s
        infinite;
    }

    .contact-ring-two {
      width: 500px;
      height: 500px;

      animation-delay:
        1.5s;
    }

    @keyframes contactPulse {
      50% {
        transform:
          translate(-50%,-50%)
          scale(1.12);

        opacity: 0.2;
      }
    }

    .contact-content {
      position: relative;

      z-index: 2;
    }

    .contact-title {
      font-size:
        clamp(
          42px,
          6vw,
          75px
        );

      line-height: 0.95;

      letter-spacing: -4px;

      margin:
        8px
        0
        20px;
    }

    .contact-description {
      max-width: 610px;

      margin: auto;

      color: #7e7e89;

      line-height: 1.8;

      font-size: 14px;
    }

    .contact-buttons {
      margin-top: 28px;

      display: flex;

      justify-content: center;

      gap: 10px;

      flex-wrap: wrap;
    }




    .footer {
      padding:
        35px
        5%;

      text-align: center;

      border-top:
        1px solid
        rgba(255,255,255,0.06);

      color: #4e4e58;

      font-size: 11px;
    }



    @media (max-width: 900px) {

      .hero-container {
        grid-template-columns: 1fr;

        text-align: center;
      }

      .hero-description {
        margin-left: auto;
        margin-right: auto;
      }

      .button-row {
        justify-content: center;
      }

      .profile-container {
        order: -1;

        width: 280px;
      }

      .skills-grid {
        grid-template-columns:
          repeat(2,1fr);
      }

      .about-grid {
        grid-template-columns: 1fr;
      }

      .achievements-grid {
        grid-template-columns: 1fr;
      }
    }



    @media (max-width: 700px) {

      .nav-links {
        display: none;

        position: absolute;

        top: 70px;

        left: 5%;
        right: 5%;

        padding: 14px;

        flex-direction: column;

        align-items: stretch;

        gap: 3px;

        background:
          rgba(8,8,11,0.97);

        border:
          1px solid
          rgba(255,255,255,0.08);

        border-radius: 15px;
      }

      .nav-links.open {
        display: flex;
      }

      .nav-links button {
        padding: 12px;

        text-align: left;
      }

      .mobile-menu {
        display: block;
      }

      .hero {
        padding:
          120px
          5%
          70px;
      }

      .hero-title {
        font-size:
          clamp(
            50px,
            15vw,
            76px
          );

        letter-spacing: -4px;
      }

      .stats {
        grid-template-columns: 1fr;

        padding-bottom: 55px;
      }

      .stat,
      .stat:first-child {
        border-left: none;

        border-top:
          1px solid
          rgba(255,255,255,0.07);
      }

      .stat:first-child {
        border-top: none;
      }

      .section {
        padding:
          85px
          5%;
      }

      .section-title {
        font-size: 46px;
      }

      .skills-grid,
      .projects-grid {
        grid-template-columns: 1fr;
      }

      .project-card {
        min-height: 0;
      }

      .gallery-card {
        width: 200px;
        height: 260px;
      }

      .contact-box {
        padding:
          55px
          18px;
      }
    }


    /* =========================================================
       MANAGEMENT & LEADERSHIP
    ========================================================= */

    .management-card {
      margin-top: 45px;
      padding: 42px;
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(139, 92, 246, 0.25);
      border-radius: 28px;
      background:
        radial-gradient(circle at 90% 10%, rgba(139, 92, 246, 0.14), transparent 35%),
        rgba(255, 255, 255, 0.025);
      box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);
    }

    .management-top {
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: space-between;
      
    }

    .management-badge {
      display: inline-block;
      padding: 8px 14px;
      border-radius: 50px;
      border: 1px solid rgba(139, 92, 246, 0.3);
      background: rgba(139, 92, 246, 0.08);
      color: #c4b5fd;
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 1.5px;
    }

    .management-title {
      margin: 18px 0 6px;
      font-size: clamp(32px, 5vw, 58px);
      line-height: 1;
      letter-spacing: -3px;
    }

    .management-department {
      color: #a78bfa;
      font-size: 16px;
      font-weight: 700;
    }

    .management-description {
      max-width: 720px;
      margin-top: 20px;
      color: #85858f;
      line-height: 1.85;
      font-size: 14px;
    }

    .management-years {
      min-width: 190px;
      text-align: center;
    }

    .management-years-number {
      font-size: 105px;
      line-height: .8;
      font-weight: 950;
      letter-spacing: -8px;
      background: linear-gradient(135deg, #ffffff, #8b5cf6);
      -webkit-background-clip: text;
      color: transparent;
    }

    .management-years-text {
      margin-top: 22px;
      color: #777783;
      font-size: 10px;
      font-weight: 900;
      letter-spacing: 3px;
      line-height: 1.6;
    }

    .management-points {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
      margin-top: 35px;
    }

    .management-point {
      display: flex;
      gap: 14px;
      padding: 18px;
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.06);
      background: rgba(255, 255, 255, 0.025);
      transition: .35s;
    }

    .management-point:hover {
      transform: translateY(-6px);
      border-color: rgba(139, 92, 246, .4);
      background: rgba(139, 92, 246, .06);
    }

    .management-point-number {
      color: #8b5cf6;
      font-size: 11px;
      font-weight: 900;
    }

    .management-point strong {
      display: block;
      margin-bottom: 5px;
      font-size: 13px;
    }

    .management-point small {
      color: #777783;
      font-size: 11px;
      line-height: 1.7;
    }

    .management-recognition {
      position: relative;
      z-index: 2;
      margin-top: 30px;
      padding: 22px 25px;
      display: flex;
      align-items: center;
      gap: 18px;
      border: 1px solid rgba(139, 92, 246, .2);
      border-radius: 18px;
      background: rgba(139, 92, 246, .05);
    }

    .management-recognition-icon {
      width: 50px;
      height: 50px;
      flex-shrink: 0;
      display: grid;
      place-items: center;
      border-radius: 14px;
      background: rgba(139, 92, 246, .12);
      font-size: 23px;
    }

    .management-recognition-label {
      color: #8b5cf6;
      font-size: 9px;
      font-weight: 900;
      letter-spacing: 2px;
    }

    .management-recognition h4 {
      margin: 5px 0;
      font-size: 17px;
    }

    .management-recognition p {
      margin: 0;
      color: #777783;
      font-size: 12px;
      line-height: 1.7;
    }

    .management-gallery {
      margin-top: 45px;
      overflow: hidden;
      position: relative;
    }

    .management-gallery-track {
      display: flex;
      width: max-content;
      gap: 18px;
      animation: managementScroll 40s linear infinite;
    }

    .management-gallery-track:hover {
      animation-play-state: paused;
    }

    .management-photo {
      width: 270px;
      height: 340px;
      flex-shrink: 0;
      position: relative;
      overflow: hidden;
      border-radius: 20px;
      border: 1px solid rgba(255,255,255,.08);
      background: #08080b;
      cursor: pointer;
    }

    .management-photo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: .7s;
    }

    .management-photo:hover img {
      transform: scale(1.1);
      filter: brightness(.65);
    }

    .management-photo-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: flex-end;
      padding: 20px;
      background: linear-gradient(transparent 45%, rgba(0,0,0,.92));
    }

    .management-photo-overlay span {
      color: #a78bfa;
      font-size: 10px;
      font-weight: 900;
    }

    .management-photo-overlay p {
      margin: 5px 0 0;
      color: white;
      font-size: 13px;
      font-weight: 700;
    }

    @keyframes managementScroll {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }

    @media (max-width: 800px) {
      .management-card { padding: 30px 22px; }
      .management-top { flex-direction: column; align-items: flex-start; }
      .management-years { align-self: center; }
      .management-points { grid-template-columns: 1fr; }
      .management-photo { width: 230px; height: 300px; }
    }

    `,
    []
  );




  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setMenuOpen(false);
  };


  return (
    <>
      <style>{styles}</style>

      <div className="portfolio">



        <div className="noise" />



        <motion.div
          className="mouse-glow"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 18,
          }}
        />



        <header className="navbar">

          <div className="navbar-inner">

            <button
              className="logo"
              onClick={() =>
                scrollToSection("home")
              }
            >
              <span>&lt;</span>
              RK
              <span>/&gt;</span>
            </button>


            <button
              className="mobile-menu"
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
            >
              ☰
            </button>


            <nav
              className={`nav-links ${menuOpen ? "open" : ""
                }`}
            >

              {[
                "home",
                "about",
                "skills",
                "experience",
                "management",
                "projects",
                "achievements",
                "gallery",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(item)
                  }
                >
                  {item
                    .charAt(0)
                    .toUpperCase() +
                    item.slice(1)}
                </button>
              ))}


              <a
                href="https://drive.google.com/file/d/1U2DW5YY9ZGBqn2ZuS0IyyjVxeJuISWV_/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="resume-btn"
              >
                Resume ↗
              </a>

            </nav>

          </div>

        </header>


        <section
          id="home"
          className="hero"
        >

          <div className="particle-background">

            <Particles
              particleColors={[
                "#ffffff",
                "#8b5cf6",
                "#3b82f6",
              ]}
              particleCount={180}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover
              alphaParticles={false}
            />

          </div>



          <motion.div
            className="hero-orb orb-one"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />


          <motion.div
            className="hero-orb orb-two"
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />


          <div className="hero-container">


            <Reveal>

              <div>

                <motion.div
                  className="availability"
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                >

                  <span className="availability-dot" />

                  Available for opportunities

                </motion.div>


                <motion.h1
                  className="hero-title"
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                  }}
                >

                  Hi, I'm

                  <br />

                  <span className="gradient-text">
                    Roushan Kumar
                  </span>

                </motion.h1>


                <motion.div
                  className="role-text"
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.4,
                    duration: 0.8,
                  }}
                >

                  <i className="role-slash">
                    //{" "}
                  </i>

                  {role}

                  <span className="cursor" />

                </motion.div>


                <motion.p
                  className="hero-description"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.6,
                    duration: 0.8,
                  }}
                >

                  I build{" "}

                  <strong>
                    modern, responsive and scalable web applications
                  </strong>{" "}

                  using Python, Django, React.js, REST APIs
                  and MySQL — turning ideas into real digital
                  products.

                </motion.p>


                <motion.div
                  className="button-row"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.8,
                  }}
                >

                  <button
                    className="button primary-button"
                    onClick={() =>
                      scrollToSection(
                        "projects"
                      )
                    }
                  >
                    Explore My Work →
                  </button>


                  <button
                    className="button secondary-button"
                    onClick={() =>
                      scrollToSection(
                        "contact"
                      )
                    }
                  >
                    Let's Connect
                  </button>

                </motion.div>

              </div>

            </Reveal>



            <Reveal delay={0.2}>

              <motion.div
                className="profile-container"

                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 0.5, 0],
                }}

                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >

                <div className="profile-ring" />

                <div className="profile-ring-two" />


                <motion.div
                  className="profile-box"
                  whileHover={{
                    scale: 1.025,
                  }}
                >

                  <img
                    src={profilePic}
                    alt="Roushan Kumar"
                  />


                  <div className="profile-info">

                    <strong>
                      Roushan Kumar
                    </strong>

                    <small>
                      FULL STACK DEVELOPER
                    </small>

                  </div>

                </motion.div>

              </motion.div>

            </Reveal>

          </div>

        </section>



        <div className="stats">

          <div className="stat">

            <div className="stat-number">
              <Counter value={1} />+
            </div>

            <div className="stat-label">
              Year+ Development Experience
            </div>

          </div>


          <div className="stat">

            <div className="stat-number">
              <Counter value={14} />+
            </div>

            <div className="stat-label">
              Technologies & Tools
            </div>

          </div>


          <div className="stat">

            <div className="stat-number">
              <Counter value={10} />+
            </div>

            <div className="stat-label">
              Featured Projects
            </div>

          </div>

        </div>



        <section
          id="about"
          className="section"
        >

          <div className="container">

            <Reveal>

              <div className="section-tag">
                01 — ABOUT ME
              </div>

              <h2 className="section-title">
                The person behind
                <br />
                the code.
              </h2>

              <p className="section-description">
                I'm a Full Stack Developer who enjoys
                taking an idea from a blank screen to a
                complete, usable product — frontend,
                backend, database and deployment.
              </p>

            </Reveal>


            <div className="about-grid">

              <Reveal delay={0.1}>

                <TiltCard className="glass-card">

                  <h3>
                    Who I Am
                  </h3>

                  <p>
                    I work primarily with Python,
                    Django, React.js and MySQL.
                    I enjoy solving practical problems,
                    learning new technologies and
                    creating applications with clean
                    architecture.
                  </p>

                  <div className="quote">
                    "I don't just want to write code.
                    I want to build something useful."
                  </div>

                </TiltCard>

              </Reveal>


              <Reveal delay={0.2}>

                <TiltCard className="glass-card">

                  <h3>
                    What I Build
                  </h3>

                  <p>
                    Responsive interfaces, backend
                    systems, REST APIs, authentication
                    flows, CRUD applications,
                    database-driven platforms and
                    complete full-stack solutions.
                  </p>

                  <div className="quote">
                    React + Django + REST API +
                    Database + Deployment
                  </div>

                </TiltCard>

              </Reveal>

            </div>

          </div>

        </section>



        <section
          id="skills"
          className="section"
        >

          <div className="container">

            <Reveal>

              <div className="section-tag">
                02 — SKILLS
              </div>

              <h2 className="section-title">
                My technical
                <br />
                toolkit.
              </h2>

              <p className="section-description">
                The technologies I use to design,
                develop and ship modern web applications.
              </p>

            </Reveal>


            <div className="skills-grid">

              {skills.map(
                (skill, index) => (

                  <Reveal
                    key={skill.title}
                    delay={
                      index * 0.08
                    }
                  >

                    <TiltCard className="skill-card">

                      <motion.div
                        className="skill-icon"

                        animate={{
                          y: [
                            0,
                            -6,
                            0,
                          ],

                          rotate: [
                            0,
                            4,
                            0,
                          ],
                        }}

                        transition={{
                          duration:
                            3 +
                            index *
                            0.2,

                          repeat:
                            Infinity,
                        }}
                      >
                        {skill.icon}
                      </motion.div>


                      <h3>
                        {skill.title}
                      </h3>


                      <p>
                        {skill.text}
                      </p>

                    </TiltCard>

                  </Reveal>

                )
              )}

            </div>



            <Reveal delay={0.2}>

              <div className="technology-wrapper">

                <div className="technology-track">

                  {[
                    ...technologies,
                    ...technologies,
                  ].map(
                    (technology, index) => (

                      <span
                        className="technology"
                        key={
                          `${technology}-${index}`
                        }
                      >
                        {technology}
                      </span>

                    )
                  )}

                </div>

              </div>

            </Reveal>

          </div>

        </section>



        <section
          id="experience"
          className="section"
        >

          <div className="container">

            <Reveal>

              <div className="section-tag">
                03 — EXPERIENCE
              </div>

              <h2 className="section-title">
                My journey
                <br />
                so far.
              </h2>

            </Reveal>


            <div className="timeline">

              {experience.map(
                (item, index) => (

                  <Reveal
                    key={item.title}
                    delay={
                      index * 0.12
                    }
                  >

                    <motion.div
                      className="experience-item"

                      whileHover={{
                        x: 8,
                      }}
                    >

                      <span className="timeline-dot" />


                      <div className="experience-year">
                        {item.year}
                      </div>


                      <h3>
                        {item.title}
                      </h3>


                      <div className="experience-company">
                        {item.company}
                      </div>


                      <p>
                        {item.description}
                      </p>

                    </motion.div>

                  </Reveal>

                )
              )}

            </div>

          </div>

        </section>





        <section className="experience-section" id="experience">
          <div className="experience-container">

            {/* ================= TOP CONTENT ================= */}

            <div className="experience-top">

              {/* LEFT - HEADING */}
              <div className="experience-heading">
                <span className="section-small-title">EXPERIENCE</span>

                <h2>
                  Leadership &{" "}
                  <span>Achievements</span>
                </h2>

                <p>
                  My journey as a Head Student Co-Ordinator in the Training and
                  Placement Department, working with students, faculty and
                  placement teams while taking responsibility for coordination,
                  leadership and event management.
                </p>
              </div>


              {/* RIGHT - EXPERIENCE HIGHLIGHT */}
              <div className="years-card">

                <div className="years-top">
                  <span className="years-label">EXPERIENCE</span>

                  <span className="years-dot"></span>
                </div>

                <div className="years-number">
                  3<span>+</span>
                </div>

                <div className="years-title">
                  YEARS OF LEADERSHIP
                </div>

                <p>
                  Training & Placement Department
                </p>

                <div className="years-line"></div>

                <span className="years-role">
                  Head Student Co-Ordinator
                </span>

              </div>

            </div>


            {/* ================= FLOATING PHOTOS ================= */}

            <div className="experience-gallery">

              {/* Landscape Photo */}
              <div className="experience-card landscape-card card-1">

                <img
                  src="src/assets/gallery/IMG-20260610-WA0021.jpg"
                  alt="Training and Placement Team"
                />

                <div className="experience-overlay">
                  <h3>Core Leadership</h3>
                  <p>Training & Placement Department</p>
                </div>

              </div>


              {/* Portrait Photo */}
              <div className="experience-card portrait-card card-2">

                <img
                  src="src/assets/gallery/nn.jpeg"
                  alt="Award and Certificate"
                />

                <div className="experience-overlay">
                  <h3>Achievement</h3>
                  <p>Certificate & Award</p>
                </div>

              </div>


              {/* Landscape Photo
              <div className="experience-card landscape-card card-3">

                <img
                  src="src/assets/gallery/IMG-20260610-WA0107.jpg"
                  alt="Team Achievement"
                />

                <div className="experience-overlay">
                  <h3>Achievement</h3>
                  <p>Leadership & Teamwork</p>
                </div>

              </div> */}


              {/* Landscape Photo */}
              {/* 
      <div className="experience-card landscape-card card-4">

        <img
          src="src/assets/gallery/IMG-20260610-WA0059.jpg"
          alt="Leadership Moment"
        />

        <div className="experience-overlay">
          <h3>Leadership</h3>
          <p>Working with the Team</p>
        </div>

      </div>
      */}


              {/* Landscape Photo */}
              <div className="experience-card landscape-card card-5">

                <img
                  src="src/assets/gallery/IMG-20260610-WA0035.jpg"
                  alt="Placement Team"
                />

                <div className="experience-overlay">
                  <h3>Placement Team</h3>
                  <p>Training & Placement Cell</p>
                </div>

              </div>


              {/* Portrait Photo */}
              <div className="experience-card portrait-card card-6">

                <img
                  src="src/assets/gallery/IMG-20260610-WA0026.jpg"
                  alt="Certificate Achievement"
                />

                <div className="experience-overlay">
                  <h3>Achievement</h3>
                  <p>Head Student Co-Ordinator</p>
                </div>

              </div>
            </div>
          </div>
          <style>{`
    /* =========================================================
       EXPERIENCE SECTION
    ========================================================= */

    .experience-section {
      width: 100%;
      padding: 110px 6%;
      position: relative;
      overflow: hidden;
    }

    .experience-container {
      max-width: 1400px;
      margin: 0 auto;
    }


    /* =========================================================
       TOP SECTION
    ========================================================= */

    .experience-top {
      display: grid;

      grid-template-columns:
        minmax(0, 1.5fr)
        minmax(300px, 0.7fr);

      gap: 70px;

      align-items: center;

      margin-bottom: 75px;
    }


    /* =========================================================
       HEADING
    ========================================================= */

    .experience-heading {
      max-width: 850px;
    }

    .section-small-title {
      display: inline-block;

      font-size: 13px;

      letter-spacing: 4px;

      font-weight: 600;

      margin-bottom: 15px;

      opacity: 0.65;
    }

    .experience-heading h2 {
      font-size: clamp(42px, 5vw, 72px);

      line-height: 1;

      margin: 0 0 25px;

      font-weight: 700;

      letter-spacing: -2px;
    }

    .experience-heading h2 span {
      opacity: 0.45;
    }

    .experience-heading p {
      max-width: 750px;

      font-size: 16px;

      line-height: 1.8;

      opacity: 0.7;

      margin: 0;
    }


    /* =========================================================
       3+ YEARS CARD
    ========================================================= */

    .years-card {
      position: relative;

      min-height: 290px;

      padding: 30px;

      border-radius: 28px;

      overflow: hidden;

      background:
        linear-gradient(
          145deg,
          rgba(255,255,255,0.10),
          rgba(255,255,255,0.025)
        );

      border: 1px solid rgba(255,255,255,0.13);

      box-shadow:
        0 25px 80px rgba(0,0,0,0.18);

      backdrop-filter: blur(15px);

      transition:
        transform 0.5s cubic-bezier(.2,.8,.2,1),
        box-shadow 0.5s ease,
        border-color 0.5s ease;
    }

    .years-card::before {
      content: "";

      position: absolute;

      width: 180px;
      height: 180px;

      top: -80px;
      right: -70px;

      border-radius: 50%;

      background:
        rgba(255,255,255,0.08);

      filter: blur(5px);
    }

    .years-card:hover {
      transform: translateY(-10px);

      box-shadow:
        0 35px 100px rgba(0,0,0,0.25);

      border-color:
        rgba(255,255,255,0.25);
    }


    .years-top {
      display: flex;

      align-items: center;

      justify-content: space-between;
    }

    .years-label {
      font-size: 11px;

      letter-spacing: 3px;

      opacity: 0.6;

      font-weight: 600;
    }

    .years-dot {
      width: 9px;
      height: 9px;

      border-radius: 50%;

      background: currentColor;

      opacity: 0.7;

      box-shadow:
        0 0 20px currentColor;
    }


    .years-number {
      margin-top: 20px;

      font-size: clamp(75px, 8vw, 110px);

      line-height: 0.85;

      font-weight: 800;

      letter-spacing: -7px;
    }

    .years-number span {
      font-size: 42px;

      opacity: 0.5;

      margin-left: 5px;
    }


    .years-title {
      margin-top: 15px;

      font-size: 25px;

      letter-spacing: 2.5px;

      font-weight: 700;
    }

    .years-card p {
      margin: 8px 0 0;

      font-size: 13px;

      opacity: 0.55;
    }


    .years-line {
      width: 100%;

      height: 1px;

      margin: 22px 0 15px;

      background:
        rgba(255,255,255,0.12);
    }

    .years-role {
      font-size: 20px;

      letter-spacing: 1.5px;

      opacity: 0.65;

      font-weight: 600;
    }


    /* =========================================================
       GALLERY
    ========================================================= */

    .experience-gallery {
      display: grid;

      grid-template-columns:
        repeat(12, 1fr);

      grid-auto-rows: 95px;

      gap: 24px;

      align-items: start;
    }


    /* =========================================================
       EXPERIENCE CARDS
    ========================================================= */

    .experience-card {
      position: relative;

      overflow: hidden;

      border-radius: 24px;

      background:
        rgba(255,255,255,0.04);

      border:
        1px solid rgba(255,255,255,0.1);

      box-shadow:
        0 20px 60px rgba(0,0,0,0.18);

      transition:
        transform 0.5s cubic-bezier(.2,.8,.2,1),
        box-shadow 0.5s ease,
        border-color 0.5s ease;

      cursor: pointer;
    }

    .experience-card:hover {
      transform:
        translateY(-14px)
        rotate(0deg)
        scale(1.015);

      box-shadow:
        0 35px 90px rgba(0,0,0,0.28);

      border-color:
        rgba(255,255,255,0.25);

      z-index: 10;
    }

    .experience-card img {
      width: 100%;
      height: 100%;

      display: block;

      object-fit: cover;

      transition:
        transform 0.7s cubic-bezier(.2,.8,.2,1),
        filter 0.5s ease;
    }

    .experience-card:hover img {
      transform: scale(1.07);

      filter: brightness(0.78);
    }


    /* =========================================================
       CARD SIZES
    ========================================================= */

    .landscape-card {
      aspect-ratio: 4 / 3;
    }

    .portrait-card {
      aspect-ratio: 3 / 4;
    }


    /* =========================================================
       GRID POSITIONS
    ========================================================= */

    .card-1 {
      grid-column: 1 / 7;
      grid-row: 1 / 5;

      transform: rotate(-1deg);
    }

    .card-2 {
      grid-column: 7 / 10;
      grid-row: 1 / 5;

      transform: rotate(1.5deg);
    }

    .card-3 {
      grid-column: 10 / 13;
      grid-row: 1 / 5;

      transform: rotate(-1deg);
    }

    .card-4 {
      grid-column: 1 / 5;
      grid-row: 5 / 9;

      transform: rotate(1.2deg);
    }

    .card-5 {
      grid-column: 5 / 10;
      grid-row: 5 / 9;

      transform: rotate(-1deg);
    }

    .card-6 {
      grid-column: 10 / 13;
      grid-row: 5 / 9;

      transform: rotate(1.5deg);
    }


    /* =========================================================
       IMAGE OVERLAY
    ========================================================= */

    .experience-overlay {
      position: absolute;

      left: 0;
      right: 0;
      bottom: 0;

      padding:
        28px 24px 24px;

      background:
        linear-gradient(
          to top,
          rgba(0,0,0,0.82),
          rgba(0,0,0,0)
        );

      transform:
        translateY(8px);

      opacity: 0.9;

      transition:
        opacity 0.4s ease,
        transform 0.4s ease;
    }

    .experience-card:hover .experience-overlay {
      transform:
        translateY(0);

      opacity: 1;
    }

    .experience-overlay h3 {
      margin: 0 0 6px;

      font-size: 19px;

      font-weight: 600;

      color: #fff;
    }

    .experience-overlay p {
      margin: 0;

      font-size: 13px;

      color:
        rgba(255,255,255,0.72);
    }


    /* =========================================================
       LEADERSHIP IMPACT
    ========================================================= */

    .leadership-impact {
      margin-top: 90px;

      display: grid;

      grid-template-columns:
        0.8fr
        1.7fr;

      gap: 70px;

      align-items: start;

      padding-top: 65px;

      border-top:
        1px solid rgba(255,255,255,0.1);
    }


    .impact-heading span {
      display: inline-block;

      font-size: 11px;

      letter-spacing: 3px;

      font-weight: 700;

      opacity: 0.5;

      margin-bottom: 15px;
    }

    .impact-heading h3 {
      margin: 0;

      font-size:
        clamp(28px, 3vw, 42px);

      line-height: 1.1;

      font-weight: 500;

      letter-spacing: -1.5px;
    }

    .impact-heading h3 strong {
      opacity: 0.45;

      font-weight: 500;
    }


    /* =========================================================
       IMPACT CARDS
    ========================================================= */

    .impact-cards {
      display: grid;

      grid-template-columns:
        repeat(2, 1fr);

      gap: 18px;
    }

    .impact-card {
      display: flex;

      gap: 18px;

      padding: 24px;

      border-radius: 20px;

      background:
        rgba(255,255,255,0.035);

      border:
        1px solid rgba(255,255,255,0.08);

      transition:
        transform 0.4s ease,
        background 0.4s ease,
        border-color 0.4s ease;
    }

    .impact-card:hover {
      transform: translateY(-7px);

      background:
        rgba(255,255,255,0.065);

      border-color:
        rgba(255,255,255,0.18);
    }


    .impact-icon {
      min-width: 42px;
      height: 42px;

      display: flex;

      align-items: center;
      justify-content: center;

      border-radius: 50%;

      border:
        1px solid rgba(255,255,255,0.14);

      font-size: 11px;

      letter-spacing: 1px;

      opacity: 0.6;
    }


    .impact-card h4 {
      margin: 2px 0 8px;

      font-size: 16px;

      font-weight: 600;
    }

    .impact-card p {
      margin: 0;

      font-size: 12px;

      line-height: 1.65;

      opacity: 0.55;
    }


    /* =========================================================
       TABLET
    ========================================================= */

    @media (max-width: 1000px) {

      .experience-section {
        padding: 90px 5%;
      }

      .experience-top {
        grid-template-columns: 1fr;

        gap: 40px;
      }

      .years-card {
        max-width: 500px;
      }

      .experience-gallery {
        grid-template-columns:
          repeat(2, 1fr);

        grid-auto-rows: auto;

        gap: 22px;
      }

      .experience-card {
        grid-column: auto !important;

        grid-row: auto !important;
      }

      .landscape-card {
        aspect-ratio: 4 / 3;
      }

      .portrait-card {
        aspect-ratio: 3 / 4;
      }

      .card-1,
      .card-3,
      .card-5 {
        transform:
          rotate(-1deg);
      }

      .card-2,
      .card-4,
      .card-6 {
        transform:
          rotate(1deg);
      }

      .leadership-impact {
        grid-template-columns: 1fr;

        gap: 40px;
      }
    }


    /* =========================================================
       MOBILE
    ========================================================= */

    @media (max-width: 650px) {

      .experience-section {
        padding: 75px 20px;
      }

      .experience-top {
        gap: 35px;

        margin-bottom: 50px;
      }

      .experience-heading h2 {
        font-size: 42px;

        letter-spacing: -1.5px;
      }

      .experience-heading p {
        font-size: 14px;

        line-height: 1.7;
      }


      /* YEARS CARD */

      .years-card {
        min-height: 250px;

        padding: 25px;

        border-radius: 24px;
      }

      .years-number {
        font-size: 82px;
      }


      /* GALLERY */

      .experience-gallery {
        grid-template-columns: 1fr;

        gap: 28px;
      }

      .experience-card {
        width: 100%;

        grid-column: auto !important;

        grid-row: auto !important;
      }

      .landscape-card {
        aspect-ratio: 4 / 3;
      }

      .portrait-card {
        aspect-ratio: 3 / 4;
      }

      .experience-card:hover {
        transform:
          translateY(-8px)
          scale(1.01);
      }


      /* IMPACT */

      .leadership-impact {
        margin-top: 65px;

        padding-top: 45px;

        grid-template-columns: 1fr;

        gap: 35px;
      }

      .impact-heading h3 {
        font-size: 32px;
      }

      .impact-cards {
        grid-template-columns: 1fr;

        gap: 14px;
      }

      .impact-card {
        padding: 20px;
      }

      .experience-overlay {
        padding:
          22px 18px 18px;
      }

      .experience-overlay h3 {
        font-size: 17px;
      }

      .experience-overlay p {
        font-size: 12px;
      }

    }

  `}</style>
        </section>
        {/* </section> */}

        <section
          id="projects"
          className="section"
        >

          <div className="container">

            <Reveal>

              <div className="section-tag">
                04 — SELECTED WORK
              </div>

              <h2 className="section-title">
                Things I've
                <br />
                built.
              </h2>

              <p className="section-description">
                A selection of projects where frontend,
                backend, databases and deployment come
                together to solve real problems.
              </p>

            </Reveal>


            <div className="projects-grid">

              {projects.map(
                (project, index) => (

                  <Reveal
                    key={project.number}
                    delay={
                      index * 0.1
                    }
                  >

                    <TiltCard
                      className="project-card"

                      onMouseEnter={() =>
                        setActiveProject(
                          project.number
                        )
                      }

                      onMouseLeave={() =>
                        setActiveProject(
                          null
                        )
                      }
                    >

                      <div className="project-number">
                        PROJECT{" "}
                        {project.number}
                      </div>


                      <motion.h3
                        animate={
                          activeProject ===
                            project.number
                            ? {
                              x: 7,
                            }
                            : {
                              x: 0,
                            }
                        }
                      >
                        {project.title}
                      </motion.h3>


                      <p>
                        {project.description}
                      </p>


                      <div className="project-tags">

                        {project.technologies.map(
                          (technology) => (

                            <span
                              className="project-tag"
                              key={
                                technology
                              }
                            >
                              {technology}
                            </span>

                          )
                        )}

                      </div>


                      <div className="project-links">

                        {project.live !==
                          "#" && (

                            <a
                              className="project-link"
                              href={
                                project.live
                              }
                              target="_blank"
                              rel="noreferrer"
                            >
                              Live Demo ↗
                            </a>

                          )}


                        {project.github !==
                          "#" && (

                            <a
                              className="project-link"
                              href={
                                project.github
                              }
                              target="_blank"
                              rel="noreferrer"
                            >
                              GitHub ↗
                            </a>

                          )}

                      </div>

                    </TiltCard>

                  </Reveal>

                )
              )}

            </div>

          </div>

        </section>



        <section
          id="achievements"
          className="section"
        >

          <div className="container">

            <Reveal>

              <div className="section-tag">
                05 — ACHIEVEMENTS
              </div>

              <h2 className="section-title">
                3x Academic
                <br />
                <span>Award Winner.</span>
              </h2>

              <p className="section-description">
                Recognized with academic excellence awards
                across three consecutive years of college.
              </p>

            </Reveal>


            <div className="achievements-grid">

              {achievements.map(
                (item, index) => (

                  <Reveal
                    key={item.year}
                    delay={
                      index * 0.1
                    }
                  >

                    <TiltCard className="achievement-card">

                      <div className="achievement-icon">
                        🏆
                      </div>

                      <div className="achievement-year">
                        {item.year}
                      </div>

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.text}
                      </p>

                    </TiltCard>

                  </Reveal>

                )
              )}

            </div>

          </div>

        </section>




        <section
          id="gallery"
          className="section"
        >

          <div className="container">

            <Reveal>

              <div className="section-tag">
                06 — MOMENTS
              </div>

              <h2 className="section-title">
                Beyond the <span>code.</span>
              </h2>

              <p className="section-description">
                A few frames from events, stages and moments
                outside the editor — because there's more to
                the story than just code.
              </p>

            </Reveal>

            <Reveal delay={0.15}>
              <div style={{ marginTop: "55px" }}>
                <GalleryRow items={galleryRowOne} duration={45} />
                <GalleryRow items={galleryRowTwo} duration={52} reverse />
              </div>
            </Reveal>

          </div>

        </section>



        <section
          id="contact"
          className="section"
        >

          <div className="container">

            <Reveal>

              <div className="contact-box">

                <div className="contact-ring" />

                <div className="contact-ring contact-ring-two" />


                <div className="contact-content">

                  <div className="section-tag">
                    07 — GET IN TOUCH
                  </div>


                  <h2 className="contact-title">
                    Let's build
                    <br />
                    something great.
                  </h2>


                  <p className="contact-description">
                    I'm open to exciting opportunities,
                    freelance projects and collaborations.
                    If you have an idea or opportunity,
                    let's talk.
                  </p>


                  <div className="contact-buttons">

                    <a
                      className="button primary-button"
                      href="mailto:roushan8114@gmail.com"
                    >
                      Send Me an Email →
                    </a>


                    <a
                      className="button secondary-button"
                      href="https://github.com/roushan8114"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>


                    <a
                      className="button secondary-button"
                      href="https://linkedin.com/in/roushan999"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn ↗
                    </a>

                  </div>

                </div>

              </div>

            </Reveal>

          </div>

        </section>

        <footer className="footer">

          © {new Date().getFullYear()}
          {" "}
          Roushan Kumar · Built with React,
          Framer Motion & curiosity.

        </footer>

      </div>
    </>
  );
}

export default Home;