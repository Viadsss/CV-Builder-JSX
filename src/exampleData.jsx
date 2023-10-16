import * as models from "./models";
import examplePicture from "./imgs/JohnDoe.png";

export const exampleData = {
  profilePicture: examplePicture,

  general: {
    firstName: "John",
    lastName: "Doe",
    profession: "Software Engineer",
    location: "Quezon City, Philippines",
    phoneNumber: "+639516271683",
    email: "johndoe@gmail.com",
    website: "www.johndoe.dev",
  },

  education: [
    {
      ...models.createEducationEntry(),
      school: "Polytechnic University of the Philippines",
      degree: "BS Computer Science",
      startDate: "Jun 2022",
      endDate: "Oct 2026",
    },
    {
      ...models.createEducationEntry(),
      school: "University of the Philippines",
      degree: "MS Computer Science",
      startDate: "Aug 2027",
      endDate: "Nov 2029",
    },
  ],

  experience: [
    {
      ...models.createExperienceEntry(),
      company: "Logicwave Labs",
      position: "Software Developer",
      startDate: "2030",
      endDate: "2032",
      description:
        "- Built back-end services that crunched data to deliver business insights\n- Created automated release process tools\n- Continuously improved system architecture",
    },
    {
      ...models.createExperienceEntry(),
      company: "CodeNova Solutions",
      position: "Senior Software Engineer",
      startDate: "2032",
      endDate: "Present",
      description:
        "- Analyze user needs and design software solutions\n- Code high-performance programs using different frameworks\n- Work with other teams for debugging",
    },
  ],
};
