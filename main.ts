function unInf (text: string) {
    if (text == "Infinity") {
        return "ERROR! Overflow!"
    } else {
        return text
    }
    return "ERROR! Invalid code path!"
}
function calculator (list: any[]) {
    if (list[1] == 1) {
        return "" + (list[0] + list[2])
    } else {
        if (list[1] == 2) {
            return "" + (list[0] - list[2])
        } else {
            if (list[1] == 3) {
                return "" + list[0] * list[2]
            } else {
                if (list[1] == 4) {
                    return "" + list[0] / list[2]
                } else {
                    if (list[1] == 5) {
                        return "" + list[0] ** list[2]
                    } else {
                        return "ERROR! Invalid code path!"
                    }
                    return "ERROR! Invalid code path!"
                }
                return "ERROR! Invalid code path!"
            }
            return "ERROR! Invalid code path!"
        }
        return "ERROR! Invalid code path!"
    }
    return "ERROR! Invalid code path!"
}
function main () {
    list = []
    list.push(game.askForNumber("enter number", 10))
    list.push(game.askForNumber("1:+ 2:- 3:× 4:÷ 5:**", 1))
    list.push(game.askForNumber("enter number", 10))
    game.splash("result is: (drums sound)", unInf(calculator(list)))
    main()
}
let list: number[] = []
main()
