"use client";
import React, { useState } from "react";
import Markdown from "@/components/markdown";
import { Button, Input } from "antd";
import { savePost } from "@/lib/data";
import "./index.scss";
import { randomRange } from "../../../utils/randomRange";
const { TextArea } = Input;

const inputArticle = async () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setContent(e.currentTarget.value);
  };

  const handleSave = async () => {
    const params = { title, content, slug: randomRange(0, 10) };
    const res = await savePost(params);
    console.log(res);
  };

  return (
    <>
      <div className="page">
        <div className="save-button">
          <Button onClick={handleSave}>保存</Button>
        </div>
        <div className="input-article">
          <div className="input">
            <TextArea
              value={content}
              onChange={handleInput}
              placeholder="disable resize"
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

export default inputArticle;
