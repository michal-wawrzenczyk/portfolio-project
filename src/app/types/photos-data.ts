import { Provinces } from "../components/main/filter/province";

export interface PhotosData {
  author: string;
  species: string;
  category: string;
  photoUrl: string;
  photoId: number;
  uploadTimeStamp: number;
  description?: string;
  location?: {
    lat: number;
    lon: number;
    city: string;
    province: Provinces;
  };
}
