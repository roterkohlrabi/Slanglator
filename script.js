var replacements = {
  "Hallo": ["Hi", "Hey", "Guten Tag"],
  "Welt": ["Globus", "Erde", "Planet"],
  // Weitere Wortersetzungspaare hier definieren
};

var additionalReplacements = ["Assi", "bodenlos", "cringe", "dayum", "Ehrenmann", "flex", "Gommemode", "haram", "it's a prank bro", "Jungfrau", "krass", "Luder", "muss los", "noice", "Opfer", "pass", "Quatschtempel", "reudig", "slay", "toxic", "unter aller Würde", "vallah", "Weichei", "xD, icks deh", "YOLO!", "Zickenstall"];

function slanglate() {
  var input = document.getElementById('input').value; // Wert des Input-Feldes abrufen

  if (input === "") {
    alert("ERROR: Bitte geben Sie etwas ein");
    return;
  }

  var paragraphs = input.split("\n"); // Eingabe in Absätze aufteilen

  var modifiedParagraphs = paragraphs.map(function (paragraph) {
    if (paragraph === "") {
      return ""; // Zeilensprünge ohne Wörter beibehalten
    }

    var words = paragraph.split(' '); // Absatz in ein Array von Wörtern aufteilen

    var modifiedWords = words.map(function (word) {
      if (replacements.hasOwnProperty(word)) {
        var possibleReplacements = replacements[word];
        var randomIndex = Math.floor(Math.random() * possibleReplacements.length);
        return possibleReplacements[randomIndex];
      } else if (additionalReplacements.includes(word)) {
        // Wort aus dem zusätzlichen Array verwenden
        return word;
      } else {
        // Wort beibehalten, wenn es nicht in der Ersetzungsliste enthalten ist
        var randomIndex = Math.floor(Math.random() * additionalReplacements.length);
        return additionalReplacements[randomIndex];
      }
    });

    return modifiedWords.join(' '); // Modifizierte Wörter zu einem Absatz zusammenfügen
  });

  var modifiedText = modifiedParagraphs.join('\n'); // Modifizierte Absätze zu einem Text zusammenfügen

  console.log(modifiedText); // Den Text mit den ersetzen Wörtern anzeigen
  document.getElementById("output").value = modifiedText;
}
