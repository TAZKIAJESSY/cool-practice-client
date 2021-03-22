import { apiUrl } from "../../config/constants";
import axios from "axios";

export const fetchSpacesSuccess = (spaceList) => ({
  type: "space/fetchSpacesSuccess",
  payload: spaceList,
});

export async function fetchSpaces(dispatch, getState) {
  try {
    const spaces = getState().space.spaces;
    if (!spaces.length) {
      const response = await axios.get(`${apiUrl}/spaces`);
      console.log("after api call space", response);
      const spaceList = response.data;
      dispatch(fetchSpacesSuccess(spaceList));
    }
  } catch (e) {
    console.log(e.message);
  }
}

// 1. its two function because of the thunk
// 2. we have an API call in this function
// 3. Instead of asserting on a return, we have to do so on a function call (dispatch).
