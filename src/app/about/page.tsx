import Image from "next/image";
import React from "react";

async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div className="grid gap-3 lg:p-12 p-4 lg:grid-cols-2 items-center lg:gap-12">
      <div className="flex flex-col gap-1 lg:gap-3">
        <h1 className="text-3xl font-serif font-bold">About This Project</h1>
        <h3 className="text-xl text-secondary">Next js</h3>
        <p className="text-main">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          unde dolor similique ipsam ipsa, sunt eum facilis impedit reiciendis
          fugiat aspernatur? Aut, recusandae consectetur! Expedita debitis
          impedit facere eligendi repellat.
        </p>
        <button className="bg-secondary text-slate-50 hover:bg-opacity-85 rounded px-6 py-2 w-52">
          click here for more
        </button>
      </div>
      <div>
        <Image
          src={
            "https://images.unsplash.com/photo-1588859959601-12d5ecb1b354?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="image"
          priority
          width={1772}
          height={1181}
          className="h-[300px] w-full rounded-2xl shadow-xl"
        />
      </div>
    </div>
  );
}

export default Page;
