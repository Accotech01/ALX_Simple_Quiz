document.addEventListener('DOMContentLoaded', ()=>{
    function checkAnswer() {
        correctAnswer = "4"

        const userAnswer = document.querySelector('input[name="quiz"]:checked').value

        if (userAnswer === correctAnswer){
            feedback = document.getElementById('feedback');
            feedback.textContent = 'Correct! Well done.'
        } else {
            feedback.textContent = "That's incorrect. Try again!"
        }

        
    }

    submitAnswer = document.getElementById('submit-answer');

        submitAnswer.addEventListener('click', checkAnswer)
})

