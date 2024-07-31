"use client";
import { getArticle } from "@/api/data";
import Markdown from "@/components/markdown";

import React, { useEffect, useState } from "react";
type params = {
  id: string;
};
type Article = {
  _id?: string;
  content: string;
  title: string;
  created?: string;
  updated?: string;
};

const Article = ({ params }: { params: params }) => {
  const [article, setArticle] = useState<Article>({ title: "", content: "" });
  useEffect(() => {
    async function fetchData() {
      const res = await getArticle(params.id);
      setArticle(res.data);
    }
    fetchData();
  });
  return (
    <div>
      <div>{article.title}</div>
      <Markdown content={article.content} />
    </div>
  );
};

export default Article;
