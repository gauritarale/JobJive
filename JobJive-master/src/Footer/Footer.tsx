import { IconAnchor, IconBrandFacebook, IconBrandInstagram, IconBrandX } from "@tabler/icons-react";

const Footer = () => {
  return (
    // Main container with dark background and a top border/separator
    <div className="pt-20 pb-5 border-t border-gray-800 pt-12 bg-gray-900"> 
      
      {/* Footer Content Grid - Max width and centered */}
      <div className="max-w-7xl mx-auto flex justify-between gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* Column 1: Logo, Description, AND SOCIAL ICONS */}
        <div className="w-1/4 flex flex-col gap-4"> 
          
          {/* Logo/Branding */}
          <div className="text-2xl font-bold flex items-center gap-2">
              <IconAnchor size={28} className="text-yellow-400" />
              <span className="text-white">JobHook</span> 
          </div>
          
          {/* Description Text */}
          <p className="text-sm text-gray-400 leading-relaxed">
              Job portal with user profiles, skill updates, certifications, work experience and admin job postings
          </p>
          
          {/* SOCIAL ICONS - THIS IS THE MISSING PART */}
          <div className="flex gap-4 mt-2">
              <IconBrandFacebook size={24} className="text-gray-400 hover:text-yellow-400 cursor-pointer transition" />
              <IconBrandInstagram size={24} className="text-gray-400 hover:text-yellow-400 cursor-pointer transition" />
              <IconBrandX size={24} className="text-gray-400 hover:text-yellow-400 cursor-pointer transition" />
          </div>
        </div>
        
        {/* Column 2: Product */}
        <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">Product</h3>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Find Job</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Find Company</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Find Employee</a>
        </div>
        
        {/* Column 3: Company */}
        <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">Company</h3>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">About Us</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Contact Us</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms & Conditions</a>
        </div>
        
        {/* Column 4: Support */}
        <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">Support</h3>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Help & Support</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Feedback</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">FAQs</a>
        </div>
        
      </div>
      
      {/* Copyright Line */}
      <div className="text-center mt-12 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} JobHook. All rights reserved.
      </div>
      
    </div>
  );
};

export default Footer;