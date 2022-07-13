const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".all-keys")
const display = document.querySelector(".display")

keys.addEventListener("click", e => {
    if(e.target.matches("button")){
        const key = e.target
        const blue = document.querySelectorAll(".blue")
        for(let i = 0; i < blue.length; i++){
            let each = blue[i]
            each.style.color = "black"
        }
        const keyContent = key.textContent
        const actionKey = key.dataset.action
        const displayedNum = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType

        if(actionKey === "clear"){
            display.textContent = "0"
        }

        if(!actionKey){
            if(displayedNum === "0" || previousKeyType === "operator"){
                display.textContent = keyContent
            }
            else{display.textContent = displayedNum + keyContent}
        }

        
        if(actionKey === "decimal"){
            if(!displayedNum.includes(".")){
                display.textContent = displayedNum + "."
            }
        }

        if(actionKey === "clearOne"){
            let newArr = displayedNum.split("")
            let removed = newArr.slice(0, -1)
            display.textContent = removed.join("")
        }

        if(actionKey === "add" ||
            actionKey === "subtract" ||
            actionKey === "multiply" ||
            actionKey === "divide"
        ){
            key.style.color = "blue"
            calculator.dataset.firstValue = displayedNum
            //console.log(firstValue)
            calculator.dataset.previousKeyType = "operator"
            calculator.dataset.operation = actionKey
        }

        if(actionKey === "calculate"){
            const firstValue = calculator.dataset.firstValue
            const secondValue = displayedNum
            const operator = calculator.dataset.operation
            //console.log(+firstValue + +secondValue)
            display.textContent = calculate(firstValue, operator, secondValue)
        }
        function calculate(n1, operator, n2){
            let answer = ""
            if(operator === "multiply"){
                answer = +n1 * +n2
            }
            if(operator === "divide"){
                answer = +n1 / +n2
            }
            if(operator === "add"){
                answer = +n1 + +n2
            }
            if(operator === "subtract"){
                answer = +n1 - +n2
            }
            return answer
        }
    }
})