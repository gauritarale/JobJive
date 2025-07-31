import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const DreamJob = () => {
  return (
    <div className="relative flex items-center px-16 py-16 bg-[#1e1e1e] min-h-screen">
      {/* Left Column */}
      <div className="flex flex-col w-[45%] gap-6">
        <div className="text-6xl font-bold leading-tight text-slate-100 [&>span]:text-yellow-400">
          Find your <span>dream</span> <span>job</span> with us
        </div>

        <div className="text-lg text-slate-200">
          Good life begins with a good company. Start explore thousands of jobs in one place.
        </div>

        {/* Search Inputs */}
        <div className="flex gap-3 mt-5">
          <TextInput
            className="bg-[#1a1a1a] rounded-lg p-1 px-2 text-white [&_input]:text-white"
            variant="unstyled"
            label="Job Title"
            placeholder="Software Engineer"
          />
          <TextInput
            className="bg-[#1a1a1a] rounded-lg p-1 px-2 text-white [&_input]:text-white"
            variant="unstyled"
            label="Job Type"
            placeholder="Fulltime"
          />
         <div className="flex items-center justify-center h-full w-20 bg-yellow-400 text-slate-100 rounded-lg p-2 ">
          <IconSearch className="h-[85%] w-[85%]"/>
         </div>
        </div>
      </div>
 
      {/* Right Column with Image */}
      <div className="w-[55%] flex justify-center relative">
        <img
          src="/dreamPage.png"
          alt="Dream job"
          className="w-[28rem] rounded-xl shadow-lg"
        />

        {/* Floating Job Card */}
        <div className="absolute left-[-2rem] top-[28%] bg-[#1a1a1a] text-white border border-yellow-400 rounded-lg p-2 backdrop-blur-md flex flex-col gap-2 w-fit shadow-lg">
          <div className="flex gap-2 items-center">
            <img src="/Google.png" alt="Google" className="w-10 h-10 p-1 bg-slate-800 rounded-lg" />
            <div>
              <div className="text-sm text-white font-medium">Software Engineer</div>
              <div className="text-xs text-gray-400">New York</div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 pt-1 px-1">
            <span>1 day ago</span>
            <span>•</span>
            <span>120 Applicants</span>
          </div>
        </div>

        {/* Avatar Badge */}
        <div className="absolute bottom-4 right-4 bg-[#1a1a1a] border border-yellow-400 rounded-xl px-3 py-2 flex items-center gap-2 shadow-md">
          {/* Overlapping Avatars */}
          <div className="flex -space-x-2">
            <img src="/avatar1.png" className="w-8 h-8 rounded-full border-2 border-[#1a1a1a]" alt="avatar1" />
            <img src="/avatar2.png" className="w-8 h-8 rounded-full border-2 border-[#1a1a1a]" alt="avatar2" />
            <img src="/avatar3.png" className="w-8 h-8 rounded-full border-2 border-[#1a1a1a]" alt="avatar3" />
          </div>
          {/* Text */}
          <span className="text-sm text-white">10K+ got job</span>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
