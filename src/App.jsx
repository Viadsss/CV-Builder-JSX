import { useState } from "react";
import Header from "./components/Header";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";
import * as models from "./models";
import { exampleData } from "./exampleData";

export default function App() {
  const [isPreviewActive, setIsPreviewActive] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [generalInfo, setGeneralInfo] = useState(models.generalData);
  const [educationInfo, setEducationInfo] = useState([
    models.createEducationEntry(),
  ]);
  const [experienceInfo, setExperienceInfo] = useState([
    models.createExperienceEntry(),
  ]);

  function handleTogglePreview(value) {
    if (value === "preview") {
      setIsPreviewActive(true);
    } else if (value === "edit") {
      setIsPreviewActive(false);
    }
  }

  // Profile Picture Part
  function handleChangeProfilePicture(imageDataUrl) {
    setProfilePicture(imageDataUrl);
  }

  // General Part
  function handleChangeGeneralInfo(name, value) {
    setGeneralInfo({ ...generalInfo, [name]: value });
  }

  // Education Part
  function handleChangeEducationInfo(id, name, value) {
    const updatedEducationInfo = educationInfo.map((education) =>
      education.id === id ? { ...education, [name]: value } : education,
    );

    setEducationInfo(updatedEducationInfo);
  }

  function handleAddEducationEntry() {
    setEducationInfo([...educationInfo, models.createEducationEntry()]);
  }

  function handleDeleteEducationEntry(id) {
    const updatedEducationInfo = educationInfo.filter(
      (education) => education.id !== id,
    );
    setEducationInfo(updatedEducationInfo);
  }

  // Experience Part
  function handlechangeExperienceInfo(id, name, value) {
    const updatedExperienceInfo = experienceInfo.map((experience) =>
      experience.id === id ? { ...experience, [name]: value } : experience,
    );
    setExperienceInfo(updatedExperienceInfo);
  }

  function handleAddExperienceEntry() {
    setExperienceInfo([...experienceInfo, models.createExperienceEntry()]);
  }

  function handleDeleteExperienceEntry(id) {
    const updatedExperienceInfo = experienceInfo.filter(
      (education) => education.id !== id,
    );
    setExperienceInfo(updatedExperienceInfo);
  }

  // Header Options
  function handleClearCV() {
    setProfilePicture(null);
    setGeneralInfo(models.generalData);
    setEducationInfo([models.createEducationEntry()]);
    setExperienceInfo([models.createExperienceEntry()]);
  }

  function handleFillExampleCV() {
    setProfilePicture(exampleData.profilePicture);
    setGeneralInfo(exampleData.general);
    setEducationInfo(exampleData.education);
    setExperienceInfo(exampleData.experience);
  }

  return (
    <div className="min-h-screen bg-background font-poppins text-text">
      <Header
        onFillExampleCV={handleFillExampleCV}
        onClearCV={handleClearCV}
        onTogglePreview={handleTogglePreview}
      />
      <main className="mx-auto grid max-w-screen-xl place-items-center py-8">
        {!isPreviewActive ? (
          <CVForm
            profilePicture={profilePicture}
            onChangeProfilePicture={handleChangeProfilePicture}
            generalInfo={generalInfo}
            onChangeGeneralInfo={handleChangeGeneralInfo}
            educationInfo={educationInfo}
            onChangeEducationInfo={handleChangeEducationInfo}
            onAddEducationEntry={handleAddEducationEntry}
            onDeleteEducationEntry={handleDeleteEducationEntry}
            experienceInfo={experienceInfo}
            onChangeExperienceInfo={handlechangeExperienceInfo}
            onAddExperienceEntry={handleAddExperienceEntry}
            onDeleteExperienceEntry={handleDeleteExperienceEntry}
          />
        ) : (
          <CVPreview
            profilePicture={profilePicture}
            generalInfo={generalInfo}
            educationInfo={educationInfo}
            experienceInfo={experienceInfo}
          />
        )}
      </main>
    </div>
  );
}
