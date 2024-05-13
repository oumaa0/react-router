import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Description = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="description">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe width="560" height="315" src={movie.trailerLink} title={movie.title} frameBorder="0" allowFullScreen></iframe>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Description;