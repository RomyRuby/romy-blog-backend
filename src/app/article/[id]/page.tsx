import { getArticle } from "@/api/data";
import React from "react";
type params = {
  id: string;
};
const Article = async ({ params }: { params: params }) => {
  const res = await getArticle(params.id);
  return (
    <div>
      <div>{res.data.title}</div>
      <div>{res.data.content}</div>
    </div>
  );
};

export default Article;
