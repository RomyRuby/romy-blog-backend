import { title } from "process";
import { Post } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Fail to fetch posts!");
  }
};

export const getPost = async (slug) => {
  noStore();
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Fail to fetch post!");
  }
};

export const savePost = async ({ title, content, slug }) => {
  noStore();
  try {
    connectToDb();
    const post = await Post.create({ title, content, slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Fail to save post!");
  }
};