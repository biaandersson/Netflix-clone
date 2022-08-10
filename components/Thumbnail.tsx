import React from 'react';
import { Movie } from '../types';
import { NextPage } from 'next';
import Image from 'next/image';

interface Props {
  /* Add DocumentData once you fetch from Firebase
   * @movie: Movie | DocumentData;
   */
  movie: Movie;
}

const Thumbnail: NextPage<Props> = ({ movie }) => {
  const baseURL = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>
      <Image
        src={`${baseURL}${movie.backdrop_path || movie.poster_path}`}
        className='rounded-sm object-cover md:rounded'
        layout='fill'
      />
    </div>
  );
};

export default Thumbnail;
