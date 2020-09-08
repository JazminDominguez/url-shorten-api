import React from "react";
import illustration from "../assets/illustration-working.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="working-illustration">
        <img src={illustration} alt="working illustration" />
      </div>
      <div className="hero-text">
        <h2>More than just shorter links</h2>
        <p>
          Build your brand&#39;s recognition and get detailed insights on how
          your links are performing
        </p>
        <button>Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
