"use client";
import React, { useEffect, useState } from "react";
import ArticleItem from "@/components/articles/ArticleItem";
import { Articles } from "@/components/utils/types";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";

export default function page() {
  const [articles, setArticles] = useState<Articles[]>([]);
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("there is issue with articles page");
    }
    const data: Articles[] = await response.json();
    setArticles(data.slice(0, 12));
    setShowMore(true);
    setLoading(false);
  };

  const loadMore = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: Articles[] = await response.json();
    setArticles((prevItem) => [
      ...prevItem,
      ...data.slice(prevItem.length, prevItem.length + 12),
    ]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      {/* <h1 className="text-4xl font-serif font-semibold capitalize">
        main Articles
      </h1> */}
      {loading ? (
        <p className="text-center text-2xl text-secondary">loading....</p>
      ) : (
        <div className="grid lg:grid-cols-4 items-start gap-12">
          {/* {fetchData.map((i: any) => ( instead of using any we can replace it with type Articles  */}

          {articles.map((i) => (
            <ArticleItem article={i} key={i.id} />
          ))}
        </div>
      )}
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
    </div>
  );
}
