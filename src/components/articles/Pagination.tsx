import React from "react";

const Pagination = () => {
  const pagination = [1, 2, 3, 4];
  return (
    <div className="flex">
      <button className="border bg-white p-2 px-4 hover:bg-slate-100 rounded-tl rounded-bl">
        Previews
      </button>
      <div className="flex">
        {pagination.map((i) => (
          <button
            key={i}
            className="border bg-white p-2 px-4 hover:bg-slate-100"
          >
            {i}
          </button>
        ))}
      </div>
      <button className="border bg-white p-2 px-4 hover:bg-slate-100 rounded-tr rounded-br">
        Next
      </button>
    </div>
  );
};

export default Pagination;
