import { Avatar } from '@mantine/core';
import React from 'react';

const Working: React.FC = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center font-semibold mb-3 text-slate-100">
        How it <span className="text-bright-sun-400">Works</span>
      </div>

      <div className="text-lg mb-10 mx-auto text-slate-300 text-center w-1/2">
        Effortlessly navigate through the process and land your dream job.
      </div>

      <div className="flex px-16 justify-between items-center gap-8 flex-wrap relative">
        {/* Left Image with Profile Box */}
        <div className="relative">
          <img className="w-[30rem]" src="girl.png" alt="girl" />
          
          <div className="w-36 flex   top-[46%]  right-0 absolute flex-col items-center gap-1 border border-yellow-400 rounded-xl py-3 px-1 backdrop-blur-md bg-black/30">
            <Avatar className="!h-16 !w-16" src="avatar.png" alt="it's me" />
            <div className="text-sm font-semibold text-slate-200">Complete your profile</div>
            <div className="text-xs text-slate-300">70% Completed</div>
          </div>
        </div>

        {/* Right Content Block */}
        <div className="flex flex-col gap-8">
          {/* Step 1 */}
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-yellow-300 rounded-full">
              <img className="h-12 w-12" src="/Working/image1.png" alt="resume" />
            </div>
            <div>
              <div className="text-slate-200 text-xl font-semibold">Build your Resume</div>
              <div className="text-slate-400">Create a standout resume using our templates.</div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-yellow-300 rounded-full">
              <img className="h-12 w-12" src="/Working/image2.png" alt="search jobs" />
            </div>
            <div>
              <div className="text-slate-200 text-xl font-semibold">Search for Jobs</div>
              <div className="text-slate-400">Browse jobs and apply easily with one click.</div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-yellow-300 rounded-full">
              <img className="h-12 w-12" src="/Working/image3.png" alt="interview" />
            </div>
            <div>
              <div className="text-slate-200 text-xl font-semibold">Crack Interviews</div>
              <div className="text-slate-400">Use our resources to crack your interviews confidently.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
