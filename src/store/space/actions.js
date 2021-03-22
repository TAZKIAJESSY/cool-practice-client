import { apiUrl } from "../../config/constants";
import axios from "axios";

export const fetchSpacesSuccess = (spaceList) => ({
  type: "space/fetchSpacesSuccess",
  payload: spaceList,
});

export const fetchSpaces = () => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/`);
    console.log("after api call space", response);
    const spaceaList = response.data;
    dispatch(fetchSpacesSuccess(spaceaList));
  };
};

// 1. its two function because of the thunk
// 2. we have an API call in this function
// 3. Instead of asserting on a return, we have to do so on a function call (dispatch).
