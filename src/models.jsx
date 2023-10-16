import { v4 as uuidv4 } from "uuid";

const generalData = {
  firstName: "",
  lastName: "",
  profession: "",
  location: "",
  phoneNumber: "",
  email: "",
  website: "",
};

function createEducationEntry() {
  return {
    id: uuidv4(),
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  };
}

function createExperienceEntry() {
  return {
    id: uuidv4(),
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
  };
}

export { generalData, createEducationEntry, createExperienceEntry };
