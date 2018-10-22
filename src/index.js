import "./components/audio-recorder.js";
import "./components/audio-player.js";
import {render, html} from "lit-html";
import CMBridge from "../lib/cm-app-bridge.js";

let audio = [];

function share(event) {
    console.log("SHARE:", event.detail);
    CMBridge.sendText("HELLO!").then(() => console.log("Success!")).catch((err) => console.error("Oh no!", err));
}

const $list = document.getElementById("list");
const $recorder = document.querySelector("audio-recorder");
function createTemplate(data) {
    return html`${data.map((a) => html`
        <div class="item"><audio-player src=${a.url} date=${a.date} @share=${share}></audio-player></div>
    `)}`;
}
$recorder.addEventListener("audio-recorded", (event) => {
    audio = [{
        ...event.detail,
        url: URL.createObjectURL(event.detail.blob)
    }, ...audio];
    render(createTemplate(audio), $list);
});

// Check that service workers are registered
if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js');
    });
}