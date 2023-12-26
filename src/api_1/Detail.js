import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../component/Header';

function Detail() {
  const location = useLocation();
  const movie = location.state.movie;
  return (
    <>
      <Header />
      <div>asdf : {movie.title}</div>
      <div>asdf : {movie.poster_path}</div>
      <div>asdf : {movie.overview}</div>
    </>
  )
}

export default Detail