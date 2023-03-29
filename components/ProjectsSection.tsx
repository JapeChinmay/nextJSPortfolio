import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "XFlix",
    description:
      "XFlix is a streaming website, provides filteration and upload services , includes diferent genere of content",
    image: "/xflix.png",
    github: "",
    link: "https://xflix-chinmay-jape.netlify.app",
  },

  {
    name: " Qakrt",
    description:
      "This React-based e-commerce project is a shopping app that allows users to browse and purchase products. The app includes features such as product search, filtering, sorting, and a shopping cart. The project also integrates with a payment gateway to enable secure transactions.",
    image: "/qkart.png",
    github: "https://github.com/JapeChinmay/QKart-React",
    link: "https://chinmay-qkar-frontend.netlify.app/login",
  },
  // {
  //   name: "QKart",
  //   description:
  //     "This React-based e-commerce project is a shopping app that allows users to browse and purchase products. The app includes features such as product search, filtering, sorting, and a shopping cart. The project also integrates with a payment gateway to enable secure transactions.",
  //   image: "/qkart.png",
  //   github: "image.png",
  //   link: "https://platoio.com/register",
  // },
  {
    name: "Expense Tracker",
    description:
      "The MERN app is designed to manage expenses and incomes. It utilizes a MongoDB database, Express.js framework, React.js for front-end development, and Node.js for server-side development",
    image: "/expense.png",
    github: "https://github.com/JapeChinmay/klenty-assignment",
    link: "https://genuine-genie-8f8abc.netlify.app",
  },

  {
    name: "Redux Shop",
    description: "Ecome shop using React-redux",
    image: "/redux.png",
    github: "https://github.com/JapeChinmay/Redux-Shop-Axios",
    link: "https://genuine-genie-8f8abc.netlify.app",
  },

  {
    name: "XBoard",
    description:
      "  xBoard is a News Feed website that will feature the latest news for select topics, from Flipboard.",
    image: "/board.png",
    github: "https://starlit-gecko-668e13.netlify.app",
    link: "https://starlit-gecko-668e13.netlify.app",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4  bg-c2 -500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
