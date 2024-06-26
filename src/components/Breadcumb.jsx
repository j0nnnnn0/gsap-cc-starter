import { Breadcrumb, Badge } from "flowbite-react";
import { CgTerminal } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";

export default function HeaderBreadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const navigate = useNavigate();

  return (
    <div className="flex mx-auto max-w-3xl ring-1 bg-zinc-900 ring-zinc-300/20 xl:max-w-5xl p-1 text-white justify-between">
      <div className="flex flex-col">
        <Breadcrumb>
          <Breadcrumb.Item onClick={() => navigate("/")}>
            <CgTerminal
              className=" ml-2 breadIcon"
              style={{ fontSize: "25px" }}
            />
          </Breadcrumb.Item>
          {pathnames.map((value, index) => {
            const to = `${pathnames.slice(0, index + 1).join("/")}`;
            return (
              <Breadcrumb.Item key={index} href={to}>
                <span className="breadIcon">{value}</span>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-wrap gap-2 pr-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150  duration-300">
          <Badge size="sm" color="success">
            Find your path
          </Badge>
        </div>
      </div>
    </div>
  );
}
