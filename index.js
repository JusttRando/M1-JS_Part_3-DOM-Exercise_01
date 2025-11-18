const spellArea = document.getElementById("spellArea");
const genB = document.querySelector('input[type="button"]');
const resetB = document.getElementById("resetB");
const ingredientsList = document.querySelectorAll("#ingredientsList li");

const ingredients = Array.from(ingredientsList).map(item => item.innerText);

const backColors = ["cadetblue", "lightcoral", "plum", "lightgreen", "lightskyblue"];

genB.addEventListener("click", function () {
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

resetB.addEventListener("click", () => {
    spellArea.textContent = "Press \"Generate Spell\" to begin!";
    document.body.style.backgroundColor = "cadetblue";
});
