package hac.beans;
import org.springframework.stereotype.Component;
import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;


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

    public boolean addMovie(Movie movie) {

        if(!this.movies.contains(movie)) {
            this.movies.add(movie);
            return true;
        }
         return false;
    }

    public boolean removeMovie(Movie movie){

        if(this.movies.contains(movie)) {
            this.movies.remove(movie);
            return true;
        }
        return false;
    }

    public void clear() {

        movies.clear();
    }
}