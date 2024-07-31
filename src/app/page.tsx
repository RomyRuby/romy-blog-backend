"use client";
import React from "react";
import Link from "next/link";

const Articles = () => {
  return (
    <>
      <Link href="/article">文章列表</Link>
      <br />
      <Link href="/edit-page">发布文章</Link>
      <br />
      <Link href="/upload-photo">上传图片</Link>
    </>
  );
};

export default Articles;
