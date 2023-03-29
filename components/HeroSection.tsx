"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/profile.png"
            alt="my-image"
            width={320}
            height={320}
            className="rounded-full shadow-xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5 ">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl ">
            Hi, I'm Chinmay Jape
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I'm a <span className="font-semibold">Frontend Developer </span>
            from Maharashtra, India. Passionate About <strong>
              Impactful
            </strong>{" "}
            design and creation proccess.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-gradient-to-r from-c1 via-c3 to-c2 rounded-full shadow cursor-pointer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
