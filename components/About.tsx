import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{
          once: true,
        }}
        className="-mb-20 rounded-full flex-shrink-0 object-cover w-56 h-56 md:mb-0 md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]"
        src="https://i.pravatar.cc/300"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p>
          I am an experienced front-end developer 🤓 who is fascinated by
          JavaScript frameworks, including AngularJS, Angular, and Vue. These
          frameworks not only make development faster but also more enjoyable. I
          find it fulfilling to work with these tools, and they allow me to
          create dynamic and engaging web applications with ease 💯.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
