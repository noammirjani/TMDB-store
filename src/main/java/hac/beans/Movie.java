package hac.beans;

import java.io.Serializable;
import java.util.Objects;
import org.springframework.stereotype.Component;

@Component(value="movieProduct")
public class Movie implements Serializable{

    static final Double cost = 3.99;
    private String movieImage, movieTitle, movieReleaseDate ;
    private Double moviePrice;

    public Movie() {}

    // getters and setters
    public String getMovieImage() {

        return movieImage;
    }
    public String getMovieTitle() {

        return movieTitle;
    }
    public String getMovieReleaseDate() {

        return movieReleaseDate;
    }
    public Double getMoviePrice() {

        return moviePrice;
    }

    public void setMovieImage(String movieImage) {
        this.movieImage = movieImage;}
    public void setMovieTitle(String movieTitle) {

        this.movieTitle=movieTitle;
    }
    public void setMovieReleaseDate(String movieReleaseDate) {
        this.movieReleaseDate=movieReleaseDate;}
    public void setMoviePrice(Double moviePrice) {

        this.moviePrice = moviePrice < 0 ? cost : moviePrice;
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

        return  Objects.equals(movieTitle, other.movieTitle) &&
                Objects.equals(movieReleaseDate, other.movieReleaseDate)&&
                Objects.equals(movieImage, other.movieImage) &&
                Objects.equals(moviePrice, other.moviePrice);
    }

}