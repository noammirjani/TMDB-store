package hac.beans;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.SessionScope;

import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;

/* this is a simple bean class instantiated in session */

@Component("MovieCart")
public class MovieList implements Serializable {
    private ArrayList<Movie> movies;
    @Serial
    private static final long serialVersionUID = 1234567L;

    public MovieList() {
        this.movies = new ArrayList<>();
    }

    public ArrayList<Movie> getMovies() {
        return this.movies;
    }

    public void setMovies(ArrayList<Movie> movies) {
        this.movies = movies;
    }

    public void addMovie (Movie movie) {
        if(!this.movies.contains(movie))
            this.movies.add(movie);
    }

}