'use strict'

import { Question } from './question.js'

export class StartQuiz {
    constructor() {

        document.querySelector('button').addEventListener('click', this.readyButton.bind(this))
    }

    async readyButton() {
        let optionvalue = document.getElementById('Category').value
        let input = $('[name="difficulty"]:checked').val()
        let numQ = $('.Question input').val()
        if (numQ > 0) {
            let result = await this.getApi(numQ, optionvalue, input)
            $('.Quiz').addClass("d-none")
            $('.Quiz1').addClass("d-block")

        } else {
            $('.msg').addClass('d-block')
        }
    }

    async getApi(qnum, cate, difficult) {
        let repons = await fetch(`https://opentdb.com/api.php?amount=${qnum}&category=${cate}&difficulty=${difficult}`)
        let res = await repons.json()
        new Question(res.results)
        console.log(res.results);
    }
}
