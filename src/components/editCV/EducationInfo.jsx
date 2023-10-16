import { IconTrashXFilled } from "@tabler/icons-react";
import Input from "../forms/Input";

export default function EducationInfo({ data, onChange, onDelete }) {
  return (
    <div className="flex flex-col justify-center gap-y-4 rounded-lg border bg-white p-6 shadow-md mb-2">
      <Input
        label={"School Name"}
        type={"text"}
        name={"school"}
        value={data.school}
        onChange={(e) => onChange("school", e.target.value)}
      />
      <Input
        label={"Degree"}
        type={"text"}
        name={"degree"}
        value={data.degree}
        onChange={(e) => onChange("degree", e.target.value)}
      />
      <Input
        label={"Starting Date"}
        type={"text"}
        name={"startDate"}
        value={data.startDate}
        onChange={(e) => onChange("startDate", e.target.value)}
        placeholder={"e.g. Nov 2021"}
      />
      <Input
        label={"Ending Date"}
        type={"text"}
        name={"endDate"}
        value={data.endDate}
        onChange={(e) => onChange("endDate", e.target.value)}
        placeholder={"e.g. Dec 2023"}
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
