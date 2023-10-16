export default function Header({
  onFillExampleCV,
  onClearCV,
  onTogglePreview,
}) {
  return (
    <header className="sticky top-0 bg-white shadow-md">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between p-4 lg:flex-row">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-3xl font-bold">CV Builder</h1>
          <p>
            Made by{" "}
            <a
              className=" font-bold text-accent underline hover:text-primary"
              href="https://bio.link/viads"
            >
              Viads
            </a>
          </p>
        </div>
        <div className="flex justify-around font-oneSans font-bold">
          <button
            className="px-4 py-3 transition hover:text-accent hover:underline"
            onClick={() => onTogglePreview("edit")}
          >
            Edit CV
          </button>
          <button
            className="px-4 py-3 transition hover:text-primary hover:underline"
            onClick={() => onTogglePreview("preview")}
          >
            Preview CV
          </button>
          <button
            className="px-4 py-3 transition hover:text-accent hover:underline"
            onClick={() => {
              const userAnswer = window.confirm(
                "Are you sure you want to clear all of the data of your CV?",
              );
              if (userAnswer) onClearCV();
            }}
          >
            Clear CV
          </button>
          <button
            className="rounded px-4 py-3 font-bold text-accent transition hover:bg-primary hover:text-white"
            onClick={() => {
              const userAnswer = window.confirm(
                "Are you sure you want to load the Example CV? This will erase the data you have entered and this can't be undone.",
              );
              if (userAnswer) onFillExampleCV();
            }}
          >
            Fill Example CV
          </button>
        </div>
      </div>
    </header>
  );
}
