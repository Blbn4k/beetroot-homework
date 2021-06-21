"use strict"

const someVariable = "111";


function getTime(hours, minutes, seconds) {
    if (!minutes) minutes = "00"

    if (!seconds) seconds = "00"

    console.log(`${hours}:${minutes}:${seconds}`);
}

getTime(12);

function setInnerText (id, text) {
    const el = document.getElementById(id)

    if (el) el.innerText = text
}

setInnerText('output', 'Hi there!!!')