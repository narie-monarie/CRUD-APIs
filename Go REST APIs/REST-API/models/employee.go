package models

import "gorm.io/gorm"

type Employee struct {
	gorm.Model

	Id             int    `json:"id" gorm:"primary_key"`
	Name           string `json:"name"`
	Age            int    `json:"age"`
	Email          string `json:"email"`
	EmployeeNumber int    `json:"employee number"`
}
