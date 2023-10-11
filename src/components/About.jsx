import React from "react";

export const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-10 mx-auto flex flex-col gap-5 justify-center w-full h-full">
        <div className="pb-8 flex justify-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
          Greetings! I&apos;m a skilled software developer with a passion for
          helping clients build remarkable products, features, and websites.
          Take a moment to browse through my portfolio and see the extensive
          experience I bring to the table. Whether you&apos;re impressed by my
          work or have a specific coding project in mind, don&apos;t hesitate to
          reach out. I&apos;m here to transform your ideas into reality and
          create something truly special.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          With my expertise and dedication, I can bring your vision to life with
          ease. Whether it&apos;s a sleek website, innovative features, or a
          complete product, I&apos;ve got the skills to make it happen. So, if
          you&apos;re excited about what you see in my portfolio and have a
          coding project that needs attention, let&apos;s connect and
          collaborate. Together, we can turn your ideas into a tangible success
          story. Get in touch today and let&apos;s make something amazing
          together!
        </p>
      </div>
    </div>
  );
};
