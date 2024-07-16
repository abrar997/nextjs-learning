"use client";
import React, { useEffect, useState } from "react";
import ArticleItem from "@/components/articles/ArticleItem";
import { Articles } from "@/utils/types";
import Form from "@/components/reusable/Form";
import Pagination from "@/components/articles/Pagination";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [searchArticle, setSearchArticle] = useState("");
  const [articles, setArticles] = useState<Articles[] | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data: Articles[] = await response.json();
      setArticles(data);

      if (!response.ok) {
        throw new Error("There is an issue with the articles page");
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // query string any thing you write it after ?
    console.log(router.push(`/articles/search?searchText=${searchArticle}`));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="lg:p-12 p-4 grid gap-3 lg:gap-6">
      <Form
        type="search"
        data={{ search: searchArticle, setSearch: setSearchArticle }}
        onSubmit={handleSubmit}
      />
      <div className="grid lg:grid-cols-4 items-start gap-12">
        {articles &&
          articles
            .slice(0, 12)
            .map((i) => <ArticleItem article={i} key={i.id} />)}
      </div>
      <div className="flex items-center justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default Page;

// You can't use metadata with "use client". You can import "use client" in another file and use the file with metadata.
// export const metadata: Metadata = {
//   title: "Article Dashboard",
//   description: "this is articles page",
// };
