package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	port := getenv("PORT", "5000")
	if port == "" {
		log.Fatal("$PORT must be set")
	}

	router := gin.Default()
	router.Use(gin.Logger())
	router.LoadHTMLGlob("templates/**/*.html")
	router.Static("/static", "./static")
	router.Static("/node_modules", "./node_modules")

	router.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "main.index.tmpl.html", nil)
	})

	router.GET("/dashboard/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "dashboard.index.tmpl.html", nil)
	})

	router.Run(":" + port)
}

func getenv(key, fallback string) string {
    value := os.Getenv(key)
    if len(value) == 0 {
        return fallback
    }
    return value
}