import React from "react";
import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import { Briefcase, Code, Paintbrush, PenTool, FileText } from "lucide-react";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
const jobCategory = [
  {
    title: "Digital Marketing",
    icon: <Briefcase className="w-8 h-8" />,
    description: "Promote brands online with marketing strategies",
    jobs: "1.2k+ new job posted",
  },
  {
    title: "Web Developer",
    icon: <Code className="w-8 h-8" />,
    description: "Build and maintain websites for clients",
    jobs: "2k+ new job posted",
  },
  {
    title: "Arts & Design",
    icon: <Paintbrush className="w-8 h-8" />,
    description: "Create visual content for branding and media",
    jobs: "500+ new job posted",
  },
  {
    title: "UI-UX Designer",
    icon: <PenTool className="w-8 h-8" />,
    description: "Design user interfaces and enhance user experience",
    jobs: "800+ new job posted",
  },
  {
    title: "Content Writing",
    icon: <FileText className="w-8 h-8" />,
    description: "Write and edit content for various platforms",
    jobs: "1.5k+ new job posted",
  },
];

const JobCategory: React.FC = () => {
  return (
    <div className="text-white w-full px-4 mt-16">
      <div className="text-center w-1/2 mx-auto text-mine-shaft-300 text-lg mb-10">
        <span className="text-2xl font-semibold text-white">Browse </span>
        <span className="text-2xl font-semibold text-yellow-400">JobCategory</span>
        <div className="text-sm mt-2 text-gray-400">
          Explore diverse job opportunities tailored to your skills. Start your career journey today!
        </div>
      </div>

      {/* Carousel that looks like a scrollable row */}
       <Carousel
        withIndicators
        height={200}
        type="container"
        slideSize={{ base: '100%', '300px': '25%', '250px': '33.333333%' }}
        slideGap={{ base: 0, '300px': 'md', '500px': 'lg' }}
        emblaOptions={{ loop: true, align: 'start' }}
        className="w-full"
        nextControlIcon={<IconArrowRight className="h-6 w-6" />}
        previousControlIcon={<IconArrowLeft className="h-6 w-6" />}
      >
        {jobCategory.map((category, index) => (
          <Carousel.Slide key={index} className="w-64">
            <div className="flex flex-col items-center gap-2 border border-bright-sun-400 px-4 py-6 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] transition duration-300 ease-in-out shadow-bright-sun-300">
              <div className="text-yellow-400">{category.icon}</div>
              <h2 className="font-semibold text-white">{category.title}</h2>
              <p className="text-center text-sm text-gray-400">{category.description}</p>
              <p className="text-yellow-400 text-sm mt-2">{category.jobs}</p>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;
