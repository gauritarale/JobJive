import { IconAsset, IconBriefcase } from '@tabler/icons-react';
import { IconBellRinging } from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';
import { Avatar } from '@mantine/core';
const Header=()=>{
return <div className="text-white w-full bg-black h-32 flex justify-between items-center border-10%">
   <div className='flex gap-3 items-center'>
      <IconBriefcase stroke={1.45} />
      <div className='text-2xl font-semibold'>
       ijobs
      </div>
    </div>
   <div className='flex gap-3'>
      <a href=''> Find Jobs</a>
      <a href=''>Find Talent</a>
      <a href=''>Uploads Job</a>
      <a href=''>About us</a>
   </div>
   <div className='flex gap-2 items-center'>
      <IconBellRinging stroke={1.15} />
      <div className='flex items-center gap-2'>
         <div>
            Gauri
         </div>
         <Avatar src="avatar.png" alt="it's me" />

      </div>
      <IconSettings stroke={1.05} />
   
   </div> 
</div>
}
export default Header;