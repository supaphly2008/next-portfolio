import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
// import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hi, it's Terry here", "Frontend Developer", "<LoveToCode />"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      {/* <Image
        src="https://terry-resources.s3.ap-northeast-1.amazonaws.com/images/Snapseed.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaDmFwLW5vcnRoZWFzdC0yIkgwRgIhAJVtjfHVyoGAZg9l9QLQHWOFH5iiW2%2F0vEXYO25Na18gAiEA85jtbC4J2Oqyz33tLcEZS0KFmpSJmtI%2B%2FN1Qqf8SKZ0q5AIIcBAAGgw1MDU3NjA4ODA1NDYiDLLewaZfnFS75HkpxCrBAgQGrpbSPFb%2BPMq0c5QzNRAj75U88mCa3cEa4UBHjMd%2FLCJVE4O33t9VmXFRvccklQ5ARkjwkAJovUXOdfG21%2FiqPPscgMsuE42jLpy1T8gvLgc4yopAQhFxGlIDzUpWsWfqhGNtbLpl32HXbo8P8P6L6AxjpBSRU6Ed2U5Kk%2FHaok5DU3MDkYuA%2Bqlwu0Bew3AAdlBBhcBoXWuaYtYqtZZkFbyFb%2B%2BM5ycY%2FU0%2Fh%2BfBCvxKscCURTGxHiJvJu%2BvKpgDxmMVTS6P1gCZpyO290g6ym6dzN2pL0FBZIK7UfHeEVM%2BNKpC831vjui4gq982PVle%2BT9HVK7kbsN9JOVIPttWsHMR54PZrPdAZAWP1SoDasEp7fuq0rSUQ8opk048V1uNEI934AO%2BJcAopSjtihrMAc5dCfpM1%2B6WrclE3UY6zDZ0ueiBjqyAhwpENvvy4PInjQy3KKmOVKYuSEjR2FV%2FwTttNAhXABzeVwZjxzX9Fbocdc3XcNrmsYg286bPxfTwnRu1DiJSxtLiYWsvttOjEk7eN3nyvYfkxRWT775FClIufKYMNqKLPfVm%2BjtYT0oAynPwIryGQ9OhwuNyZECfLohCJBLEseoKiY2Ylr6JYZiLN1UQsc8noUMdFBlMbK16JL%2Fw%2Fp%2BAmEN7DUiPAMUfR8IGxj960XAww3VwnYIM15mO9Mi2ESMZ8Om7ho%2B2WnflfFl5%2BD6WntObH%2F%2FrE8LcxrhnpC5Pm3HeSY7TV%2BA2WUXmVcYT6zbNEUkBjyyg8fElIXOX6h09jCbN1XlhialpFtZe0t1Ef3BxRiEoKTtfme4mHVEAFYNWpsBc3oMD1lsWC%2Bn7j2r%2FITm%2Bw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230509T070213Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAXLQNSS6RER3TYB7L%2F20230509%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Signature=dce768495defd32fd0c4ca97788d4ed069668ad66ed573dcf6da7ba5cb40a268"
        width={32}
        height={32}
        alt="Picture of the author"
      /> */}
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover "
        src="https://i.pravatar.cc/300"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 mb-2 tracking-[15px] px-10">
          Software Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-2">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="mt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
