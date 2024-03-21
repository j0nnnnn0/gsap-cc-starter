import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapStagger = () => {
  // TODO: Implement the gsap.stagger() method
  useGSAP(() => {
    gsap.from(".stagger-box", {
      x: 250,
      y: 250,
      duration: 2,
      ease: "power1.inOut",
      rotation: 360,
      borderRadius: "100%",
      stagger: 0.5,
      repeat: -1,
      yoyo: true,
    });
  }, []);


  return (
    <main>
      <h1>GsapStagger</h1>

      <p className="mt-5 text-gray-500">
        GSAP stagger is a feature that allows you to apply animations with a
        staggered delay to a group of elements.
      </p>

      <p className="mt-5 text-gray-500">
        By using the stagger feature in GSAP, you can specify the amount of time
        to stagger the animations between each element, as well as customize the
        easing and duration of each individual animation. This enables you to
        create dynamic and visually appealing effects, such as staggered fades,
        rotations, movements, and more.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/resources/getting-started/Staggers"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Gsap Stagger
        </a>{" "}
        feature.
      </p>

      <div className="mt-20">
        <div className="flex gap-5">
          <div className="w-20 h-20 bg-green-200 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-green-300 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-green-400 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-green-500 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-green-600 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-green-700 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-green-800 rounded-lg stagger-box" />
        </div>
      </div>
    </main>
  );
};

export default GsapStagger;
