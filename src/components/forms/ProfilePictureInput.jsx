export default function ProfilePictureInput({ onchangeProfilePicture, previewUrl }) {
  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onchangeProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div>
      <label htmlFor="profile-picture">Profile Picture:</label>
      <input
        type="file"
        id="profile-picture"
        accept="image/*"
        onChange={handleFileChange}
      />
      {previewUrl && <img src={previewUrl} alt="Profile Picture" />}
    </div>
  );
}
