package routes

import (
	"narie/monarie/controller"

	"github.com/gin-gonic/gin"
)

func UserRoutes(router *gin.Engine) {
	router.GET("/", controller.GetUsers())
	router.POST("/", controller.CreateUser())
}
