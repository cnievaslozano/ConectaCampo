package es.conectacampo.springboot.security;

import es.conectacampo.springboot.security.filters.JwtAuthenticationFilter;
import es.conectacampo.springboot.security.filters.JwtAuthorizationFilter;
import es.conectacampo.springboot.security.jwt.JwtUtils;
import es.conectacampo.springboot.service.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfig {

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    UserDetailsServiceImpl userDetailsService;

    @Autowired
    JwtAuthorizationFilter jwtAuthorizationFilter;

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity, AuthenticationManager authenticationManager) throws Exception {

        JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(jwtUtils);
        jwtAuthenticationFilter.setAuthenticationManager(authenticationManager);
        jwtAuthenticationFilter.setFilterProcessesUrl("/auth/login");

        return httpSecurity
                .csrf(config -> config.disable())
                .authorizeHttpRequests(auth -> {
                    // Login & Register
                    auth.requestMatchers(   "/auth/login").permitAll();
                    auth.requestMatchers(   "/error").permitAll();
                    auth.requestMatchers(   "/api/v1/follow/all").permitAll();
                    auth.requestMatchers("/api/v1/user/**").permitAll();

                    auth.requestMatchers(HttpMethod.POST,"/api/v1/user").permitAll();

                    // USER
                    auth.requestMatchers("/api/v1/user/all").permitAll();
                    auth.requestMatchers("/api/v1/user/username/*").permitAll();
                    auth.requestMatchers("/api/v1/user").permitAll(); // register
                    auth.requestMatchers("/api/v1/user/id/*").permitAll(); // get by id
                    auth.requestMatchers(HttpMethod.GET,"/api/v1/user/*").permitAll();
                    auth.requestMatchers(HttpMethod.PUT,"/api/v1/user/*").hasAnyRole("FARMER", "USER");
                    auth.requestMatchers(HttpMethod.DELETE,"/api/v1/user/*").hasRole("ADMIN");

                    // PRODUCT
                    auth.requestMatchers("/api/v1/product/all").permitAll();
                    auth.requestMatchers(HttpMethod.GET,"/api/v1/product/*").permitAll();
                    auth.requestMatchers(HttpMethod.POST,"/api/v1/product").hasRole("FARMER");
                    auth.requestMatchers(HttpMethod.PUT,"/api/v1/product/*").hasRole("FARMER");
                    auth.requestMatchers(HttpMethod.DELETE,"/api/v1/product/*").hasRole("FARMER");

                    // PUBLICATION
                    auth.requestMatchers("/api/v1/publication/*/like").authenticated();
                    auth.requestMatchers("/api/v1/publication/*/unlike").authenticated();
                    auth.requestMatchers("/api/v1/publication/*/likeCount").permitAll();
                    auth.requestMatchers("/api/v1/publication/all").permitAll();
                    auth.requestMatchers(HttpMethod.GET, "/api/v1/publication/*").permitAll();
                    auth.requestMatchers(HttpMethod.POST, "/api/v1/publication").hasRole("FARMER");
                    auth.requestMatchers(HttpMethod.PUT, "/api/v1/publication/*").hasRole("FARMER");
                    auth.requestMatchers(HttpMethod.DELETE, "/api/v1/publication/*").hasRole("FARMER");

                    // FOLLOWER
                    auth.requestMatchers(HttpMethod.POST,"/api/v1/user/*/follow/*").permitAll();
                    auth.requestMatchers(HttpMethod.DELETE,"/api/v1/user/*/unfollow/*").permitAll();

                    // CATEGORY
                    auth.requestMatchers("/api/v1/category/").hasAnyRole("FARMER", "ADMIN");


                    auth.anyRequest().authenticated();
                })
                .sessionManagement(session -> {
                    session.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
                })
                .addFilter(jwtAuthenticationFilter)
                .addFilterBefore(jwtAuthorizationFilter, UsernamePasswordAuthenticationFilter.class)
                .build();

    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    AuthenticationManager authenticationManager(HttpSecurity httpSecurity, PasswordEncoder passwordEncoder) throws Exception {
        AuthenticationManagerBuilder authManagerBuilder = httpSecurity.getSharedObject(AuthenticationManagerBuilder.class);
        authManagerBuilder
                .userDetailsService(userDetailsService)
                .passwordEncoder(passwordEncoder);

        return authManagerBuilder.build();
    }

}
