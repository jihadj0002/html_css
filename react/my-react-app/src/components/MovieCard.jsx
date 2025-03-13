
function MovieCard({movie}) {

    function onClickCard(){
        alert("Clicked")
    }

    return (
        <>
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title}/>
                <div className="movie-overlay">
                    <button className="movie-btn" onClick={onClickCard}>Click Me</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>Movie Name Is: {movie.title}</h3>
                <p>{movie.release_date}</p>

            </div>

        </div>
        </>
    );
}

export default MovieCard