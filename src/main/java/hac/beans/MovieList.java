package hac.beans;

import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.ArrayList;

@Component
public class MovieList implements Serializable {
    private ArrayList<Movie> movies;

    /**
     * Constructs a new MovieList instance.
     */
    public MovieList() {
        this.movies = new ArrayList<>();
    }

    /**
     * Retrieves the list of movies.
     *
     * @return The list of movies.
     */
    public ArrayList<Movie> getMovies() {
        return this.movies;
    }

    /**
     * Sets the list of movies.
     *
     * @param movies The list of movies to set.
     */
    public void setMovies(ArrayList<Movie> movies) {
        this.movies = movies;
    }

    /**
     * Adds a movie to the list.
     *
     * @param movie The movie to add.
     * @return True if the movie is added successfully, false if the movie already exists in the list.
     */
    public boolean addMovie(Movie movie) {
        if (!this.movies.contains(movie)) {
            this.movies.add(movie);
            return true;
        }
        return false;
    }

    /**
     * Removes a movie from the list.
     *
     * @param movie The movie to remove.
     * @return True if the movie is removed successfully, false if the movie does not exist in the list.
     */
    public boolean removeMovie(Movie movie){
        if (this.movies.contains(movie)) {
            this.movies.remove(movie);
            return true;
        }
        return false;
    }

    /**
     * Clears the list of movies.
     */
    public void clear() {
        movies.clear();
    }
}
