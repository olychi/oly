package main

import (
	"fmt"
	"strconv"
)

func main() {
	fmt.Println("Convert Number to Binary. Let GO!!!")

	var numb int64
	fmt.Printf("Please enter a number: ")
	fmt.Scanln(&numb)

	fmt.Println(strconv.FormatInt(numb, 2))
}
