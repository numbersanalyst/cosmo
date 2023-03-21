import * as THREE from 'three';

let url = "../../subpages/select.html";

document.addEventListener("keydown", (event) => {
    if (event.isComposing || event.keyCode === 27) {
        location.href = url;
    }
});