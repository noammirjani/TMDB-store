package hac.controllers;

import hac.beans.MovieList;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.annotation.SessionScope;

@Configuration
public class BeansConfigurations {

    @Bean
    @SessionScope
    public MovieList movieListBean () {
        return new MovieList();
    }

}
