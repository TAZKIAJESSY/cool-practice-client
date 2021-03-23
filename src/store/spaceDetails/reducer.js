const initialState = {
  stories: [],
};

export default function spaceDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case "spaceDetails/spaceDetailsFetched": {
      // stories: action.payload.stories,
      return { ...state, ...action.payload };
    }

    default: {
      return state;
    }
  }
}
