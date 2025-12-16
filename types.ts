export interface ExpertProfile {
  name: string;
  role: string;
  location: string;
  whatsappLink: string;
  instagramLink: string;
}

export interface ImageAsset {
  url: string;
  alt?: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}