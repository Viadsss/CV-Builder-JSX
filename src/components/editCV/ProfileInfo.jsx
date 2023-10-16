export default function ProfileInfo({ onChangeProfilePicture, previewUrl }) {
  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChangeProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="flex flex-col justify-center gap-y-4 rounded-lg border bg-white p-6 shadow-md">
      <div className="flex flex-col items-center gap-y-4">
        <input
          className="cursor-pointer rounded bg-blue-200 p-2 text-sm
            file:rounded-md
            file:border-none
            file:bg-accent
            file:px-4
            file:py-1
            file:font-poppins
          file:text-white"
          type="file"
          id="profile-picture"
          accept="image/*"
          onChange={handleFileChange}
        />
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Profile Picture"
            className="h-32 w-32 rounded-full border bg-white p-2 shadow-lg"
          />
        ) : (
          <div className="h-32 w-32 rounded-full border bg-white p-2 shadow-lg"></div>
        )}
      </div>
    </div>
  );
}
