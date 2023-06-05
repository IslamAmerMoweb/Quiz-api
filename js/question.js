'use strict'

export class Question {
    constructor(arr) {
        this.arr = arr
        $('.quizq > p span').append(this.arr.length)
        this.count = 0
        this.targetQuestion()
        this.score = 0
        $('.Quiz1 button').click(_ => {
            this.nextQuestion()
        })
        $('.score button').click(function () {
            location.reload()
        })

    }

    targetQuestion() {
        this.count++

        if (this.count <= this.arr.length) {

            $('.quizq > p span').first().text(this.count + ' ')
            $('form > p span').css('font-size', '20px').html(this.arr[this.count - 1].question)
            let random = Math.floor(Math.random() * this.arr[this.count - 1].incorrect_answers.length)
            let answers = [...this.arr[this.count - 1].incorrect_answers]
            this.corect = this.arr[this.count - 1].correct_answer
            answers.splice(random, 0, this.corect)
            console.log(answers);
            let box = ''
            for (let i = 0; i < answers.length; i++) {
                box += `
            <div class="pretty p-round p-pulse">
                <input value="${answers[i]}" type="radio" name="answer" />
                <div class="state p-success">
                     <label>${answers[i]}</label>
                </div>
            </div>
            `
            }
            $('.Quiz1 .difficult').html(box)
        }
    }

    nextQuestion() {
        let input = $('[name="answer"]:checked').val()
        if (input != undefined) {
            if (this.corect == input) {
                this.score++
                $('.Quiz1 .correct').css('background-color', 'green').fadeIn(500).html('good').fadeOut(1000)
            } else {
                $('.Quiz1 .correct').css('background-color', 'red').fadeIn(500).html('false').fadeOut(1000)
            }
            if (this.count == this.arr.length) {
                $('.Quiz1').addClass('d-none')
                $('.score').addClass('d-block')
                $('.score h3').after(`<p>${this.score}</p>`)
            } else {
                // $('.score').addClass('d-none')
            }
            this.targetQuestion()

        } else {
            $('.mesg').fadeIn(1000).html('please enter an answer')
            setTimeout(function () {
                $('.mesg').fadeOut(3000).html('please enter an answer')
            }, 500)
        }
    }

}