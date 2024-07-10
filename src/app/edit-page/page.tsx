import React from "react";
import { Metadata } from "next";
import InputArticle from "./components/input-article/index";
import { saveArticle } from "@/api/data";
import { Article } from "@/types/article";
import "./page.scss";

export const metadata: Metadata = {
  title: "文章管理",
  description: "文章管理",
};

const EditPage = async () => {
  return (
    <>
      <div className="main">
        <InputArticle />
      </div>
    </>
  );
};

export default EditPage;
