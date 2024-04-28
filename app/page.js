"use client";
import Button from "@/components/Button";
import Bubble from "@/components/Icons/Bubble.jsx";

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
        {/*         <Button color="primary">Este es el mejor botón!</Button> */}
        <Button color="primary">
          Cambiar a modo oscuro!
        </Button>
      </div>
    </>
  );
}
