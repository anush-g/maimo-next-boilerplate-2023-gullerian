// pages/about.js
import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="container mx-auto my-8 mt-24 p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <div className="grid grid-cols-1 mt-12 md:grid-cols-2 items-center mx-auto max-w-screen-lg">
        <div>
          <Image
            src="/assets/foto-about.png"
            alt="Description of the image"
            width={500}
            height={400}
            className="rounded-md"
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-8 text-lg text-justify">
          <p>
            Welcome to our series page! We are dedicated to curating an
            exceptional collection of TV shows for your entertainment. Our goal
            is to make your binge-watching experience enjoyable and memorable.
            Explore our diverse selection and discover your next favorite
            series.
          </p>
          <br></br>
          <p>
            At our series page, we strive to provide a platform where you can
            find shows that cater to a variety of tastes. Whether you are into
            drama, comedy, or sci-fi, we have got something for everyone. Dive
            into our collection and start exploring. Your next favorite series
            is just a click away.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
