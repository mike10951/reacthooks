import React, { useEffect } from 'react';
import { Container, CircularProgress, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { searchMovieById } from '../../redux/actions/search';
import { movieResult as movieResultSelector } from '../../redux/selectors';

export default ({ match }) => {
  const dispatch = useDispatch();
  const movieResult = useSelector(state => movieResultSelector(state));

  useEffect(() => {
    const movieId = match.params.id;

    if (!movieResult || (movieResult && movieResult.imdbID !== movieId))
      dispatch(searchMovieById({ movieId }));
  });
  if (!movieResult) return <CircularProgress size={50} color='primary' />;

  return (
    <Container>
      <Typography variant='h3'>{movieResult.Title} </Typography>
      <img src={movieResult.Poster} alt={movieResult.Title} />
      <Typography>
        <strong>Cast:</strong> {movieResult.Actors}
      </Typography>
      <Typography>
        <strong>Director(s):</strong> {movieResult.Director}
      </Typography>{' '}
      <Typography>
        <strong>Country:</strong> {movieResult.Country}
      </Typography>{' '}
      <Typography>
        <strong>Rating:</strong> {movieResult.Rated}
      </Typography>{' '}
      <Typography>
        <strong>Awards:</strong> {movieResult.Awards}
      </Typography>{' '}
      <Typography>
        <strong>Plot:</strong> {movieResult.Plot}
      </Typography>
    </Container>
  );
};
