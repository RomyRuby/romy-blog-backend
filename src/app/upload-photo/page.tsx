"use client";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import { savePhoto } from "@/api/data";
import { headers } from "next/headers";

const props: UploadProps = {
  name: "file",
  action: "",
  headers: {
    authorization: "authorization-text",
  },
  // onChange(info) {
  //   if (info.file.status !== "uploading") {
  //     console.log(info.file, info.fileList);
  //   }
  //   if (info.file.status === "done") {`
  //     message.success(`${info.file.name} file uploaded successfully`);
  //   } else if (info.file.status === "error") {
  //     message.error(`${info.file.name} file upload failed.`);
  //   }
  // },
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

const App: React.FC = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
);

export default App;
