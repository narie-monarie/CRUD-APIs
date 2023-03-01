package main

import (
	"narie/monarie/config"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.New()
	config.Connect()
	router.run(":8080")
}
