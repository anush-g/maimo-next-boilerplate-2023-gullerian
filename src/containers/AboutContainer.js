// components/AboutSection.js
import React from "react";
import Link from "next/link";

const AboutContainer = () => {
  return (
    <section className="p-8 mx-auto w-60%">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
        <p className="leading-loose text-center">
          Welcome to our series page! We are dedicated to curating an exceptional
          collection of TV shows for your entertainment. Our goal is to make your
          binge-watching experience enjoyable and memorable. Explore our diverse
          selection and discover your next favorite series.
        </p>

        {/* Additional Content */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2 text-center">Our Mission</h3>
          <p className="text-center">
            At our series page, we strive to provide a platform where you can
            find shows that cater to a variety of tastes. Whether you are into
            drama, comedy, or sci-fi, we have got something for everyone.
          </p>
        </div>

        {/* Call-to-Action */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2 text-center">Start Binge-Watching Now!</h3>
          <p className="text-center">
            Dive into our collection and start exploring. Your next favorite
            series is just a click away.
          </p>
          <div className="flex justify-center mt-3">
            <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Explore Shows
              
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContainer;
