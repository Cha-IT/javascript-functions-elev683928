// regner ut areal av sirkel
function arealSirkel(radius) {
    return Math.PI * radius * radius;
}

// regn ut arealene
const areal1 = arealSirkel(24);
const areal2 = arealSirkel(32);

// Vis resultatene
document.getElementById('result').innerHTML = `
    <p>Sirkel med radius 24: ${Math.round(areal1)} kvadratenheter</p>
    <p>Sirkel med radius 32: ${Math.round(areal2)} kvadratenheter</p>
`;