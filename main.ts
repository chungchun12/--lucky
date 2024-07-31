let 행운 = 0
input.onButtonPressed(Button.A, function () {
    // 행운에 변수 설정
    행운 = randint(1, 9)
    // 조건문
    // 
    if (행운 == 7) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
        }
    } else {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Skull)
            basic.clearScreen()
        }
    }
})
