package main

import "fmt"

func main() {
	fmt.Println("Convert Number to Binary. Let GO!!!")

	var numb int
	fmt.Printf("Please enter a number: ")
	fmt.Scanln(&numb)
	fmt.Printf("The binary number of %d is: %b", numb, numb)
}
