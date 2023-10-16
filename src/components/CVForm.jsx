import FormTitle from "./forms/FormTitle";
import GeneralInfo from "./editCV/GeneralInfo";
import EducationInfo from "./editCV/EducationInfo";
import ExperienceInfo from "./editCV/ExperienceInfo";
import ProfileInfo from "./editCV/ProfileInfo";
import { IconPlus } from "@tabler/icons-react";

export default function CVForm({
  profilePicture,
  onChangeProfilePicture,
  generalInfo,
  onChangeGeneralInfo,
  educationInfo,
  onChangeEducationInfo,
  onAddEducationEntry,
  onDeleteEducationEntry,
  experienceInfo,
  onChangeExperienceInfo,
  onAddExperienceEntry,
  onDeleteExperienceEntry,
}) {
  return (
    <div className="grid max-w-screen-lg gap-y-4 lg:w-full lg:px-20">
      <FormTitle title={"Profile Picture"} />
      <ProfileInfo
        previewUrl={profilePicture}
        onChangeProfilePicture={onChangeProfilePicture}
      />

      <FormTitle title={"General Information"} />
      <GeneralInfo data={generalInfo} onChange={onChangeGeneralInfo} />

      <FormTitle title={"Education"} />
      <div>
        {educationInfo.map((education) => (
          <EducationInfo
            key={education.id}
            data={education}
            onChange={(name, value) =>
              onChangeEducationInfo(education.id, name, value)
            }
            onDelete={() => onDeleteEducationEntry(education.id)}
          />
        ))}
        <button
          className="m-4 flex rounded bg-accent p-2 text-white"
          onClick={onAddEducationEntry}
        >
          <IconPlus />
          Education
        </button>
      </div>

      <FormTitle title={"Work Experience"} />
      <div>
        {experienceInfo.map((experience) => (
          <ExperienceInfo
            key={experience.id}
            data={experience}
            onChange={(name, value) =>
              onChangeExperienceInfo(experience.id, name, value)
            }
            onDelete={() => onDeleteExperienceEntry(experience.id)}
          />
        ))}
        <button
          className="m-4 flex rounded bg-accent p-2 text-white"
          onClick={onAddExperienceEntry}
        >
          <IconPlus />
          Experience
        </button>
      </div>
    </div>
  );
}
