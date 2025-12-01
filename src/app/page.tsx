export default function Home() {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg p-8 my-10 rounded-lg">
      {/* Header */}
      <header className="text-center border-b pb-6">
        <h1 className="text-3xl font-bold">VELLIESWARAN R</h1>
        <p className="text-gray-600">
          (Full Stack JavaScript Developer - MERN)
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-3 text-sm text-gray-700 text-center">
          <a href="mailto:vellies6113@gmail.com" className="block">
            📧 vellies6113@gmail.com
          </a>

          <span className="block">📱 +91 97518 47178</span>

          <a
            className="text-blue-600 underline block"
            href="https://www.linkedin.com/in/vellieswaran-r-81b206103"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </header>

      {/* Objective */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold border-l-4 border-blue-500 pl-3">
          PROFESSIONAL OBJECTIVE
        </h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Full Stack JavaScript Developer with 8+ years of experience building
          scalable, high-performance web applications using React, Next.js,
          Node.js, Express, MongoDB, and PostgreSQL. Strong expertise in REST
          API development, cloud deployment (DigitalOcean, Alibaba, AWS S3),
          CI/CD, and performance optimization. Seeking a challenging role to
          contribute to end-to-end product development in a fast-growing
          organization.
        </p>
      </section>

      {/* Work Experience */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold border-l-4 border-blue-500 pl-3">
          WORK EXPERIENCE
        </h2>

        {/* GETO */}
        <div className="mt-6">
          <h3 className="font-bold text-lg">
            ⭐ Senior Full Stack JavaScript Developer — GETO, Coimbatore
          </h3>
          <p className="text-gray-600 mb-2">Oct 2024 – Present</p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>
              Architected and delivered full-stack features using React.js,
              Next.js, and Node.js, enhancing stability and user experience.
            </li>
            <li>
              Boosted API performance by 35% through database optimization.
            </li>
            <li>
              Moved file workflows to AWS S3, cutting storage cost by 28%.
            </li>
            <li>
              Reduced deployment failures by 90% on DigitalOcean & Alibaba
              Cloud.
            </li>
            <li>
              Implemented CI/CD pipelines reducing release time significantly.
            </li>
          </ul>
        </div>

        {/* Crypken */}
        <div className="mt-6">
          <h3 className="font-bold text-lg">
            ⭐ Full Stack JavaScript Developer — Crypken IND, Malaysia
          </h3>
          <p className="text-gray-600 mb-2">June 2022 – Sep 2024</p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>
              Delivered 15+ full-stack features across MERN and Next.js modules.
            </li>
            <li>Reduced server response time by 45% with API tuning.</li>
            <li>Improved UI performance by 30% using code-splitting.</li>
            <li>
              Reduced manual workflow time by 60% with third-party integrations.
            </li>
          </ul>
        </div>

        {/* Zyena */}
        <div className="mt-6">
          <h3 className="font-bold text-lg">
            ⭐ Full Stack JavaScript Developer — Zyena Technologies SDN. BHD
          </h3>
          <p className="text-gray-600 mb-2">June 2020 – May 2022</p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Handled apps with 10,000+ monthly users.</li>
            <li>Improved SEO by 55% with SSR Next.js optimization.</li>
            <li>
              Refactored UI into modular components, saving 20% dev effort.
            </li>
          </ul>
        </div>

        {/* Rayi Software */}
        <div className="mt-6">
          <h3 className="font-bold text-lg">
            ⭐ Full Stack Developer — Rayi Software, Chennai
          </h3>
          <p className="text-gray-600 mb-2">Oct 2016 – May 2020</p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>
              Built UI, backend modules, and REST APIs using React & Node.
            </li>
            <li>
              Improved query performance by 25% with SQL/NoSQL schema redesign.
            </li>
            <li>Reduced bug turnaround time by 40% working with QA teams.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold border-l-4 border-blue-500 pl-3">
          KEY PROJECTS
        </h2>

        <div className="space-y-6 mt-5">
          <Project
            title="Captivo – Farm Data Collection Tool"
            description="Dynamic tracking system with customizable templates, multi-country support, automation for farm, house, and cycle workflows."
          />
          <Project
            title="IHIS – Healthcare Management System"
            description="RBAC-based hospital system with appointments, EMR, lab, pharmacy, leave management & doctor queue automation."
          />
          <Project
            title="Signature – Digital Certificates Platform"
            description="Secure certificate & badge generation platform with verifiable tamper-proof issuance."
          />
          <Project
            title="Chatbot + CloudFront Integration"
            description="Universal script-based ChatGPT chatbot integrated with AWS CloudFront for document-based Q&A."
          />
          <Project
            title="Employee Timesheet System"
            description="Slack-based attendance automation, task reminders, leave tracking & reporting."
          />
        </div>
      </section>

      {/* Skills */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold border-l-4 border-blue-500 pl-3">
          SKILLS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4 text-gray-700">
          <Skill title="React.js" />
          <Skill title="Next.js" />
          <Skill title="Node.js" />
          <Skill title="Express.js" />
          <Skill title="MongoDB" />
          <Skill title="PostgreSQL" />
          <Skill title="AWS S3" />
          <Skill title="Nginx" />
          <Skill title="Tailwind CSS" />
          <Skill title="GitHub Actions (CI/CD)" />
        </div>
      </section>

      {/* Education */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold border-l-4 border-blue-500 pl-3">
          EDUCATION
        </h2>
        <p className="mt-3 text-gray-700">
          B.E. Electronics & Communication Engineering (First Class)
          <br />
          Government College of Engineering, Tirunelveli — 2012–2016
        </p>
      </section>
    </div>
  );
}

/* Reusable components */
function Project({ title, description }:any) {
  return (
    <div>
      <h4 className="font-bold text-lg">{title}</h4>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

function Skill({ title }:any) {
  return (
    <span className="px-3 py-2 bg-gray-100 rounded-md text-sm font-medium">
      {title}
    </span>
  );
}
