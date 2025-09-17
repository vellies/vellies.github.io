/*
  Vellies Portfolio - Single-file React component (TailwindCSS)

  How to use:
  1. Create a Vite + React project (or Next.js). Example with Vite:
     npm create vite@latest vellies-portfolio -- --template react
     cd vellies-portfolio
  2. Install dependencies:
     npm install
  3. Install TailwindCSS (follow Tailwind docs). Quick setup:
     npm install -D tailwindcss postcss autoprefixer
     npx tailwindcss init -p
     // then configure ./tailwind.config.cjs and ./src/index.css
  4. Replace src/App.jsx with this file's contents. Import the generated CSS in main.jsx.
  5. Run locally: npm run dev
  6. Push to GitHub and deploy on Vercel.

  Notes:
  - This is a single-file React component using Tailwind utility classes.
  - Update contact links and resume URL in the SOCIALS and constants below.
*/

import React from 'react';
import { FiMail, FiDownload, FiLinkedin, FiGithub } from 'react-icons/fi';

interface ExperienceProps {
  company: string;
  role: string;
  duration: string;
}

interface ProjectProps {
  title: string;
  desc: string;
  tech: string;
}

export default function App() {
  const SOCIALS = {
    linkedin: 'https://www.linkedin.com/in/vellieswaran-r-81b206103',
    github: 'https://github.com/vellies',
    resume: '/VELLIESWARAN_R_Resume.pdf', // replace with your resume file path
    email: 'vellies6113@gmail.com',
    phone: '+91 97518 47178',
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="max-w-4xl mx-auto px-6 py-10 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">VELLIESWARAN R</h1>
          <p className="text-sm text-gray-600">Full Stack JavaScript Developer — MERN</p>
        </div>
        <nav className="flex gap-3 items-center">
          <a href={SOCIALS.resume} className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md shadow-sm text-sm hover:shadow-md" download>
            <FiDownload /> Resume
          </a>
          <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100">
            <FiLinkedin />
          </a>
          <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-gray-100">
            <FiGithub />
          </a>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-20">
        {/* HERO */}
        <section className="bg-gradient-to-r from-white via-indigo-50 to-white rounded-2xl p-8 shadow-sm">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Hi — I&apos;m Vellieswaran.</h2>
              <p className="mt-3 text-gray-700 max-w-xl">A pragmatic Full Stack JavaScript Developer with 6+ years building robust web applications using React, Next.js, Node.js and modern cloud platforms. I build scalable, maintainable products with a focus on developer experience and clean code.</p>

              <div className="mt-6 flex gap-3">
                <a href="#projects" className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm shadow hover:bg-indigo-700">View Projects</a>
                <a href={`mailto:${SOCIALS.email}`} className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md text-sm hover:shadow-sm">
                  <FiMail /> Email
                </a>
              </div>
            </div>
            <div className="mt-6 md:mt-0 flex-shrink-0">
              <div className="w-40 h-40 rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center text-indigo-700 font-semibold">V R</div>
            </div>
          </div>
        </section>

        {/* ABOUT & EXPERIENCE */}
        <section className="mt-10 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold">About Me</h3>
            <p className="mt-3 text-gray-700">I specialise in building end-to-end JavaScript applications (MERN). From creating dynamic React/Next.js frontends to architecting performant Node.js backends and designing resilient data models in MongoDB / PostgreSQL — I deliver production-grade software. I also have experience deploying apps to DigitalOcean, Alibaba Cloud, and using S3-compatible storage.</p>

            <h4 className="mt-6 font-semibold">Key Responsibilities</h4>
            <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
              <li>Develop user-facing features with React / Next.js</li>
              <li>Build server-side APIs using Node.js & Express</li>
              <li>Design schemas and queries for MongoDB / SQL</li>
              <li>Deploy & maintain apps on cloud platforms</li>
            </ul>

            <h4 className="mt-6 font-semibold">Professional Experience</h4>
            <div className="mt-3 space-y-4">
              <ExperienceCard company="CRYPKEN IND" role="Full Stack JavaScript Developer" duration="Jun 2022 — Present" />
              <ExperienceCard company="Zyena Technologies SDN BHD" role="Full Stack JavaScript Developer" duration="Jun 2020 — May 2022" />
              <ExperienceCard company="Rayi Software" role="Full Stack Developer" duration="Jun 2017 — May 2020" />
            </div>

          </div>

          <aside className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="font-semibold">Contact</h4>
            <p className="mt-2 text-sm text-gray-700">Email: <a className="text-indigo-600" href={`mailto:${SOCIALS.email}`}>{SOCIALS.email}</a></p>
            <p className="mt-1 text-sm text-gray-700">Phone: <a className="text-indigo-600" href={`tel:${SOCIALS.phone}`}>{SOCIALS.phone}</a></p>
            <p className="mt-4 text-sm text-gray-600">Location: Coimbatore, India</p>

            <div className="mt-4 flex gap-3">
              <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm">
                <FiLinkedin /> LinkedIn
              </a>
              <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm">
                <FiGithub /> GitHub
              </a>
            </div>
          </aside>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-12">
          <h3 className="text-xl font-semibold">Featured Projects</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <ProjectCard title="Signature" desc="Blockchain-powered digital certificate & badge issuance platform using Web3." tech="React • Node • Solidity • MongoDB" />
            <ProjectCard title="ChatBot (ChatGPT - AI)" desc="Document-based Q&A chatbot integrated across applications; deployed with CloudFront." tech="React • Node • OpenAI" />
            <ProjectCard title="Odela" desc="Team & academy management platform (attendance, assessments, trainers)." tech="React • Node • MongoDB" />
            <ProjectCard title="CARECOM" desc="Medical annotation and gene annotation tooling for research workflows." tech="React • Node • PostgreSQL" />
            <ProjectCard title="Employee Timesheet" desc="Time tracking with Slack integration and automated reports." tech="React • Node • MongoDB • Slack API" />
            <ProjectCard title="Fee Collection Mobile App" desc="Court booking & slot management mobile app with dynamic availability." tech="React Native • Node • MongoDB" />
          </div>
        </section>

        {/* Skills & Education */}
        <section className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Skills</h3>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST', 'GraphQL', 'AWS S3', 'Docker', 'Git'].map(s => (
                <div key={s} className="px-3 py-2 rounded-md border border-gray-100 text-sm">{s}</div>
              ))}
            </div>
          </div>

          <aside className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="font-semibold">Education</h4>
            <p className="mt-2 text-gray-700 text-sm">B.E. Electronics & Communication Engineering<br />Government College of Engineering, Tirunelveli (2012 — 2016)</p>

            <h4 className="mt-4 font-semibold">Profile</h4>
            <p className="mt-2 text-gray-700 text-sm">DOB: 15-JUN-1993<br />Languages: English, Tamil</p>
          </aside>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Vellieswaran R — Built with ❤️ • <a href={SOCIALS.linkedin} className="text-indigo-600">LinkedIn</a></p>
        </footer>
      </main>
    </div>
  );
}

function ExperienceCard({ company, role, duration }: ExperienceProps) {
  return (
    <div className="p-4 border border-gray-100 rounded-md">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold">{company}</div>
          <div className="text-sm text-gray-600">{role}</div>
        </div>
        <div className="text-sm text-gray-500">{duration}</div>
      </div>
    </div>
  );
}

function ProjectCard({ title, desc, tech }:ProjectProps) {
  return (
    <article className="bg-white rounded-lg p-5 shadow-sm border border-gray-50">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
      <div className="mt-3 text-xs text-gray-500">{tech}</div>
    </article>
  );
}
