import React from "react";
import image1 from "/public/1.png";
import image2 from "/public/2.png";
import image3 from "/public/3.png";
import image4 from "/public/4.png";
import image5 from "/public/5.png";
import image6 from "/public/6.png";
import { motion } from "motion/react";
import live from "/public/live.png";

const projectData = [
  {
    image: image6,
    title: "E-Commerce",
    description:"Built a full-stack online E-Commerce website using React.js with features like user authentication, real-time product listings, cart system, and an admin dashboard for managing Product items.",
    technologies: ["ReactJS", "Tailwind", "Firebase", "Redux"],
    liveLink: "https://e-commerce-red-zeta-97.vercel.app/",

  },
  {
    image: image1,
    title: "Burger App ",
    description:
      "A responsive and dynamic burger ordering web app built with React.js and few Modern Libraries, focusing on user experience, real-time interaction, and modern UI design. ",
    technologies: ["ReactJs", "SwipperJs", "FramerMotion", "TailwindCss"],
    liveLink: "https://bigbarburger.netlify.app/",

  },
  {
    image: image3,
    title: "Invoice Generator",
    description:
      "An Invoice creator project built with React. Add itemized items, configure quantity, prices, tax rates and discounts. Download Invoice as PDFs to your device. Uses jspdf-react to capture the data from the modal and covert it from canvas -> pdf.",
    technologies: ["ReactJs", "Bootstrap", "jspdf-react"],
    liveLink: "https://invoice-generator-react.netlify.app/",
  },
  {
    image: image4,
    title: "APi Weather",
    description:
      "An Invoice creator project built with React. Add itemized items, configure quantity, prices, tax rates and discounts. Download Invoice as PDFs to your device. Uses jspdf-react to capture the data from the modal and covert it from canvas -> pdf.",
    technologies: ["HTML", "CSS", "JavaScript", "TailwindCss"],
    liveLink: "https://invoice-generator-react.nddetlify.app/",

  },
  {
    image: image5,
    title: "Portfolio",
    description:
      "lorem100dkjasdnkajdnkjandkjandjknd jdkjasdjasdjkadkjadkjandak jndkjasdjadkjadkjadkja dhashdkjashdkjadk",
    technologies: ["HTML", "CSS", "JavaScript", "TailwindCss"],
    liveLink: "https://invoice-generatddor-react.netlify.app/",

  }
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div
        className="flex flex-col items-center gap-8 md:flex-row
    md:gap-24"
      >
        <img
          className=" w-full cursor-pointer rounded-2xl transition-all
      duration-300 hover:scale-105 md:w-[300px]"
          src={project.image}
          alt=""
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold flex gap-48">
              <div>{project.title}</div>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-8 hover:scale-110 duration-150"
                  src={live}
                  alt="Check out live"
                />
              </a>
            </div>

            <p className="text-gray-400">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </ScrollReveal>
  );
};

const Project = () => {
  return (
    <ScrollReveal>
      <div
        id="projects"
        className="flex min-h-screen w-full flex-col 
    items-center  justify-center  gap-16  p-4 md:px-14  md:py-24"
      >
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
        <div
          className="flex w-full max-w-[1000px] flex-col gap-16
      text-white"
        >
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default Project;
