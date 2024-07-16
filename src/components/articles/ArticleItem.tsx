import Link from "next/link";
import React from "react";
import { Articles } from "../../utils/types";

interface ArticlesProps {
  article: Articles;
}

export default function ArticleItem({ article }: ArticlesProps) {
  return (
    <div
      key={article.id}
      className="shadow bg-white transition-all duration-300 grid gap-2 p-3"
    >
      <h1 className="font-semibold text-xl line-clamp-1">{article.title} </h1>
      <p className="text-gray-400 text-sm line-clamp-2">{article.body}</p>
      <Link
        href={`/articles/${article.id}`}
        className="bg-secondary rounded text-center hover:bg-opacity-90 text-dark px-2 py-1 w-full"
      >
        Read more
      </Link>
    </div>
  );
}
