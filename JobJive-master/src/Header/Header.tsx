import { IconAsset, IconBriefcase, IconBellRinging, IconSettings } from '@tabler/icons-react';
import { Avatar, Indicator } from '@mantine/core';
import NavLinks from './NavLinks';

const Header = () => {
  return (
    <div className="w-full bg-black px-6 text-white h-32 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex gap-1 items-center text-amber-200">
        <IconBriefcase className="h-10 w-10" stroke={1.45} />
        <div className="text-2xl font-semibold">JobJive</div>
      </div>

      {/* Navigation */}
      <NavLinks />

      {/* Right Side (User Info and Icons) */}
      <div className="flex gap-2 items-center">
        <div className="flex items-center gap-2">
          <div>Gauri</div>
          <Avatar src="/avatar.png" alt="it's me" />
        </div>

        <div className="bg-slate-500 p-1 rounded-full">
          <IconSettings stroke={1.5} />
        </div>

        <div className="bg-slate-500 p-1 rounded-full">
          <Indicator color="yellow" size={9} offset={7} processing>
            <IconBellRinging stroke={1.5} />
          </Indicator>
        </div>
      </div>
    </div>
  );
};

export default Header;
