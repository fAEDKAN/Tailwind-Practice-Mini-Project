import Bubble from "/components/Icons/Bubble.jsx";

export default function Home() {
  return (
    <>
      <div className="flex items-center max-w-sm p-6 mx-auto my-0 bg-white rounded-lg shadow-xl">
        <div className="flex-shrink-0">
          <picture className="w-12 h-12">
            <Bubble />
          </picture>
        </div>
        <div className="pt-1 ml-6">
          <div className="text-xl text-gray-900">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
      <button className="px-4 py-2 text-white transition-all rounded shadow-md bg-gradient-to-r from-azure-radiance-500 to-azure-radiance-800 active:translate-y-1 focus:ring-2 hover:bg-azure-radiance-300 active:transform">
        Este es el mejor botón!
      </button>
    </>
  );
}
