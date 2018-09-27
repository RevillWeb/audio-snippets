import "./components/audio-recorder.js";
import "./components/audio-player.js";
import {render, html} from "lit-html";

let audio = [];

const $list = document.getElementById("list");
const $recorder = document.querySelector("audio-recorder");
function createTemplate(data) {
    return html`${data.map((a) => html`
        <div class="item"><audio-player src=${a.url} date=${a.date}></audio-player></div>
    `)}`;
}
$recorder.addEventListener("audio-recorded", (event) => {
    audio = [{
        ...event.detail,
        url: URL.createObjectURL(event.detail.blob)
    }, ...audio];
    render(createTemplate(audio), $list);
});