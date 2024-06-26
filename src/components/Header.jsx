import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { Tooltip } from "flowbite-react";
import { CgTerminal } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.from(".stagger-box", {
      x: 150,
      y: 150,
      opacity: 0,
      duration: 2.5,
      ease: "power1.inOut",
      rotation: 120,
      borderRadius: "100%",
      stagger: {
        amount: 0.5,
        grid: [6, 3],
        axis: "x",
        ease: "circ.inOut",
        from: "center",
      },
      repeat: 0,
    });
  }, []);

  return (
    <header>
      <div className="mt-1">
        <div className="gap-1 flex justify-center">
          <div className="w-15 h-20  rounded-lg stagger-box">
            <div className="mt-1 font-bold text-6xl flex justify-center items-center text-green-600 ">
              p
            </div>
          </div>
          <div className="w-15 h-20  rounded-lg stagger-box">
            <div className="mt-1 font-bold text-6xl justify-center flex items-center text-green-600">
              w
            </div>
          </div>
          <div className="w-15 h-20  rounded-lg stagger-box bg">
            <div className="mt-1 font-bold text-6xl justify-center flex items-center text-green-600">
              d
            </div>
          </div>
          <div>
            <Tooltip
              content="home"
              className="text-xs text-orange-400"
              style="dark"
              position="bottom"
            >
              <CgTerminal
                className="w-20 h-20 stagger-box breadIcon hover:animate-bounce cursor-pointer"
                onClick={() => navigate("/")}
              />
            </Tooltip>
          </div>
          <div className="flex justify-center mr-1">
            <div className="mt-1 w-4 h-8  rounded-lg stagger-box flex justify-center">
              <Tooltip
                content="discover"
                className="text-xs text-orange-400"
                style="dark"
                position="bottom"
              >
                <Link
                  to="/discover"
                  className="font-semibold text-2xl justify-center flex items-center text-green-600 hover:animate-bounce"
                >
                  d
                </Link>
              </Tooltip>
            </div>
            <div className="mt-1 w-4 h-8  rounded-lg stagger-box  flex justify-center">
              <Tooltip
                content="evaluate"
                className="text-xs text-orange-400"
                style="dark"
                position="bottom"
              >
                <Link
                  to="/evaluate"
                  className="font-semibold text-2xl justify-center flex items-center text-green-600 hover:animate-bounce"
                >
                  e
                </Link>
              </Tooltip>
            </div>
            <div className="mt-1 w-4 h-8  rounded-lg stagger-box  flex justify-center">
              <Tooltip
                content="validate"
                className="text-xs text-orange-400"
                style="dark"
                position="bottom"
              >
                <Link
                  to="/validate"
                  className="font-semibold text-2xl justify-center flex items-center text-green-600 hover:animate-bounce"
                >
                  v
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
