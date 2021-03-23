import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchSpaces } from "../store/space/actions";
import { selectSpace } from "../store/space/selectors";

export default function SpaceList() {
  const dispatch = useDispatch();
  const spaces = useSelector(selectSpace);

  useEffect(() => {
    dispatch(fetchSpaces);
  }, [dispatch]);

  return (
    <div>
      <h1>Spaces</h1>
      <br />
      {spaces.map((s, index) => {
        return (
          <div key={index}>
            <h2>{s.title}</h2>
            <p>
              {s.description}
              <br />
              <Link to={`/spaces/${s.id}`}>
                <button>Visit space</button>
              </Link>
            </p>
            <p>{s.backgroundColor}</p>
            <p>{s.color}</p>
          </div>
        );
      })}
    </div>
  );
}
