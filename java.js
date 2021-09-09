const letterCounts = {};

const wordCounts = {};
const wordPositions = [];

const words = document.getElementById("WordsDiv");
const letters = document.getElementById("letterDiv");

const button = document.getElementById("countButton");


button.addEventListener("click", function() {  

   let texto = document.getElementById('text').value;
    texto = texto.toLowerCase();
    texto = texto.replace(/[^a-z'\s]+/g, "");

   

    for (let i = 0; i < texto.length; i++) {
        let currentLetter = texto[i];
      

        if (letterCounts[currentLetter] === undefined) {
         letterCounts[currentLetter] = 1; 
      } else { 
         letterCounts[currentLetter]++; 
      }

      if(currentLetter === " "){
         wordPositions.push(i);
      }
     }

     for (let letter in letterCounts) { 
      const span = document.createElement("span"); 
      const textContent = `"${letter}": ${letterCounts[letter]}, `;
      

      span.innerText = textContent; 
      letters.appendChild(span); 
   }

   let start = 0;

   for(let i = 0; i < wordPositions.length; i++){
      let end = wordPositions[i];

      let word = texto.slice(start, end);

      if(wordCounts[word] === undefined){
         wordCounts[word] = 1;
      } else{
         wordCounts[word]++;
      }
      start = wordPositions[i];
   }

   for (let letter in wordCounts) { 
      const span = document.createElement("span"); 
      const textContent = `"${letter}": ${wordCounts[letter]}, `;
      

      span.innerText = textContent; 
      words.appendChild(span); 
   }

   words.classList.add('words');
   letters.classList.add('letters')
});