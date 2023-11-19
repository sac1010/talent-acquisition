"use client";
import Availability from "@/components/Availability";
import DetailsCollection from "@/components/DetailsCollection";
import DocumentCollection from "@/components/DocumentCollection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Statement from "@/components/Statement";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState(0);
  const handleNext = () => {
    setSelected((prev) => prev + 1);
  };
  const tabs = [
    <DetailsCollection key={"details"} />,
    <DocumentCollection key={"documents"} />,
    <Statement key={"statements"} />,
    <Availability key={"availability"} />,
  ];
  return (
    <div className="w-full bg-gray-100 relative">
      <Navbar curSection={selected} />
      <Sidebar selected={selected} setSelected={setSelected} />
      <div className="w-4/6 absolute top-0 right-0">{tabs[selected]}</div>
      <div className="fixed bottom-0 w-full h-16 bg-white flex items-center justify-end px-6 border-t border-gray-300">
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white px-6 py-2 text-sm rounded-md border-black"
        >
          Next
        </button>
      </div>
    </div>
  );
}
