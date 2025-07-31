import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const location = useLocation();

  const links = [
    { name: "Find Jobs", url: "/find-jobs" },
    { name: "Find Talent", url: "/find-talent" },
    { name: "Upload Job", url: "/upload-job" },
    { name: "About us", url: "/about" },
  ];

  return (
    <div className="flex gap-5 text-mine-shaft-300 h-full items-center">
      {links.map((link, index) => (
        <div
          key={index}
          className={`${
            location.pathname === link.url
              ? "border-b-[3px] border-yellow-400 text-yellow-400 ":"border-transparent"} h-full flex items-center`}
        >
          <Link to={link.url}>{link.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
