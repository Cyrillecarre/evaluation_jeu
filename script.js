/* debut de la logique du jeu */

document.addEventListener("DOMContentLoaded", function () {
    
    var rollDiceButton = document.getElementById("roll-dice-button")
    var current1Element = document.getElementById("current1");
    var diceElement = document.getElementById("dice")
    var score1Element = document.getElementById("score1");
    var score2Element = document.getElementById("score2");
    var totalScore1 = 0;
    var current2Element = document.getElementById("current2");
    var totalScore2 = 0;
    var colorPlayer = document.querySelector(".player");
    var colorPlayer2 = document.querySelector(".player2");

 /*   controle que les joueurs ne depasse pas 100 */

    function checkWinner() {
        if (parseInt(score1Element.textContent) >= 100) {
            alert("Joueur 1 a gagné !");
            resetGame();
        } else if (parseInt(score2Element.textContent) >= 100) {
            alert("joueur 2 a gagné !");
            resetGame();
        }
    }

 /*   logique du reset apres victoire ou NEW GAME */

    function resetGame() {
        totalScore1 = 0;
        totalScore2 = 0;
        score1Element.textContent = 0;
        score2Element.textContent = 0;
        current1Element.textContent = 0;
        current2Element.textContent = 0;
        current1Element.classList.add("active");
        current2Element.classList.remove("active");
        colorPlayer2.classList.remove("active");
        colorPlayer.classList.add("active");
    }

/* logique du bouton ROLL DICE */

        rollDiceButton.addEventListener( "click", function () {
            var randomValue = Math.floor(Math.random() * 6) + 1;
            var diceWords = ["one", "two", "three", "four", "five", "six"];
            diceElement.innerHTML = '<i class="fa fa-dice-' + diceWords[randomValue - 1] + ' fa-2xl" style="color: rgb(198, 92, 92); font-size: 10rem;"></i>';       
            
            if (current1Element.classList.contains("active")) { 
                totalScore1 += randomValue;
                current1Element.textContent = totalScore1; 
                if (randomValue === 1) {
                    totalScore1 = 0;
                    current1Element.textContent = "0";
                    current1Element.classList.remove("active");
                    current2Element.classList.add("active");
                    colorPlayer.classList.remove("active");
                    colorPlayer2.classList.add("active");
                } else {
                    current1Element.textContent = totalScore1;
                }
                      
            } else {
                totalScore2 += randomValue;
                current2Element.textContent = totalScore2;
                if (randomValue === 1) {
                    totalScore2 = 0;
                    current2Element.textContent = "0";
                    current2Element.classList.remove("active");
                    current1Element.classList.add("active");
                    colorPlayer2.classList.remove("active");
                    colorPlayer.classList.add("active");
                } else {
                    current2Element.textContent = totalScore2;
                }
            }
            checkWinner();
        });
        
/* logique du bouton HOLD */

        var holdScoreButton = document.getElementById("hold-score-button");
        
        holdScoreButton.addEventListener("click", function () {
            
            if (current1Element.classList.contains("active")) {
                score1Element.textContent = totalScore1 + parseInt(score1Element.textContent);
                totalScore1 = 0;
                current1Element.textContent = "0";
                current1Element.classList.remove("active");
                current2Element.classList.add("active");
                colorPlayer.classList.remove("active");
                colorPlayer2.classList.add("active");
            } else {
                score2Element.textContent = totalScore2 + parseInt(score2Element.textContent);
                totalScore2 = 0;
                current2Element.textContent = "0";
                current2Element.classList.remove("active");
                current1Element.classList.add("active");
                colorPlayer2.classList.remove("active");
                colorPlayer.classList.add("active");
            }       

            checkWinner();
        });

/* logique du bouton NEW GAME */

        var newGameButton = document.getElementById("new-game-button");
        newGameButton.addEventListener("click", function() {
            resetGame();
        }); 
    });

    