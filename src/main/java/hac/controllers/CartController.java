package hac.controllers;

import hac.beans.Movie;
import hac.beans.MovieList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api")
public class CartController {

    @Autowired
    @Qualifier("movieListBean")
    private MovieList movieList;

    /**
     * Retrieves the content of the cart.
     *
     * @return ResponseEntity containing the list of movies in the cart.
     */
    @GetMapping("/getCart")
    public ResponseEntity<ArrayList<Movie>> getCartContent() {
        synchronized (movieList) {
            return ResponseEntity.ok(movieList.getMovies());
        }
    }

    /**
     * Adds a movie to the cart.
     *
     * @param movie The movie to be added to the cart.
     * @return ResponseEntity indicating the status of the operation.
     */
    @PostMapping("/addItem")
    public ResponseEntity<String> addItemToCartContent(@RequestBody Movie movie) {
        synchronized (movieList) {
            boolean state = movieList.addMovie(movie);
            String text = state ? "Ok! added to cart" : "The movie is already in cart";
            return ResponseEntity.ok(text);
        }
    }

    /**
     * Removes a movie from the cart.
     *
     * @param movie The movie to be removed from the cart.
     * @return ResponseEntity indicating the status of the operation.
     */
    @DeleteMapping("/removeItem")
    public ResponseEntity<String> removeItemFromCartContent(@RequestBody Movie movie) {
        synchronized (movieList) {
            boolean state = movieList.removeMovie(movie);
            String text = state ? "Ok! The movie has been removed" : "The movie was not found in the cart";
            return ResponseEntity.ok(text);
        }
    }

    /**
     * Clears the content of the cart.
     *
     * @return ResponseEntity indicating the status of the operation.
     */
    @DeleteMapping("/clearCart")
    public ResponseEntity<String> clearCartContent() {
        synchronized (movieList) {
            movieList.clear();
            return ResponseEntity.ok("ok! cart is empty");
        }
    }
}


/*
 *
 *   in postman:
 *
 *   http://localhost:8080/api/getCart      GET
 *   http://localhost:8080/api/clearCart    POST WITH BODY&HEADER
 *   http://localhost:8080/api/addItem      POST WITH BODY&HEADER
 *   http://localhost:8080/api/removeItem   POST WITH BODY&HEADER
 *
 * example of body:
 *   {
 *     "movieImage": "HI",
 *     "movieTitle": "HELLO",
 *     "movieReleaseDate": "2023-05-24",
 *     "moviePrice": 3.99
 *     "movieID: 234
 * }
 *
 * headers
 * Content-Type, application/json
 */