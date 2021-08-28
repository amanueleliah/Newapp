import React from "react";
import PropTypes from "prop-types";
import Pill from "../pill/Pill";
import "./MovieDetails.css";

const MovieDetails = (props) => {
  return (
    <div className="movie-details-container">
      <div className="movie-detaile-section">
        <img src={props.posterUrl} alt={props.title} />
      </div>
      <div className="movie-detaile-section">
        <div className="movie-detaile-header">
          <p className="movie-details-title">{props.title}</p>
          <p className="movie-detaile-rating">{props.rating}</p>
        </div>
        <div className="movie-details-pills">
          <Pill>{props.rated}</Pill>
          <Pill>{props.runtime} min</Pill>
          <Pill>{props.genre}</Pill>
        </div>
        <div className="movie-details-subsection">
          <p>Plot</p>
          <p>{props.plot}</p>
        </div>
        <div className="movie-details-subsection">
          <p>Actors</p>
          <p> {props.actors} </p>
        </div>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  posterUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rated: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  plot: PropTypes.string.isRequired,
  actors: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieDetails;
