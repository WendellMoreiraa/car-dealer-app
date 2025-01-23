"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
interface VehicleModel {
  Model_Name: string;
  Make_Name: string;
}
const VehicleModels = () => {
  const params = useParams<{ makeId: string; year: string }>();
  const [models, setModels] = useState<VehicleModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params.makeId || !params.year) return;

    const fetchModels = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${params.makeId}/modelyear/${params.year}?format=json`
        );
        const data = await response.json();
        setModels(data.Results);
      } catch (error) {
        console.error("Failed to fetch models", error);
      } finally {
        setLoading(false);
      }
    };

    fetchModels();
  }, [params.makeId, params.year]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {models.length > 0 ? (
        models.map((model, index) => (
          <div
            key={index}
            className="flex justify-center items-center h-[400px] w-52 bg-white shadow-md rounded-md p-4 cursor-pointer text-black transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <div>
              <p className="py-2">Model: {model.Model_Name}</p>
              <p>Make: {model.Make_Name}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center py-2">No models found</p>
      )}
    </>
  );
};

export default VehicleModels;
