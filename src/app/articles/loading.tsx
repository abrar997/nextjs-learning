import Link from "next/link";

const Loading = () => {
  const articleItem = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="p-12 animate-pulse grid gap-12">
      <div className="shadow w-full rounded p-2 bg-gray-300 h-4 py-4" />

      <div className="grid lg:grid-cols-4 items-start gap-12">
        {articleItem.map((i) => (
          <div
            key={i}
            className="shadow bg-white transition-all duration-300 grid gap-4 p-4"
          >
            <h1 className="font-semibold bg-gray-300 h-6 line-clamp-1"></h1>
            <p className="bg-gray-300 line-clamp-2 h-6 text-xl"></p>
            <Link
              href=""
              className="bg-gray-400 rounded px-2 py-1 w-full h-5"
            ></Link>
          </div>
        ))}
      </div>
      <div className="rounded bg-gray-300 h-8 w-52 m-auto" />
    </div>
  );
};

export default Loading;
