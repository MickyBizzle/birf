import { Formats } from "./Image";

export interface IComingSoon {
  data: Data;
  meta: Meta;
}
export interface Data {
  id: number;
  attributes: Attributes;
}
export interface Attributes {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image;
}
export interface Image {
  data: Data1;
}
export interface Data1 {
  id: number;
  attributes: Attributes1;
}
export interface Attributes1 {
  name: string;
  alternativeText: string;
  caption?: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: null;
  provider: string;
  provider_metadata?: null;
  createdAt: string;
  updatedAt: string;
}

export interface Meta {}
