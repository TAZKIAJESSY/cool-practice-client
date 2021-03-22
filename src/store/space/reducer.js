const initialState = {
  spaces: [],
};

export default function spaceReducer(state = initialState, action) {
  switch (action.type) {
    case "space/fetchSpacesSuccess": {
      return {
        spaces: [...state.spaces, ...action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
