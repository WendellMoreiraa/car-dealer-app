"use client";

import { useEffect, useState } from "react";

interface MakesDropdownProps {
  selectedMake: string;
  onChange: (make: string) => void;
}
interface Make {
  MakeId: number;
  MakeName: string;
}

const MakesDropdown = ({ selectedMake, onChange }: MakesDropdownProps) => {
  const [makes, setMakes] = useState<Make[]>([]);

  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const response = await fetch(
          "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
        );
        const data = await response.json();
        setMakes(data.Results);
      } catch (error) {
        console.error("Failed to fetch makes", error);
      } finally {
      }
    };

    fetchMakes();
  }, []);

  return (
    <select
      className="px-4 py-2 border-gray-900 text-black rounded-md w-full max-w-[400px]"
      value={selectedMake}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Select a vehicle make</option>
      {makes.map((make) => (
        <option key={make.MakeId} value={make.MakeId}>
          {make.MakeName}
        </option>
      ))}
    </select>
  );
};

export default MakesDropdown;
