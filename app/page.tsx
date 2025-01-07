import Form from "@/components/form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen max-h-full">
      <div className="bg-white w-[502px] h-full">
        <Form />
      </div>
      <div className="bg-white flex-1"></div>
    </main>
  );
}
