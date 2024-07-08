import React from "react";

interface ProductsPageProps {
  params?: {
    products?: string[];
  };
}

export default function Page({ params }: ProductsPageProps) {
  return (
    <div>
      Products page
      <ul>
        {params?.products?.map((route) => (
          <li>{route} </li>
        ))}
      </ul>
    </div>
  );
}
