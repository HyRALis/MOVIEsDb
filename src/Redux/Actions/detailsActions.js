import * as actionTypes from "./actionTypes";

export const setParams = (id, itemType) => async (dispatch) => {
  dispatch({
    type: actionTypes.setUrlParams,
    payload: { id, itemType },
  });
};

export const itemMovies = (movieId) => async (dispatch) => {
  const key = "a7bc4dc45ae0ba1dc816316bb6356b0d";
  const itemData = {
    itemInfo: {},
    itemCredits: {},
    recomended: [],
  };

  const fetchedItemInfo = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`
  );
  itemData.itemInfo = await fetchedItemInfo.json();

  const fetchedItemCredits = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}`
  );
  itemData.itemCredits = await fetchedItemCredits.json();

  const fetchedRedomended = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}`
  );

  const recomendations = await fetchedRedomended.json();

  recomendations.results &&
    recomendations.results.forEach((movie) => {
      movie.media_type = "movie";
    });
  itemData.recomended = recomendations.results;

  await dispatch({
    type: actionTypes.fetchItemMovies,
    payload: itemData,
  });
};

export const itemSeries = (seriesId) => async (dispatch) => {
  const key = "a7bc4dc45ae0ba1dc816316bb6356b0d";
  
  const itemData = {
    itemInfo: {},
    itemCredits: {},
    recomended: [],
  };

  const fetchedItemInfo = await fetch(
    `https://api.themoviedb.org/3/tv/${seriesId}?api_key=${key}&language=en-US`
  );
  itemData.itemInfo = await fetchedItemInfo.json();

  const fetchedItemCredits = await fetch(
    `https://api.themoviedb.org/3/tv/${seriesId}/credits?api_key=${key}&language=en-US`
  );
  itemData.itemCredits = await fetchedItemCredits.json();

  const fetchedRedomended = await fetch(
    `https://api.themoviedb.org/3/tv/${seriesId}/recommendations?api_key=${key}&language=en-US&page=1`
  );
  const recomendations = await fetchedRedomended.json();
  recomendations.results &&
    recomendations.results.forEach((series) => {
      series.media_type = "tv";
    });
  itemData.recomended = recomendations.results;

  await dispatch({
    type: actionTypes.fetchItemSeries,
    payload: itemData,
  });
};

export const activeDetails = () => (dispatch) => {
  dispatch({
    type: actionTypes.details,
    payload: actionTypes.details,
  });
};
