"use client";
import React, { useEffect, useState } from "react";
import ArticleItem from "@/components/articles/ArticleItem";
import { Articles } from "@/components/utils/types";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import Form from "@/components/reusable/Form";
import Pagination from "@/components/articles/Pagination";

function Page() {
  const [articles, setArticles] = useState<Articles[]>([]);
  const [showMore, setShowMore] = useState(false);
  // const [loading, setLoading] = useState(true);
  const [searchArticle, setSearchArticle] = useState("");

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("there is issue with articles page");
    }
    const data: Articles[] = await response.json();
    setArticles(data.slice(0, 12));
    setShowMore(true);
    // setLoading(false);
  };

  const loadMore = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: Articles[] = await response.json();
    setArticles((prevItem) => [
      ...prevItem,
      ...data.slice(prevItem.length, prevItem.length + 12),
    ]);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(searchArticle);
  };

  useEffect(() => {
    setTimeout(() => fetchData(), 90000);
  }, []);

  return (
    <div className="lg:p-12 py-4 grid lg:gap-6">
      <Form
        type="search"
        data={{ search: searchArticle, setSearch: setSearchArticle }}
        onSubmit={handleSubmit}
      />
      {/* <h1 className="text-4xl font-serif font-semibold capitalize">
        main Articles
      </h1> */}
      {/* instead of this loading we add loading.tsx to use it to all pages */}
      {/* {loading ? (
        <p className="text-center text-2xl text-secondary">loading....</p> */}
      {/* ) : ( */}
      <div className="grid lg:grid-cols-4 items-start gap-12">
        {/* {fetchData.map((i: any) => ( instead of using any we can replace it with type Articles  */}

        {articles.map((i) => (
          <ArticleItem article={i} key={i.id} />
        ))}
      </div>
      {/* )} */}
      {showMore && (
        <div className="flex items-center justify-center mt-3 lg:mt-12">
          <button
            className="text-secondary shadow-md rounded border text-xl px-6 py-1"
            onClick={loadMore}
          >
            <TbLayoutSidebarRightExpand />
          </button>
        </div>
      )}
      <div className="flex items-center justify-center">
        <Pagination />
      </div>
    </div>
  );
}

export default Page;

//u can't use metadata with use client u can import use client in other file and use file with meta data
// export const metadata: Metadata = {
//   title: "Article Dashboard",
//   description: "this is articles page",
// };
