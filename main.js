import handler from "./api/flavor.js";

let button = document.getElementById('flavFetch');

button.addEventListener('click', () => {
    document.getElementById('flavor').innerHTML = ${handler}
});