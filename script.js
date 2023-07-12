
var replacements = {
  "Hallo": ["Hi", "Hey", "Guten Tag"],
  "Welt": ["Globus", "Erde", "Planet"],
  // Weitere Wortersetzungspaare hier definieren
};

var additionalReplacements = ["Assi", "bodenlos", "cringe", "dayum", "Ehrenmann", "flex", "Gommemode", "haram", "it's a prank bro", "Jungfrau", "krass", "Luder", "muss los", "noice", "Opfer", "pass", "Quatschtempel", "reudig", "slay", "toxic", "unter aller Würde", "vallah", "Weichei", "xD, icks deh", "YOLO!", "Zickenstall"];

function slanglate() {
  var input = document.getElementById('input').value; // Wert des Input-Feldes abrufen
  var words = input.split(' '); // Eingabe in ein Array von Wörtern aufteilen

  var modifiedWords = words.map(function(word) {
    // Wort aus dem zusätzlichen Array verwenden
    var randomIndex = Math.floor(Math.random() * additionalReplacements.length);
    return additionalReplacements[randomIndex];
  });

  var modifiedText = modifiedWords.join(' ');

  console.log(modifiedText); // Den Text mit den ersetzen Wörtern anzeigen
  document.getElementById("output").value = modifiedText;
}
