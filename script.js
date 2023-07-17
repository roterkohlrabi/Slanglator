var replacements = {
  "Hallo": ["Hi", "Hey", "Guten Tag"],
  "Welt": ["Globus", "Erde", "Planet"],

  "Ablehnung": ["Rejection", "Passes", "Declines"],
  "Abwasser": ["Pissewasser", "Kackwasser"],
  "Abwehr": ["Defence"],
  "Abzweigung": ["Branch"],
  "Achterbahn": ["Wilde Coaster"],
  "Affe": ["Ape"],
  "Aggression": ["Rage"],
  "Ahnung": ["Clue", "Plan"],
  "Aktion": ["Action", "Party"],
  "Alarm": ["Erweckungssound des Todes"],
  "Alkohol": ["Booze"],
  "allgemnein": ["general"],
  "Alptraum": ["Nightmare"],
  "alt": ["old school", "antik", "boomerlich"],
  "Altenheim": ["Boomerland", "Heim der Alten Säcke", "Heim der Antiken Menschen"],
  "altmodisch": ["old school", "antik", "boomerlich"],
  "Anblick": ["View"],
  "Änderungen" ["Changes"],
  "Anfänger" ["Noob", "Rookie", "Newbie"],
  "ängstlich" ["eine P*ssy"],
  "Anmeldung" ["Logins"],
  "Ansicht": ["View"],
  "arrogant": ["assi"],
  "Ausblick": ["View"],
  "Australien": ["Down Under"],
  "Auswertung": ["Eval"],
  "Auto": ["Kutsche"],
  "Autobahn": ["Raserstrecke"],
  "Autofahrer": ["Kutschenführer"],
  "Autokino": ["Kutschenkino"],
  "Autorennen": ["Kutschenracing"],
  "Azubi": ["Jobnoob"],
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


var lightModeBtn = document.getElementById("lightMode")
var darkModeBtn = document.getElementById("darkMode")
var backgroundColor = document.getElementById("background")


lightModeBtn.onclick = function lightMode(){
    backgroundColor.style.backgroundColor = "#fff" //light mode color
}

darkModeBtn.onclick = function darkMode(){
    backgroundColor.style.backgroundColor = "#222" //dark mode color
}
