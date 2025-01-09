import Form from "@/components/form";
import Invoice from "@/components/invoice";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-1 overflow-y-auto">
      <div className="bg-white w-[502px] h-full">
        <Form />
      </div>
      <div className="relative flex h-full flex-1 flex-col p-6 items-center">
        <div className="relative z-10 flex items-center">
          <div className="relative mx-auto flex h-[866px] min-h-[866px] w-[612.25px] bg-white rounded-[14px] origin-top flex-col">
            <Invoice />
          </div>
        </div>
        <div
          className="absolute inset-0 h-full w-full bg-repeat animate-maskAnimation"
          style={{ WebkitMaskImage: "url(/perlin-noise.png)" }}
        >
          <div className="absolute inset-0 bg-blue-dots"></div>
        </div>
      </div>
    </main>
  );
}
