import { articles } from "@/utils/data";
import { CreateArticleDto } from "@/utils/dtos";
import { Articles } from "@/utils/types";
import { createArticleSchema } from "@/utils/validationSchema";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
/**
 *@method GET
 * @route ~/api/articles
 * @desc  add in postman request
 * @access public
 */

export function GET(request: NextRequest) {
  console.log(request);
  //response reply on request
  return NextResponse.json(articles, { status: 200 }); //http response
}

//-----------
// for read only
//http method
//will pass ready data if want to create i will use POST
//-----------------------

/**
 *@method POST
 * @route ~/api/articles
 * @access public
 */

export async function POST(request: NextRequest) {
  const body = (await request.json()) as CreateArticleDto; //cuz type of body any and we shouldn't use any in type script so i have to create object with parameters to save data inside it as a value
  //  const body: CreateArticleData = await request.json(); same result

  //   if (
  //     //instead of writing this long code we can use library for validation like Zod
  //     body.title === "" ||
  //     body.body.length > 2 ||
  //     typeof body.title !== "string"
  //   ) {
  //     return NextResponse.json({ message: "title is required" }, { status: 400 });
  //   }

  const validation = createArticleSchema.safeParse(body); //validation implement on when by sageParse select object to validate

  if (!validation.success) {
    return NextResponse.json(
      { message: validation.error.errors[0].message },
      { status: 400 }
    );
  }

  const newArticle: Articles = {
    title: body.title,
    body: body.body,
    id: articles.length + 1,
    userId: uuid(),
  };

  articles.push(newArticle);

  return NextResponse.json(newArticle, { status: 201 });
}
