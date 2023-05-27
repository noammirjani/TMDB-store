package hac.beans;

import java.io.Serializable;
import java.util.Objects;

import org.springframework.stereotype.Component;

/**
 * Movie
 * Represents a movie in the HAC application.
 */
@Component
public class Movie implements Serializable {
    static final Double cost = 3.99;
    private String movieImage, movieTitle, movieReleaseDate;
    private Double moviePrice;
    private Integer movieId;

    /**
     * Constructs a new Movie instance.
     */
    public Movie() {}

    /**
     * Retrieves the movie image URL.
     *
     * @return The movie image URL.
     */
    public String getMovieImage() {
        return movieImage;
    }

    /**
     * Sets the movie image URL.
     *
     * @param movieImage The movie image URL to set.
     */
    public void setMovieImage(String movieImage) {
        this.movieImage = movieImage;
    }

    /**
     * Retrieves the movie title.
     *
     * @return The movie title.
     */
    public String getMovieTitle() {
        return movieTitle;
    }

    /**
     * Sets the movie title.
     *
     * @param movieTitle The movie title to set.
     */
    public void setMovieTitle(String movieTitle) {
        this.movieTitle = movieTitle;
    }

    /**
     * Retrieves the movie release date.
     *
     * @return The movie release date.
     */
    public String getMovieReleaseDate() {
        return movieReleaseDate;
    }

    /**
     * Sets the movie release date.
     *
     * @param movieReleaseDate The movie release date to set.
     */
    public void setMovieReleaseDate(String movieReleaseDate) {
        this.movieReleaseDate = movieReleaseDate;
    }

    /**
     * Retrieves the movie price.
     *
     * @return The movie price.
     */
    public Double getMoviePrice() {
        return moviePrice;
    }

    /**
     * Sets the movie price.
     * If the provided price is less than 0, the default cost will be used.
     *
     * @param moviePrice The movie price to set.
     */
    public void setMoviePrice(Double moviePrice) {
        this.moviePrice = moviePrice < 0 ? cost : moviePrice;
    }

    /**
     * Retrieves the movie ID.
     *
     * @return The movie ID.
     */
    public Integer getMovieId() {
        return this.movieId ;
    }

    /**
     * Sets the movie ID.
     *
     * @param movieId The movie ID to set.
     */
    public void setMovieId(Integer movieId) {
        this.movieId = movieId;
    }

    /**
     * Checks if this Movie instance is equal to another object.
     * Two movies are considered equal if they have the same movie ID.
     *
     * @param obj The object to compare.
     * @return True if the objects are equal, false otherwise.
     */
    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        Movie other = (Movie) obj;

        return Objects.equals(movieId, other.movieId);
    }
}
