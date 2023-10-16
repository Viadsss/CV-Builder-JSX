export default function Input({ label, type, name, value, onChange, placeholder }) {
  return (
    <>
      <label className="font-bold flex flex-col">
        {label}
        <input className="border-primary border-2 font-normal hover:bg-blue-100 focus:bg-blue-100 p-1"
         type={type}
         name={name}
         value={value}
         onChange={onChange}
         placeholder={placeholder}
         />
      </label>
    </>
  );
}
