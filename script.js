function displayName(pretty) {
  return pretty.charAt(0) + pretty.slice(1);
}

function randomizeIt(arr) {
  var aRando = arr[Math.floor(Math.random() * arr.length)];
  return aRando;
}

function usernamegenerator() {
  var prefix_array = [];
  var middle_array = [];
  var suffix_array = [];

  function prefixGen() {
    if (document.getElementById("animals").checked) {
      var animal = randomizeIt(animals);
      var animalGo = displayName(animal);
      prefix_array.push(animalGo);
    }
    if (document.getElementById("bookPrefix").checked) {
      var bookPr = randomizeIt(bookP);
      var bookPrGo = displayName(bookPr);
      prefix_array.push(bookPrGo);
    }
    if (document.getElementById("colorPrefix").checked) {
      var colorPr = randomizeIt(colorP);
      var colorPrGo = displayName(colorPr);
      prefix_array.push(colorPrGo);
    }
    if (document.getElementById("craftPrefix").checked) {
      var craftPr = randomizeIt(craftP);
      var craftPrGo = displayName(craftPr);
      prefix_array.push(craftPrGo);
    }
    if (document.getElementById("foodPrefix").checked) {
      var foodPr = randomizeIt(foodP);
      var foodPrGo = displayName(foodPr);
      prefix_array.push(foodPrGo);
    }
    if (document.getElementById("generalPrefix").checked) {
      var generalPr = randomizeIt(generalP);
      var generalPrGo = displayName(generalPr);
      prefix_array.push(generalPrGo);
    }
    if (document.getElementById("journalPrefix").checked) {
      var journalPr = randomizeIt(journalP);
      var journalPrGo = displayName(journalPr);
      prefix_array.push(journalPrGo);
    }
    if (document.getElementById("lifestylePrefix").checked) {
      var lifestylePr = randomizeIt(lifestyleP);
      var lifestylePrGo = displayName(lifestylePr);
      prefix_array.push(lifestylePrGo);
    }
    if (document.getElementById("plantPrefix").checked) {
      var plantPr = randomizeIt(plantP);
      var plantPrGo = displayName(plantPr);
      prefix_array.push(plantPrGo);
    }
    if (document.getElementById("studyPrefix").checked) {
      var studyPr = randomizeIt(studyP);
      var studyPrGo = displayName(studyPr);
      prefix_array.push(studyPrGo);
    }
    if (document.getElementById("techPrefix").checked) {
      var techPr = randomizeIt(techP);
      var techPrGo = displayName(techPr);
      prefix_array.push(techPrGo);
    }
  }

  function middleGen() {
    if (document.getElementById("middleWord").checked) {
      var middleW = randomizeIt(middle);
      var middleWGo = displayName(middleW);
      middle_array.push(middleWGo);
    }
    if (document.getElementById("symbol").checked) {
      var symbolM = randomizeIt(symbol);
      var symbolMGo = displayName(symbolM);
      middle_array.push(symbolMGo);
    }
  }

  function suffixGen() {
    if (document.getElementById("animalSuffix").checked) {
      var animal = randomizeIt(animals);
      var animalGo = displayName(animal);
      suffix_array.push(animalGo);
    }
    if (document.getElementById("bookSuffix").checked) {
      var bookSu = randomizeIt(bookS);
      var bookSuGo = displayName(bookSu);
      suffix_array.push(bookSuGo);
    }
    if (document.getElementById("colorSuffix").checked) {
      var colorSu = randomizeIt(colorS);
      var colorSuGo = displayName(colorSu);
      suffix_array.push(colorSuGo);
    }
    if (document.getElementById("craftSuffix").checked) {
      var craftSu = randomizeIt(craftS);
      var craftSuGo = displayName(craftSu);
      suffix_array.push(craftSuGo);
    }
    if (document.getElementById("foodSuffix").checked) {
      var foodSu = randomizeIt(foodS);
      var foodSuGo = displayName(foodSu);
      suffix_array.push(foodSuGo);
    }
    if (document.getElementById("generalSuffix").checked) {
      var generalSu = randomizeIt(generalS);
      var generalSuGo = displayName(generalSu);
      suffix_array.push(generalSuGo);
    }
    if (document.getElementById("journalSuffix").checked) {
      var journalSu = randomizeIt(journalS);
      var journalSuGo = displayName(journalSu);
      suffix_array.push(journalSuGo);
    }
    if (document.getElementById("lifestyleSuffix").checked) {
      var lifestyleSu = randomizeIt(lifestyleS);
      var lifestyleSuGo = displayName(lifestyleSu);
      suffix_array.push(lifestyleSuGo);
    }
    if (document.getElementById("plantSuffix").checked) {
      var plantSu = randomizeIt(plantS);
      var plantSuGo = displayName(plantSu);
      suffix_array.push(plantSuGo);
    }
    if (document.getElementById("studySuffix").checked) {
      var studySu = randomizeIt(studyS);
      var studySuGo = displayName(studySu);
      suffix_array.push(studySuGo);
    }
    if (document.getElementById("techSuffix").checked) {
      var techSu = randomizeIt(techS);
      var techSuGo = displayName(techSu);
      suffix_array.push(techSuGo);
    }
  }

  prefixGen();
  middleGen();
  suffixGen();

  yourPre = prefix_array.join("");
  yourMid = middle_array.join("");
  yourSuf = suffix_array.join("");

  var preBox = document.getElementById("preBox");
  var midBox = document.getElementById("midBox");
  var sufBox = document.getElementById("sufBox");

  preBox.innerText = yourPre;
  midBox.innerText = yourMid;
  sufBox.innerText = yourSuf;
}

// 

// yourName = username_array.join("");

// var nameBox = document.getElementById("nameBox");
// nameBox.innerText = yourName;
// }