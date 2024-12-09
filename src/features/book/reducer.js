export const GET_BOOKS = "BOOK.GET_BOOKS";
export const ADD_FAVORITE = "BOOK.ADD_FAVORITE";
export const REMOVE_FAVORITE_SUCCESS = "BOOK.REMOVE_FAVORITE_SUCCESS";

const innitialState = {
  isLoading: false,
  error: null,
  bookList: [],
  favoriteList: [],
};

const bookReducer = (state = innitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BOOKS:
      return { ...state, bookList: payload };
    case ADD_FAVORITE:
      return { ...state, favoriteList: payload };
    case REMOVE_FAVORITE_SUCCESS:
      return {
        ...state,
        favoriteList: state.favoriteList.filter(
          (favorite) => favorite.id !== payload
        ),
      };
    default:
      return state;
  }
};

export default bookReducer;
