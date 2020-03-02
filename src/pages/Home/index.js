import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  Grid,
  TextField,
  Button
} from '@material-ui/core';
import { MovieIcon } from '../../icons';
import styles from './style';

export default ({ history }) => {
  const [searchText, setSearchText] = useState('');
  const classes = styles();
  const handleSearchTextChange = e => {
    setSearchText(e.target.value);
  };

  const handleSearchText = e => {
    history.push(`/results?movieName=${searchText}`);
  };

  const handleClearText = e => {
    setSearchText('');
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Welcome</Typography>
          </Grid>
          <Grid>
            <label>
              <MovieIcon className={classes.movieIcon} />
            </label>
          </Grid>
        </Grid>
        <TextField
          value={searchText}
          placeholder='Enter your search term'
          className={classes.textField}
          onChange={handleSearchTextChange}
        />
        <Grid className={classes.buttonsContainer}>
          <Button variant='contained' onClick={handleClearText}>
            Clear
          </Button>
          <Button
            variant='contained'
            color='primary'
            size='large'
            onClick={handleSearchText}
            className={classes.searchButton}
          >
            Search
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};
