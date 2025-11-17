const spellArea = document.getElementById("spellArea");
const generateBtn = document.querySelector('input[type="button"]');
const resetBtn = document.getElementById("resetBtn");
const ingredientsList = document.querySelectorAll("#ingredientsList li");

const ingredients = Array.from(ingredientsList).map(item => item.innerText);

const bgColors = ["cadetblue", "lightcoral", "plum", "lightgreen", "lightskyblue"];

generateBtn.addEventListener("click", function () {
    let countdown = 3;
    const randomIngredient = ingredients[Math.floor(Math.random() * ingredients.length)];

    spellArea.textContent = `Revealing spell in ${countdown}...`;

    const timer = setInterval(() => {
        countdown--;

        if (countdown > 0) {
            spellArea.textContent = `Revealing spell in ${countdown}...`;
        } else {
            clearInterval(timer);

            spellArea.textContent = `🪄 Your spell requires: ${randomIngredient}`;

            document.body.style.backgroundColor =
                bgColors[Math.floor(Math.random() * bgColors.length)];
        }
    }, 1000);
});

resetBtn.addEventListener("click", () => {
    spellArea.textContent = "Press \"Generate Spell\" to begin!";
    document.body.style.backgroundColor = "cadetblue";
});
