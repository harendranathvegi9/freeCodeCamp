package main

import (
	"fmt"
	"net/http"
)

func image(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, r.Host+r.URL.Path)

}