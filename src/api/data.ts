import request from "@/utils/request";
import { Article } from "@/types/article";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

type ArticleParams = AxiosRequestConfig & { params: Article }

// interface articleParams extends AxiosRequestConfig {
//   title: string,
//   content: string
// }


export function getArticleList() {
  return request.get(`http://localhost:8080/articles`);
}


export function getArticle(id: string) {
  return request.get('http://localhost:8080/article/' + id)
}



export function saveArticle(params: Article) {
  return request.post('http://localhost:8080/articles', params)
}


export function deleteArticle(id: string): Promise<{ success: Boolean }> {
  return request.delete('http://localhost:8080/article/' + id)
}