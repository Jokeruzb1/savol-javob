let question = +prompt("Nechta savol beray?");
let answerTrue = 0;
let answerFalse = 0;
if(question>100){
    alert('100 dan kichik son kiriting');
    location.reload()
} else {
    for (let i = 1; i <= question; i++) {
        let num1 = Math.floor(1+Math.random() * 11);
        let num2 = Math.floor(1+Math.random() * 11);
        let answer = +prompt(`${i}-savol: ${num1} * ${num2} = ?`);
        if (answer == num1 * num2) {
          document.write(`<p>${i}-savol: ${num1} * ${num2} = ${answer} To'g'ri </p>`);
          answerTrue++;
        } else {
          document.write(`<p class="red">${i}-savol: ${num1} * ${num2} = ${answer} Xato (${num1*num2}) </p>`);
          answerFalse++;
        }
      }

      document.write(`<p class="blue">To'g'ri javoblar: ${answerTrue} ta; Xato javoblar: ${answerFalse} ta </p>`);

}