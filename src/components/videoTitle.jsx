export default function VideoTitle({ title, overview }) {
  return (
    <div className="w-screen h-screen pt-[12%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black z-10">
      <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-xs md:text-sm w-1/4">{overview}</p>
      <div className="flex gap-2">
        <button className="bg-white text-black py-1 px-4 md:py-3 md:px-10 text-sm md:text-xl rounded-md hover:bg-opacity-80 transition">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white py-1 px-4 md:py-3 md:px-10 text-sm md:text-xl bg-opacity-50 rounded-md hover:bg-opacity-80 transition">
          More Info
        </button>
      </div>
    </div>
  );
}