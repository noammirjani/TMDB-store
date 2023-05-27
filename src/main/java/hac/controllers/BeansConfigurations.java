package hac.controllers;

import hac.beans.MovieList;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.annotation.SessionScope;

@Configuration
public class BeansConfigurations {

    /**
     * Creates a new instance of the MovieList bean.
     *
     * @return The MovieList bean.
     */
    @Bean
    @SessionScope
    public MovieList movieListBean () {
        return new MovieList();
    }

}
