import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { VscSymbolNamespace } from "react-icons/vsc";

const Symbolic = () => {
  // TODO: Implement the gsap.to() method
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 250,
      yoyo: true,
      repeat: -1,
      duration: 5,
      ease: "power1.inOut",
      rotation: 360,
    });
  }, []);

  return (
    <main>
      <h1 className="flex text-2xl font-bold text-zinc-300">
        <span className="flex mr-1">
          <VscSymbolNamespace className="w-10 h-10 text-zinc-300" />
        </span>
        Symbolic
      </h1>
      <p className="mt-3 text-zinc-400">
        Imagine you&apos;re navigating through a maze of folders, and you lose track
        of your location:<code>pwd.dev</code>is like having a GPS that tells you
        exactly where you are and <code>where you want to be.</code>
      </p>
      <p className="mt-5 text-gray-500">
        <code>pwd</code> helps you find your path irrespective of where you
        start from.
      </p>
      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-green-500 rounded-lg" />
      </div>
    </main>
  );
};

export default Symbolic;
