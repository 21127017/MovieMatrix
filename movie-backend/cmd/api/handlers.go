package main

import (
	"backend/internal/models"
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

func (app *application) Home(w http.ResponseWriter, r *http.Request) {
	var payload = struct {
		Status  string `json:"status"`
		Message string `json:"message"`
		Version string `json:"version"`
	}{
		Status:  "active",
		Message: "Go movies up and running",
		Version: "1.0.0",
	}

	out, err := json.Marshal(payload)
	if err != nil {
		fmt.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(out)
}

func (app *application) AllMovies(w http.ResponseWriter, r *http.Request) {
	var movies []models.Movie

	rd, _ := time.Parse("2006-01-02", "1986-03-07")

	highlander := models.Movie{
		ID:          1,
		Title:       "Higlander",
		ReleaseDate: rd,
		MPAARating:  "R",
		RunTime:     116,
		Description: "I dont know what to write in there",
		CreateAt:    time.Now(),
		UpdatedAt:   time.Now(),
	}

	rd, _ = time.Parse("2006-01-02", "1986-03-07")

	rotla := models.Movie{
		ID:          1,
		Title:       "Raiders of the lost Ark",
		ReleaseDate: rd,
		MPAARating:  "PG-13",
		RunTime:     115,
		Description: "This is so nice",
		CreateAt:    time.Now(),
		UpdatedAt:   time.Now(),
	}

	movies = append(movies, highlander)
	movies = append(movies, rotla)

	out, err := json.Marshal(movies)
	if err != nil {
		fmt.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(out)
}
