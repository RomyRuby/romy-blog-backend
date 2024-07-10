"use client";
import React, { useState } from "react";
import Markdown from "@/components/markdown";
import { Button, Input } from "antd";
import { saveArticle } from "@/api/data";
import "./index.scss";
import type { Article } from "@/types/article";
const { TextArea } = Input;

interface Props {
  // handleSave: (article: Article) => void;
}

const InputArticle = (props: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = async (params: Article) => {
    const res = await saveArticle(params);
    console.log(res);
  };

  const handleInputTitle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTitle(e.target.value);
  };

  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setContent(e.currentTarget.value);
  };

  return (
    <>
      <div className="page">
        <div className="page-header">
          <div className="page-title">
            <Input value={title} onChange={handleInputTitle}></Input>
          </div>
          <div className="save-button">
            <Button onClick={(e) => handleSave({ title, content })}>
              保存
            </Button>
          </div>
        </div>
        <div className="input-article">
          <div className="input">
            <TextArea
              value={content}
              onChange={handleInput}
              style={{ height: 120, resize: "none" }}
            />
          </div>

          <div className="article">
            <Markdown content={content} />
          </div>
        </div>
      </div>
    </>
  );
};

export default InputArticle;
