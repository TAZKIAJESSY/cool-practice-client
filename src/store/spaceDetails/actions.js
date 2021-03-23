import axios from "axios";
import { apiUrl } from "../../config/constants";

export const spaceDetailsFetched = (data) => {
  return { type: "spaceDetails/spaceDetailsFetched", payload: data };
};

export const fetchSpaceById = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/spaces/${id}`);
    console.log("details space", response);
    const data = response.data.space;
    dispatch(spaceDetailsFetched(data));
  } catch (e) {
    console.log(e.message);
  }
};
