import CommentForm from "@/components/articles/comments/CommentForm";
import CommentItem from "@/components/articles/comments/CommentItem";
import { Articles } from "@/utils/types";

//name with [] means dynamic rout
interface SingleArticleItem {
  params: {
    id: string;
  };
}

async function Page({ params }: SingleArticleItem) {
  // const response = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${params.id}`
  // );

  // const item: Articles = await response.json();

  // if (!response.ok) {
  //   throw new Error("error with item");
  // }

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`,
      {
        //we don't use cache when data updates quickly,
        // if it's fixed data when can use cache as memory to save data
        // cache: "no-store", //means next will send request always when open article page instead of save data in cache data
        //----------------
        //to make next make refresh to data we use
        next: { revalidate: 50 }, //means 50 second
      }
    );
    //يعني تكول لل next
    // كل مرة تدخل هذه الصفحة وتلخذ البيانات من API
    // احفظ الداتا بال cache data
    // ولكن كل 50 ثانية ارسل طلب للبياننات واعممل تحديث عليهة

    const item: Articles = await response.json();

    return (
      <div className="p-4 grid lg:gap-6 gap-4 m-4 lg:my-12 lg:mx-24">
        <div className="grid lg:gap-2 gap-4 lg:px-4 p-4 rounded lg:py-12 shadow  text-main bg-white">
          <div className="flex gap-12 items-center">
            <h1 className="text-lg text-secondary font-semibold">
              {item.title}
            </h1>
          </div>
          <h1 className="text-gray-300">20/5/2024</h1>
          <p>{item.body}</p>
        </div>

        <CommentForm />
        <div className="grid gap-3">
          <h1 className="font-semibold">Comments :</h1>
          <CommentItem />
        </div>
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

export default Page;
