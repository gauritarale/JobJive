import React from "react";
import Marquee from "react-fast-marquee";
import { companies } from "../Data/companies"; // Update the path as needed

const Companies: React.FC = () => {
  return (
    <div className="w-full mt-20 pb-5">
      <div className="text-xl text-center font-semibold mb-10 text-slate-300">
        Trusted by <span className="text-yellow-400">1000+</span> Companies
      </div>

      <Marquee pauseOnHover={true} gradient={false} speed={50}>
        {companies.map((company: string, index: number) => (
          <div
            key={index}
            className="mx-8 px-2 py-1 bg-slate-900 hover:bg-slate-800 rounded-xl cursor-pointer transition-all duration-200"
          >
            <img
              className="h-14 object-contain"
              src={`/Companies/${company}.png`}
              alt={company}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Companies;
