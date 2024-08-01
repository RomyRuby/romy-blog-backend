"use client";
import React, { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, Upload } from "antd";
import { savePhoto, getPhotos, deletePhoto } from "@/api/data";
import { Image } from "antd";
import { Photo } from "@/types/photo";
import "./page.scss";

const props: UploadProps = {
  name: "file",
  action: "",
  headers: {
    authorization: "authorization-text",
  },
  beforeUpload: async (info) => {
    const params = new FormData();
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
    };
    params.append("fileName", "test.png");
    params.append("file", info);
    await savePhoto(params, config);
  },
};

const PhotoItems: React.FC = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await getPhotos();
      setList(res.data.list);
    }
    fetchData();
  }, []);

  const handleClick = async (file: Photo) => {
    const res = await deletePhoto(file._id);
  };

  const List = list.map((item: Photo) => {
    return (
      <div className="photo-item" key={item._id}>
        <div>
          <Image src={item.imageAddress} alt="" />
        </div>
        <div onClick={() => handleClick(item)}>删除</div>
      </div>
    );
  });

  return List;
};

const App: React.FC = () => {
  return (
    <>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      <div className="photo-list">
        <PhotoItems />
      </div>
    </>
  );
};

export default App;
