import { NextRequest, NextResponse } from "next/server";
import { articles } from "@/utils/data";
import { UpdateArticleDto } from "@/utils/dtos";

interface Props {
  params: { id: string };
}

/**
 *@method GET
 * @route ~/api/articles/:id
 * @desc  add in postman request
 * @access public
 */

export function GET(request: NextRequest, { params }: Props) {
  const article = articles.find((a) => a.id === parseInt(params.id)); //parseInt change string to number
  if (!article) {
    return NextResponse.json({ message: "article not found" }, { status: 404 });
  }
  return NextResponse.json(article, { status: 200 });
}
/**
 *@method PUT
 * @route ~/api/articles/:id
 * @desc  update article
 * @access public
 */
export async function PUT(request: NextRequest, { params }: Props) {
  const article = articles.find((a) => a.id === parseInt(params.id)); //parseInt change string to number
  if (!article) {
    return NextResponse.json({ message: "article not found" }, { status: 404 });
  }
  const body = (await request.json()) as UpdateArticleDto;
  console.log(body); //cuz we didn't have code base to save data
  return NextResponse.json({ message: "article updated" }, { status: 200 });
}

/**
 *@method DELETE
 * @route ~/api/articles/:id
 * @desc  delete article
 * @access public
 */

export function DELETE(request: NextRequest, { params }: Props) {
  const article = articles.find((a) => a.id === parseInt(params.id)); //parseInt change string to number
  if (!article) {
    return NextResponse.json({ message: "article not found" }, { status: 404 });
  }
  return NextResponse.json({ message: "article deleted " }, { status: 200 });
}
