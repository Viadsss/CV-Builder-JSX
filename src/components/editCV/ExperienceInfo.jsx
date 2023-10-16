import { IconTrashXFilled } from "@tabler/icons-react";
import Input from "../forms/Input";
import TextArea from "../forms/TextArea";

export default function ExperienceInfo({ data, onChange, onDelete }) {
  return (
    <div className="flex flex-col justify-center gap-y-4 rounded-lg border bg-white p-6 shadow-md mb-2">
      <Input
        label={"Company Name"}
        type={"text"}
        name="company"
        value={data.company}
        onChange={(e) => onChange("company", e.target.value)}
      />
      <Input
        label={"Your Position"}
        type={"text"}
        name="position"
        value={data.position}
        onChange={(e) => onChange("position", e.target.value)}
      />
      <Input
        label={"From"}
        type={"text"}
        name="startDate"
        value={data.startDate}
        onChange={(e) => onChange("startDate", e.target.value)}
        placeholder={"e.g. 2032"}
      />
      <Input
        label={"To"}
        type={"text"}
        name="endDate"
        value={data.endDate}
        onChange={(e) => onChange("endDate", e.target.value)}
        placeholder={"e.g. Present"}
      />

      <TextArea
        label={"Tasks / Responsibilities / Achievements"}
        name="description"
        value={data.description}
        onChange={(e) => onChange("description", e.target.value)}
      />
      <button
        className="flex self-center rounded bg-red-600 px-2 py-1 text-white hover:bg-red-800"
        onClick={onDelete}
      >
        <IconTrashXFilled />
        Delete Entry
      </button>
    </div>
  );
}
