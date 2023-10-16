import {
  IconBriefcase,
  IconId,
  IconSchool,
  IconUserCircle,
} from "@tabler/icons-react";

export default function FormTitle({ title }) {
  let icon;

  switch (title) {
    case "Profile Picture":
      icon = <IconUserCircle size={32} />;
      break;
    case "General Information":
      icon = <IconId size={32} />;
      break;
    case "Education":
      icon = <IconSchool size={32} />;
      break;
    case "Work Experience":
      icon = <IconBriefcase size={32} />;
      break;
  }

  return (
    <div className="mt-8 flex items-center justify-center gap-2 font-oneSans text-2xl font-bold">
      <span className="rounded-full bg-primary p-1 text-white">{icon}</span>
      {title}
    </div>
  );
}
