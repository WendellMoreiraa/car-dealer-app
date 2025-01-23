"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import MakesDropdown from "@/components/makesDropdwon";
import Header from "@/components/header";

const FilterPage = () => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [isNextEnabled, setIsNextEnabled] = useState(false);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2014 }, (_, i) => 2015 + i);

  const handleMakeChange = (make: string) => {
    setSelectedMake(make);
    setIsNextEnabled(!!make && !!selectedYear);
  };

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    setIsNextEnabled(!!selectedMake && !!year);
  };

  return (
    <main className="p-6">
      <Header />
      <section className="h-[500px] bg-hero-pattern bg-cover bg-center backdrop-filter rounded-lg ">
        <div className="h-full w-full bg-cyan-600 opacity-60 items-center justify-center flex  rounded-lg ">
          <div className="flex flex-col items-center justify-center w-full ">
            <h1 className="text-2xl font-bold mb-6 text-black">
              Car Dealer App
            </h1>
            <div className="flex gap-4 border-none flex-wrap p-4">
              <Suspense fallback={<div>Loading makes...</div>}>
                <MakesDropdown
                  selectedMake={selectedMake}
                  onChange={handleMakeChange}
                />
              </Suspense>
              <select
                className="px-4 py-2 border-gray-900 text-black rounded-md"
                value={selectedYear}
                onChange={(e) => handleYearChange(e.target.value)}
              >
                <option value="">Select a model year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <Link href={`/result/${selectedMake}/${selectedYear}`} passHref>
                <button
                  className={`px-4 py-2 rounded-md ${
                    isNextEnabled
                      ? "bg-black text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={!isNextEnabled}
                >
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FilterPage;
