import React from "react";

interface ProductsPageProps {
  params?: {
    products?: string[];
  };
}

function Page({ params }: ProductsPageProps) {
  return (
    <div>
      Products page
      <ul>
        {params?.products?.map((route) => (
          <li key={route}>{route}</li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
