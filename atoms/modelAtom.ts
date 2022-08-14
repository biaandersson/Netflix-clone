import { atom } from 'recoil';
import { Movie } from '../types';
import firebase from 'firebase/compat';
import DocumentData = firebase.firestore.DocumentData;

export const modelState = atom({
  key: 'modelState',
  default: false,
});

export const movieState = atom<Movie | DocumentData | null>({
  key: 'movieState',
  default: null,
});
