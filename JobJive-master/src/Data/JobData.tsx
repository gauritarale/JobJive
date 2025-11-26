import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from '@tabler/icons-react';

// Define the type for a single dropdown data item
interface DropdownItem {
  title: string;
  icon: typeof IconSearch; 
  options: string[];
}

// Define the type for a single job listing
interface JobListing {
  jobTitle: string;
  company: string;
  applicants: number;
  experience: string;
  jobType: string;
  location: string;
  package: string;
}

// Data for the dropdown filters used in the search bars
export const dropdownData: DropdownItem[] = [
  { 
    title: "Job Title", 
    icon: IconSearch, 
    options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] 
  },
  { 
    title: "Location", 
    icon: IconMapPin, 
    options: ['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'] 
  },
  { 
    title: "Experience", 
    icon: IconBriefcase, 
    options: ['Entry Level', 'Intermediate', 'Expert'] 
  },
  { 
    title: "Job Type", 
    icon: IconRecharging, 
    options: ['Full Time', 'Part Time', 'Contract', 'Freelance', 'Internship'] 
  }
];

// Array of job listings
export const jobListings: JobListing[] = [
  {
    jobTitle: "Product Designer",
    company: "Meta",
    applicants: 25,
    experience: "Entry Level",
    jobType: "Full-Time",
    location: "New York",
    package: "32 LPA",
  },
  {
    jobTitle: "Software Developer",
    company: "Google",
    applicants: 150,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "San Francisco",
    package: "60 LPA",
  },
  {
    jobTitle: "Data Analyst",
    company: "Amazon",
    applicants: 88,
    experience: "Entry Level",
    jobType: "Contract",
    location: "Delhi",
    package: "15 LPA",
  },
  {
    jobTitle: "Content Writer",
    company: "Netflix",
    applicants: 42,
    experience: "Expert",
    jobType: "Freelance",
    location: "London",
    package: "10 LPA",
  },
  {
    jobTitle: "Marketing Specialist",
    company: "Microsoft",
    applicants: 12,
    experience: "Intermediate",
    jobType: "Part Time",
    location: "Tokyo",
    package: "20 LPA",
  },
];