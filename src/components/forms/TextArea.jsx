export default function TextArea({ label, name, value, onChange }) {
  const id = `${name}Textarea`;

  return (
    <>
      <label className="flex flex-col font-bold" htmlFor={id}>
        {label}
      </label>
      <textarea
        className=" min-h-[10rem] border-2 border-primary font-normal hover:bg-blue-100 focus:bg-blue-100"
        placeholder="E.g:&#10;- Working with the wider development team. &#10; -Manage website design, content, and SEO Marketing, Branding and Logo Design"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
