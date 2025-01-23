import Header from "@/components/header";
import Loading from "@/components/loading";
import VehicleModels from "@/components/vehiclesModels";
import { Suspense } from "react";

const ResultPage = () => {
  return (
    <main>
      <Header />
      <section className="p-6 flex justify-center items-center h-screen flex-wrap gap-4 ">
        <Suspense fallback={<Loading />}>
          <VehicleModels />
        </Suspense>
      </section>
    </main>
  );
};

export default ResultPage;
