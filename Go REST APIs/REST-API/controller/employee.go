package controller

import (
	"narie/monarie/config"
	"narie/monarie/models"

	"github.com/gin-gonic/gin"
)

func GetUsers(c *gin.Context) {
	users := []models.Employee{}
	config.DB.Find(&users)
	c.JSON(200, &users)
}

func CreateUser(c *gin.Context) {
	var employee models.Employee
	c.BindJSON(&employee)
	config.DB.Create(employee)
	c.JSON(200, &employee)
}
