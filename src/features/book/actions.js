// import React from "react";
import { GET_BOOKS, ADD_FAVORITE, REMOVE_FAVORITE_SUCCESS } from "./reducer";
import api from "../../apiService";

export const getBooks =
  (pageNum = 1, limit = 10, query = "") =>
  async (dispatch) => {
    try {
      let url = `/books?_page=${pageNum}&_limit=${limit}`;
      if (query) url += `&q=${query}`;
      const res = await api.get(url);
      dispatch({ type: GET_BOOKS, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

export const getFavorites = () => async (dispatch) => {
  try {
    let url = `/favorites`;
    const res = await api.get(url);
    dispatch({ type: ADD_FAVORITE, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const removeFavorite = (removedBookId) => async (dispatch) => {
  if (!removedBookId) return;
  try {
    let url = `/favorites/${removedBookId}`;
    await api.delete(url);
    dispatch({ type: REMOVE_FAVORITE_SUCCESS, payload: removedBookId });
  } catch (error) {
    console.log(error);
  }
};
