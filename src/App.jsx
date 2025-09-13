import { ALL_MOVIES } from "./data/movies";

/*
 This is an Icon that you can use to represent the stars if you like.
 Otherwise, you could use a simple ⭐️ emoji, or * character.
*/
import { StarIcon } from "@heroicons/react/24/solid";

export default function App() {
  const movies = ALL_MOVIES.items;

   
  
const movielist = movies.map( (movie) => {
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
                  return (<div className="movie-item-genre-tag" key={movie.id + tag}>
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
                    { [1,2,3,4,5].map( (index) => {
                        return (
                          <button className="movie-item-star-icon-button" key={movie.id + "star" + index} >
                            <StarIcon className={`${index <= movie.rating ? "h-6 w-6 text-yellow-400": "h-6 w-6 text-gray-400"}`} />
                          </button>
                        )
                    })}
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
