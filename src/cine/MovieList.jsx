import { useState } from "react";

import { getAllMovies } from "../data/movies";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

import { getImgUrl } from "../utils/cine-utility";

export default function MovieList() {
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const movies = getAllMovies();

    function hadleMovieSelection(movie) {
        setSelectedMovie(movie);
        setShowModal(true);
    }

    function hadleAddToCart(event, movie) {
        event.stopPropagation();
        console.log("Add to Cart", movie);
    }

    function handleModalClose() {
        setSelectedMovie(null);
        setShowModal(false);
    }

    return (
        <div className="content">
            {showModal && <MovieDetailsModal
                movie={selectedMovie}
                onClose={handleModalClose}
                onCartAdd={hadleAddToCart} />}
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {movies.map((movie) => (
                    <figure
                        key={movie.id}
                        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
                    >
                        <a href="#" onClick={() => hadleMovieSelection(movie)}>
                            <img
                                className="w-full object-cover"
                                src={getImgUrl(
                                    `../assets/movie-covers/${movie.cover}`
                                )}
                                alt={movie.title}
                            />
                            <figcaption className="pt-4">
                                <h3 className="text-xl mb-1">{movie.title}</h3>
                                <p className="text-[#575A6E] text-sm mb-2">
                                    {movie.genre}
                                </p>
                                <div className="flex items-center space-x-1 mb-5">
                                    <Rating value={movie.rating} />
                                </div>
                                <button
                                    className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                                    href="#"
                                    onClick={(e) => hadleAddToCart(e, movie)}
                                >
                                    <img src="./assets/tag.svg" alt="" />
                                    <span>${movie.price} | Add to Cart</span>
                                </button>
                            </figcaption>
                        </a>
                    </figure>
                ))}
            </div>
        </div>
    );
}
