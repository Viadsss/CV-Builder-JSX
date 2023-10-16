import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconWorldWww,
} from "@tabler/icons-react";
import { Fragment } from "react";

export default function CVPreview({
  profilePicture,
  generalInfo,
  educationInfo,
  experienceInfo,
}) {
  return (
    <div className="m-3 rounded border bg-white p-4 shadow-lg sm:w-max lg:w-8/12 lg:p-8">
      {/* General Part */}
      <div className="flex items-center justify-between border-b-2 border-gray-700 py-4 lg:py-8">
        <div className="flex flex-col gap-y-5 lg:gap-y-10">
          <div>
            <h1 className=" font-popBold text-2xl tracking-widest lg:text-4xl">
              {generalInfo.firstName} {generalInfo.lastName}
            </h1>
            <h2 className="text-base tracking-widest text-slate-700 lg:text-xl">
              {generalInfo.profession}
            </h2>
          </div>
          <div className="flex flex-row space-x-1 text-[0.6rem] lg:space-x-8 lg:text-base">
            <div>
              <p className="flex items-center gap-x-px">
                {generalInfo.location && <IconMapPin />}
                {generalInfo.location}
              </p>
              <p className="flex items-center gap-x-px">
                {generalInfo.phoneNumber && <IconPhone />}
                {generalInfo.phoneNumber}
              </p>
            </div>
            <div>
              <p className="flex items-center gap-x-px">
                {generalInfo.email && <IconMail />}
                <a href={"mailto:" + generalInfo.email}>{generalInfo.email}</a>
              </p>
              <p className="flex items-center gap-x-px">
                {generalInfo.website && <IconWorldWww />}
                <a href={"https://" + generalInfo.website}>
                  {generalInfo.website}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="shrink-0 justify-self-end">
          {profilePicture && (
            <img
              src={profilePicture}
              className="h-16 w-16 rounded-full border bg-white p-2 shadow-lg lg:h-32 lg:w-32"
            />
          )}
        </div>
      </div>

      {/* Education Part */}
      <div className="flex w-full flex-col border-b-2 border-gray-700 py-4 lg:py-8">
        <h1 className="pb-1 font-popBold text-base uppercase tracking-widest lg:pb-3 lg:text-xl">
          Education
        </h1>
        <div className="px-2 lg:px-4">
          {educationInfo.map((education, index) => (
            <div key={index} className="py-1">
              <h2 className=" text-sm font-bold tracking-wide lg:text-lg">
                {education.degree}
              </h2>
              <div className="flex justify-between">
                <h3 className="pl-2 text-xs lg:pl-8 lg:text-base">
                  {education.school}
                </h3>
                <p className=" text-xs text-gray-800 lg:text-sm">
                  {education.startDate} - {education.endDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Part */}
      <div className="flex w-full flex-col border-b-2 border-gray-700 py-4 lg:py-8">
        <h1 className=" pb-1 font-popBold text-base uppercase tracking-widest lg:pb-3 lg:text-xl">
          Work Experience
        </h1>
        <div className="px-2 lg:px-4">
          {experienceInfo.map((experience, index) => (
            <div key={index} className="py-2">
              <div className="flex justify-between">
                <h2 className="font-popBold text-sm tracking-wide lg:text-lg">
                  {experience.company}
                </h2>
                <p className="text-xs text-gray-800 lg:text-base">
                  {experience.startDate} - {experience.endDate}
                </p>
              </div>
              <h3 className="py-1 text-xs italic lg:text-base">{experience.position}</h3>
              <div className="text-xs lg:text-base">
                {experience.description.split("\n").map((line, index) => (
                  <Fragment key={index}>
                    {line}
                    <br />
                  </Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
