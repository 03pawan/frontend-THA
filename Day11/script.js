const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [{
        question: 'Q1: Who is the prime minister of india?',
        answers: [{
                text: 'Narendra Modi',
                correct: true
            },
            {
                text: 'Sonia Gandhi',
                correct: false
            },
            {
                text: 'Rahul Gandhi',
                correct: false
            },
            {
                text: 'Amit Shah',
                correct: false
            }
        ]
    },
    {
        question: ' Q2: Who has won WTC 2021?',
        answers: [{
                text: "India",
                correct: false
            },
            {
                text: "New Zealand",
                correct: true
            },
            {
                text: "Australia",
                correct: false
            },
            {
                text: "Sri Lanka",
                correct: false
            },
        ]
    },
    {
        question: 'Q3: What is the full form of js?',
        answers: [{
                text: "Java Script",
                correct: true
            },
            {
                text: "Java Bash",
                correct: false
            },
            {
                text: "Java Super",
                correct: false
            },
            {
                text: "None of above",
                correct: false
            }
        ]
    },
    {
        question: ' Q4: What is the full form of DRS?',
        answers: [{
                text: "Dhoni Review system",
                correct: false
            },
            {
                text: "Decision Review system",
                correct: true
            },
            {
                text: "Dominating Review system",
                correct: false
            },
            {
                text: "Nono of above",
                correct: false
            },
        ]
    },
    {
        question: ' Q5: Who is the president of India?',
        answers: [{
                text: "Joe Biden",
                correct: false
            },
            {
                text: "Donald trump",
                correct: false
            },
            {
                text: "Ram Nath Kovind",
                correct: true
            },
            {
                text: "Amit Shah",
                correct: false
            },
        ]
    }
]