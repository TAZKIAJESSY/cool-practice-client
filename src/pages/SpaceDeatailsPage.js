import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchSpaceById } from "../store/spaceDetails/actions";
import { selectSpaceDetails } from "../store/spaceDetails/selectors";

export default function SpaceDetailsPage() {
  const { id } = useParams();
  const spaceData = useSelector(selectSpaceDetails);
  const dispatch = useDispatch();
  console.log("spaceData", spaceData);

  useEffect(() => {
    dispatch(fetchSpaceById(id));
  }, [dispatch, id]);

  return <div></div>;
}
