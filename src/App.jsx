import { ALL_MOVIES } from "./data/movies";

/*
 This is an Icon that you can use to represent the stars if you like.
 Otherwise, you could use a simple ⭐️ emoji, or * character.
*/
import { StarIcon } from "@heroicons/react/24/solid";

export default function App() {
  const movies = ALL_MOVIES.items; 
  
 const movielist = movies.map( (movie) => {
  function showRating(rating) {
    rating = Math.round(rating);
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<StarIcon className="h-6 w-6 text-yellow-400" />);
    }
    if (rating < 5) {
      for (let i = rating; i < 5; i++) {
        stars.push(<StarIcon className="h-6 w-6 text-gray-300" />);
      }
    }
    return stars;
  }

    
    return (<div className="movie-item" key={movie.id}>
          <div className="movie-item-image-wrapper">
            <img src={movie.image} />
          </div>
          <div className="movie-item-content-wrapper">
              <div className="movie-item-title-wrapper">
                <h1 className="movie-item-title">
                  {movie.name}
                </h1>
              </div>
              <div className="movie-item-genres-wrapper">
                {movie.genres.map((tag)=> {
                  return (<div className="movie-item-genre-tag">
                    {tag}
                  </div>)
                })}
                
              </div>
              <div className="movie-item-description-wrapper">
                <div className="movie-item-description">
                  {movie.description}

                </div>
              </div>
              <div className="movie-item-rating-wrapper ">
                <div className="movie-item-rating-text">
                  Rating: {movie.rating}/5
                </div>
                <div className="movie-item-star-icon-wrapper">
                  
                    {showRating(movie.rating)}
                 
                </div>
              </div>
          </div>
        </div>)
 })


 
  return (
    <div className="app">
      <div className="movie-list">
       {movielist}
      </div>
    </div>
  );
}
