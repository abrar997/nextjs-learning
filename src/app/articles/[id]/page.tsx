//name with [] means dynamic rout
import { Articles } from "@/components/utils/types";
import React from "react";

interface SingleArticleItem {
  params: {
    id: string;
  };
}

export default async function page({ params }: SingleArticleItem) {
  // const response = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${params.id}`
  // );

  // const item: Articles = await response.json();

  // if (!response.ok) {
  //   throw new Error("error with item");
  // }

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );

    const item: Articles = await response.json();

    return (
      <div>
        <section className="p-4 lg:mx-16 mt-6 shadow-xl grid gap-4 bg-[#363636bf]">
          <div className="flex gap-12 items-center">
            <h1 className="text-lg text-secondary">{item.title}</h1>
            <h1 className="text-sm text-gray-400 border-b">20/5/2024</h1>
          </div>
          <h1 className="text-gray-200">20/5/2024</h1>
          <p>{item.body}</p>
        </section>
      </div>
    );
  } catch {
    throw new Error("error with item");
  }
}
// return (
// <section className="p-4 lg:mx-16 mt-6 shadow-xl grid gap-4 bg-[#363636bf]">
//   <div className="flex gap-12 items-center">
//     <h1 className="text-lg text-secondary">{item.title}</h1>
//     <h1 className="text-sm text-gray-400 border-b">20/5/2024</h1>
//   </div>
//   <h1 className="text-gray-200">20/5/2024</h1>
//   <p>{item.body}</p>
// </section>
// );
// }
//
