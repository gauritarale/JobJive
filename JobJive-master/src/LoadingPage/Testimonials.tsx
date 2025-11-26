import { Avatar, Rating } from "@mantine/core"; // Corrected Mantine import
import { testimonials } from "../Data/Testimonials"; // Ensure this path is correct

const Testimonials = () => {
  return (
    // Assuming the outermost component (e.g., App.tsx) provides the dark page background
    <div className="mt-20 pb-5">
      
      {/* Heading: Dark Background, White Text, Orange/Yellow Accent (from previous exchange) */}
      <div className="text-4xl text-center font-semibold mb-16 text-white"> 
        What <span className="text-bright-sun-400">User</span> says about us?
      </div>

      {/* Testimonials List Container */}
      <div className="flex justify-center gap-6"> 
        {
          testimonials.map((data, index) => (
            // Individual Testimonial Card (Matching image_3ec880.png)
            <div 
              key={index} 
              // Card Styling: Dark background, Yellow-border, Padding
              className="flex flex-col gap-6 w-[220px] bg-gray-900 border border-yellow-400 p-5 rounded-lg shadow-xl"
            >
              
              {/* Header: Avatar, Name, and Rating */}
              <div className="flex flex-col items-center text-center">
                
                {/* Avatar */}
                <Avatar className="h-16 w-16 !rounded-full" src="avatar.png" alt={data.name} />
                
                {/* Name */}
                <div className="text-xl text-white font-semibold mt-3 mb-1">{data.name}</div> 
                
                {/* Rating Component (Stars) */}
                {/* Note: Mantine stars need to be styled using the component's internal props or global CSS.
                   The 'className' here applies to the wrapper, which we set to text-yellow-400. 
                */}
                <Rating value={data.rating} fractions={2} readOnly className="text-yellow-400" />
              </div>
              
              {/* Testimonial Text */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {data.testimonial}
              </p>
              
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Testimonials;