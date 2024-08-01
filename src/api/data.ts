import request from "@/utils/request";
import { Article } from "@/types/article";
import { SignUp } from "@/types/user";
import { Photo } from "@/types/photo";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

type ArticleParams = AxiosRequestConfig & { params: Article }


type PhotoParams = AxiosRequestConfig & { params: Photo }

type Config = {
  headers: any
}

export function signUp(params: SignUp) {
  return request.post('http://localhost:8080/users/signUp', params)
}

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

export function savePhoto(params: FormData, config: Config) {
  return request.post('http://localhost:8080/photo', params, config)
}

export function getPhotos() {
  return request.get('http://localhost:8080/photos')
}

export function deletePhoto(id: string) {
  return request.delete('http://localhost:8080/photo/' + id)
}