package hac.beans;

import java.io.Serializable;
import org.springframework.stereotype.Component;

@Component(value="movieProduct")
public class Movie implements Serializable{

    static final Double cost = 3.99;
    private String movieImage ;
    private String movieTitle ;
    private String movieRealeseDate ;
    private Double moviePrice ;
    public Movie() {
    }

//    public Movie(String movieImage, String movieTitle, String movieRealeseDate, Double moviePrice) {
//
//        this.setMovieImage(movieImage);
//        this.setMovieTitle(movieTitle);
//        this.setMovieRealeseDate(movieRealeseDate);
//        this.setMoviePrice(moviePrice);
//
//    }

    // getters and setters
    public String getMovieImage() {
        return movieImage;
    }

    public String getMovieTitle() {
        return movieTitle;
    }

    public String getMovieRealeseDate() {
        return movieRealeseDate;
    }

    public Double getMoviePrice() {
        return moviePrice;
    }

    public void setMovieImage(String movieImage) {this.movieImage = movieImage;}
    public void setMovieTitle(String movieTitle) {
        this.movieTitle=movieTitle;
    }
    public void setMovieRealeseDate(String movieRealeseDate) {this.movieRealeseDate=movieRealeseDate;}
    public void setMoviePrice(Double payment) {

        this.moviePrice = payment < 0 ? cost : payment;
    }

}