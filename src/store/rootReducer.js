import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import spaceReducer from "./space/reducer";
import spaceDetailsReducer from "./spaceDetails/reducer";

export default combineReducers({
  appState,
  user,
  space: spaceReducer,
  spaceDetails: spaceDetailsReducer,
});
