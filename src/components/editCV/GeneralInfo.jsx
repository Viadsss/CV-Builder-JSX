import Input from "../forms/Input";

export default function GeneralInfo({ data, onChange }) {
  return (
    <div className="flex flex-col justify-center gap-y-4 rounded-lg border bg-white p-6 shadow-md">
      <Input
        label={"First Name"}
        type={"text"}
        name={"firstName"}
        value={data.firstName}
        onChange={(e) => onChange("firstName", e.target.value)}
      />
      <Input
        label={"Last Name"}
        type={"text"}
        name={"lastName"}
        value={data.lastName}
        onChange={(e) => onChange("lastName", e.target.value)}
      />
      <Input
        label={"Profession"}
        type={"text"}
        name={"profession"}
        value={data.profession}
        onChange={(e) => onChange("profession", e.target.value)}
        placeholder={"e.g. Data Scientist"}
      />
      <Input
        label={"City and Country"}
        type={"text"}
        name={"location"}
        value={data.location}
        onChange={(e) => onChange("location", e.target.value)}
        placeholder={"e.g. Quezon City, Philippines"}
      />
      <Input
        label={"Phone Number"}
        type={"text"}
        name={"phoneNumber"}
        value={data.phoneNumber}
        onChange={(e) => onChange("phoneNumber", e.target.value)}
        placeholder={"e.g. +639203179125"}
      />
      <Input
        label={"Email"}
        type={"email"}
        name={"email"}
        value={data.email}
        onChange={(e) => onChange("email", e.target.value)}
        placeholder={"e.g. johndoe@gmail.com"}
      />
      <Input
        label={"Website"}
        type={"text"}
        name={"website"}
        value={data.website}
        onChange={(e) => onChange("website", e.target.value)}
        placeholder={"e.g. www.yourwebsite.com"}
      />
    </div>
  );
}
