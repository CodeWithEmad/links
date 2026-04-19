import React from "react";
import ReactDOM from "react-dom/client";
import { IconType } from "react-icons";
import { MdWork, MdArticle, MdMail } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import profileImage from "../profile.png";
import "./styles.css";

const links: Array<{
  label: string;
  meta: string;
  href: string;
  icon: IconType;
  aria: string;
  external?: boolean;
}> = [
  {
    label: "Website",
    meta: "Visit my personal website",
    href: "https://codewithemad.ir",
    icon: MdWork,
    aria: "Website",
    external: true,
  },
  {
    label: "Articles",
    meta: "Insights on systems design",
    href: "https://medium.com/@emad.ehsanrad",
    icon: MdArticle,
    aria: "Articles",
    external: true,
  },
];

const socialLinks: Array<{
  label: string;
  href: string;
  icon: IconType;
}> = [
  {
    label: "GitHub",
    href: "https://github.com/codewithemad",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emadehsanrad",
    icon: FaLinkedinIn,
  },
  {
    label: "X",
    href: "https://x.com/codewithemad",
    icon: FaTwitter,
  },
];

const supportItems = [
  {
    label: "Buy Me a Coffee",
    meta: "Support the research and write-ups",
    status: "Coming soon",
  },
  {
    label: "Patreon",
    meta: "Hands-on guides and early notes",
    status: "Coming soon",
  },
];

const featuredProjects = [
  // {
  //   badge: "Featured",
  //   title: "Aurora Mesh · Global Streaming APIs",
  //   description:
  //     "Design lead for a low-latency cloud platform that routes distributed workloads across continents with automated compliance and real-time observability.",
  // },
  // {
  //   badge: "Case Study",
  //   title: "Cobalt Vault · Secure Data Fabric",
  //   description:
  //     "Architected trust boundaries and self-healing infrastructure for a mission-critical backend that handles millions of encrypted records per minute.",
  // },
];

const LinkCard = ({
  link,
  delay,
}: {
  link: (typeof links)[number];
  delay: number;
}) => {
  const Icon = link.icon;
  const rel = link.external ? "noreferrer" : undefined;
  const target = link.external ? "_blank" : undefined;

  return (
    <a
      className="link-card"
      href={link.href}
      aria-label={link.aria}
      data-reveal-delay={`${delay}s`}
      rel={rel}
      target={target}
    >
      <span className="icon">
        <Icon aria-hidden="true" />
      </span>
      <div className="link-copy">
        <span className="link-title">{link.label}</span>
        <span className="meta">{link.meta}</span>
      </div>
    </a>
  );
};

const SocialCard = ({ link }: { link: (typeof socialLinks)[number] }) => {
  const Icon = link.icon;

  return (
    <a
      className="link-card social-card"
      href={link.href}
      target="_blank"
      rel="noreferrer"
    >
      <span className="icon">
        <Icon aria-hidden="true" />
      </span>
      <span className="link-title">{link.label}</span>
    </a>
  );
};

const SupportCard = ({
  item,
}: {
  item: {
    label: string;
    meta: string;
    status: string;
  };
}) => (
  <article className="support-card">
    <div>
      <p className="support-title">{item.label}</p>
      <p className="fine-print">{item.meta}</p>
    </div>
    <span className="support-pill">{item.status}</span>
  </article>
);

const App = () => (
  <>
    <div className="glow"></div>
    <div className="glow"></div>
    <main className="page">
      <header className="reveal" data-reveal-delay="0s">
        <div className="avatar reveal" data-reveal-delay="0.1s">
          <img
            src={profileImage}
            alt="Emad Ehsanrad"
          />
        </div>
        <h1>Emad Ehsanrad</h1>
        <h2>Senior Software Engineer</h2>
        <p className="tagline">Cloud · Distributed Systems · Backend Craft</p>
      </header>

      <section className="links reveal" aria-label="Primary links" data-reveal-delay="0.2s">
        {links.map((link, index) => {
          const delay = Number(((index + 1) * 0.1).toFixed(1));
          return <LinkCard key={link.label} link={link} delay={delay} />;
        })}
      </section>

      <section className="socials reveal" data-reveal-delay="0.5s">
        <div className="section-heading">
          <p className="section-label">Connect</p>
          <h3>Social media</h3>
        </div>
        <div className="social-grid">
          {socialLinks.map((link) => (
            <SocialCard key={link.label} link={link} />
          ))}
        </div>
      </section>

      <section id="support" className="support reveal" data-reveal-delay="0.6s">
        <div className="section-heading">
          <p className="section-label">Support</p>
          <h3>Coming soon</h3>
        </div>
        <div className="support-grid">
          {supportItems.map((item) => (
            <SupportCard key={item.label} item={item} />
          ))}
        </div>
      </section>

      <section className="videos hidden" aria-hidden="true">
        <p>Video content is not available right now.</p>
      </section>

      <section
        id="projects"
        className="featured reveal"
        data-reveal-delay="0.7s"
      >
        {featuredProjects.map((project) => (
          <article className="feature-card" key={project.title}>
            <p className="pill">{project.badge}</p>
            <h3 className="feature-title">{project.title}</h3>
            <p className="feature-desc">{project.description}</p>
          </article>
        ))}
      </section>

      <footer className="reveal" data-reveal-delay="0.9s">
        <p>© 2026 Emad Ehsanrad · Crafted for clarity and trust.</p>
      </footer>
    </main>
  </>
);

ReactDOM.createRoot(document.getElementById("app")!).render(<App />);
