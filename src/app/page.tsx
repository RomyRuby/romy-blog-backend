"use client";
import React, { useEffect, useState } from "react";
import { getArticleList, deleteArticle } from "@/api/data";
import Link from "next/link";
import { Article } from "@/types/article";

type post = {
  _id: string;
  content: string;
  title: string;
  created?: string;
  updated?: string;
  __v?: 0;
};

const Articles = () => {
  const [posts, setPosts] = useState([]);
  const fetchData = async () => {
    const res = await getArticleList();
    setPosts(res.data.list);
  };
  useEffect(() => {
    fetchData();
  }, []);
  //

  // 删除
  const handleDelete = async (id: string) => {
    const res = await deleteArticle(id);
    if (res.success) {
      fetchData();
    }
  };

  //渲染文章列表
  const Post = posts.map((item: post) => {
    return (
      <div key={item._id}>
        <Link href={"/article/" + item._id}>{item.title}</Link>
        <div onClick={(e) => handleDelete(item._id)}>删除</div>
      </div>
    );
  });

  return (
    <>
      <div>文章列表</div>
      <div>{Post}</div>
      <Link href="/edit-page">发布文章</Link>
    </>
  );
};

export default Articles;
