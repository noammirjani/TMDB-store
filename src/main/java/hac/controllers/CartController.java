package hac.controllers;

import hac.beans.Movie;
import hac.beans.MovieList;

import jakarta.annotation.Resource;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpServletRequest;

import java.util.ArrayList;

@RestController
@RequestMapping("/api")
public class CartController {

    @Autowired
    @Qualifier("MovieCart")
    private MovieList movieList;

    @Autowired
    @GetMapping("/getCart")
    public ResponseEntity<ArrayList<Movie>> getCartContent(){
        return ResponseEntity.ok(movieList.getMovies());
    }

    @Autowired
    @PostMapping("/addToCart")
    public ResponseEntity<String> addCartContent(@RequestParam Movie movie){
        System.out.println("sssssssssssssssssssssssssssssssssssssss");
        movieList.addMovie(movie);
        return ResponseEntity.ok("Ok! added to cart");
    }






}
