import { CgMoreAlt } from "react-icons/cg";

const MoreOrLess = () => {

  return (
    <main>
      <h1 className="flex text-2xl font-bold text-zinc-300">
        <span className="flex mr-1">
          <CgMoreAlt className="w-10 h-10 text-zinc-300" />
        </span>
        More or Less
      </h1>
      <p className="mt-3 text-zinc-400">
        Imagine you&apos;re navigating through a maze of folders, and you lose track
        of your location:<code>pwd.dev</code>is like having a GPS that tells you
        exactly where you are and <code>where you want to be.</code>
      </p>

      <p className="mt-5 text-gray-500">
        More or less useful stuff from <code>pwd</code>.
      </p>
    </main>
  );
};

export default MoreOrLess;
