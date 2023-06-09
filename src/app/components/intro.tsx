import Image from "next/image";
import React from "react";


const Intro = () => {
  return (
    <section className="flex max-w-4xl mx-auto md:flex-row flex-col mt-5">
      {/* left side */}
      <div className="m-5 max-w-lg">
        <h1 className=" text-white text-4xl">I am a full stack developer</h1>
        <p className="text-xl text-justify text-bold">
          Passionate and skilled web 3.0 & blockchain developer with experience
          in frontend & backend development. Proven track record in market
          analysis, financial consultancy, project planning and execution, and
          vendor communication.
        </p>

        
      </div>

      {/* left side end */}
      {/* right side */}
      <div>
        <Image
          src="/images/rajib.jpg"
          alt="rajib"
          height={400}
          width="300"
          className="md:w-full max-auto rounded-full"
        />
      </div>
    </section>
  );
};

export default Intro;
