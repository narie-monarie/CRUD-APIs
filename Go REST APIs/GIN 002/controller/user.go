package controller

import (
	"narie-monarie/config"
	"narie-monarie/models"

	"github.com/gin-gonic/gin"
)

func UserController(c *gin.Context) {
	users := []models.User{}
	config.DB.Find(&users)
	c.JSON(200, &users)
}
