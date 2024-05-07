console.log("hello world")
const screen = document.querySelector(".screen")
const ac = document.querySelector(".ac")
const positive = document.querySelector(".positive")
const percentage = document.querySelector(".percentage")
const divide = document.querySelector(".divide")
const seven = document.querySelector(".seven")
const eight = document.querySelector(".eight")
const nine = document.querySelector(".nine")
const multiply = document.querySelector(".multiply")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const subtract = document.querySelector(".subtract")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const add = document.querySelector(".add")
const zero = document.querySelector(".zero")
const decimal = document.querySelector(".decimal")
const equals = document.querySelector(".equals")

let firstNumber, secondNumber, operator, result

ac.addEventListener("click", () => {
  console.log("All Cleared")
  screen.value = ""
  firstNumber = secondNumber = operator = result = 0
})

positive.addEventListener("click", () => {
  if (!screen.value) {
    return
  }
  screen.value = parseFloat(screen.value) * -1
})

percentage.addEventListener("click", () => {
  if (!screen.value) {
    return
  }
  firstNumber = parseFloat(screen.value)
  screen.value = firstNumber / 100
})

divide.addEventListener("click", () => {
  if (!screen.value) {
    return
  }
  firstNumber = parseFloat(screen.value)
  operator = "/"
  screen.value = ""
})

multiply.addEventListener("click", () => {
  if (!screen.value) {
    return
  }
  firstNumber = parseFloat(screen.value)
  operator = "*"
  screen.value = ""
})

subtract.addEventListener("click", () => {
  if (!screen.value) {
    return
  }
  firstNumber = parseFloat(screen.value)
  operator = "-"
  screen.value = ""
})

add.addEventListener("click", () => {
  if (!screen.value) {
    return
  }
  firstNumber = parseFloat(screen.value)
  operator = "+"
  screen.value = ""
})

decimal.addEventListener("click", () => {
  screen.value += "."
})

equals.addEventListener("click", () => {
  if (!screen.value) {
    return
  }
  secondNumber = parseFloat(screen.value)
  if (operator == "+") {
    result = firstNumber + secondNumber
  } else if (operator == "-") {
    result = firstNumber - secondNumber
  } else if (operator == "*") {
    result = firstNumber * secondNumber
  } else if (operator == "/") {
    result = firstNumber / secondNumber
  }

  screen.value = result
})

seven.onclick = () => {
  screen.value += "7"
}

eight.onclick = () => {
  screen.value += "8"
}

nine.onclick = () => {
  screen.value += "9"
}

four.onclick = () => {
  screen.value += "4"
}

five.onclick = () => {
  screen.value += "5"
}

six.onclick = () => {
  screen.value += "6"
}

one.onclick = () => {
  screen.value += "1"
}

two.onclick = () => {
  screen.value += "2"
}
three.onclick = () => {
  screen.value += "3"
}

zero.onclick = () => {
  screen.value += "0"
}
