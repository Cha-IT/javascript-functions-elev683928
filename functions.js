// regner ut areal av sirkel
function arealSirkel(radius) {
    return Math.PI * radius * radius;
}

// regner ut volum av kule
function volumKule(radius) {
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

// regn ut arealene
const areal1 = arealSirkel(24);
const areal2 = arealSirkel(32);

// regn ut volumene
const volum1 = volumKule(11);
const volum2 = volumKule(21);

// Vis resultatene på nettsiden (enkel, lesbar tekst for nybegynnere)
document.getElementById('result').innerHTML = `
    <h2>Arealer</h2>
    <p class="result-item">Sirkel med radius 24: <b>${areal1.toFixed(2)}</b> kvadratenheter</p>
    <p class="result-item">Sirkel med radius 32: <b>${areal2.toFixed(2)}</b> kvadratenheter</p>
    <h2>Volumer av kuler</h2>
    <p class="result-item">Kule med radius 11: <b>${volum1.toFixed(2)}</b> kubikk-enheter</p>
    <p class="result-item">Kule med radius 21: <b>${volum2.toFixed(2)}</b> kubikk-enheter</p>
    <h2>Alderstest</h2>
    `;

// OPPGAVE 3: funksjon som tar navn og alder
function sjekkAlder(navn, alder) {
    if (alder < 30) {
        return `Hei ${navn}, du er ung!`;
    } else {
        return `Hei ${navn}, du er gammel!`;
    }
}

// Eksempler - vis noen tester for oppgave 3
const test1 = sjekkAlder('Ola', 25);
const test2 = sjekkAlder('Kari', 35);
const test3 = sjekkAlder('Mona', 30);

// Legg til testene i resultatområdet
const resultDiv = document.getElementById('result');
resultDiv.innerHTML += `
    <p class="result-item">${test1}</p>
    <p class="result-item">${test2}</p>
    <p class="result-item">${test3}</p>
`;






