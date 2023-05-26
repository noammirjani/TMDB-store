package hac.beans;

import java.io.Serializable;
import java.util.Objects;

import org.hibernate.query.sql.internal.ParameterRecognizerImpl;
import org.springframework.stereotype.Component;

@Component
public class Movie implements Serializable {
    static final Double cost = 3.99;
    private String movieImage, movieTitle, movieReleaseDate;
    private Double moviePrice;
    private Integer movieId;

    public Movie() {}

    // getters and setters

    public String getMovieImage() {
        return movieImage;
    }

    public void setMovieImage(String movieImage) {
        this.movieImage = movieImage;
    }

    public String getMovieTitle() {
        return movieTitle;
    }

    public void setMovieTitle(String movieTitle) {
        this.movieTitle = movieTitle;
    }

    public String getMovieReleaseDate() {
        return movieReleaseDate;
    }

    public void setMovieReleaseDate(String movieReleaseDate) {
        this.movieReleaseDate = movieReleaseDate;
    }

    public Double getMoviePrice() {
        return moviePrice;
    }

    public void setMoviePrice(Double moviePrice) {
        this.moviePrice = moviePrice < 0 ? cost : moviePrice;
    }

    public Integer getMovieId() {
        return this.movieId ;
    }

    public void setMovieId(Integer movieId) {
        this.movieId = movieId;
    }

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
