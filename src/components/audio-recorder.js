import {LitElement, html} from '@polymer/lit-element';

class AudioRecorder extends LitElement {

    static get properties() {
        return {
            recording: { type: Boolean },
            saving: { type: Boolean },
            seconds: { type: Number }
        };
    }

    constructor() {
        super();
        this._ticker = null;
        this._chunks = [];
        this._recorder = null;
    }

    _startRecording(event) {

        event.preventDefault && event.preventDefault();
        event.stopPropagation && event.stopPropagation();
        event.cancelBubble = true;
        event.returnValue = false;

        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
            this._recorder = new MediaRecorder(stream);
            this.seconds = 0;
            this._ticker = setInterval(() => this.seconds++, 1000);
            this.recording = true;
            window.navigator.vibrate(100);
            this._recorder.start();
            this._recorder.addEventListener("dataavailable", event => {
                this._chunks.push(event.data);
            });
        });

    }

    _stopRecording() {
        
        this._recorder.addEventListener("stop", (event) => {
            console.log("STOPPED:", event);
            this.dispatchEvent(new CustomEvent("audio-recorded", {
                detail: {
                    date: new Date(),
                    blob: new Blob(this._chunks)
                }
            }));
            this._chunks = [];
            this._recorder = null;
            this.saving = false;
        });

        clearInterval(this._ticker);
        this.recording = false;
        this.saving = true;
        this._recorder.stop();
        
    }

    render() {
        return html`
            <style>
                :host {
                    display: flex;
                    padding: 1rem .5rem;                    
                    user-select: none;
                    background: #333;
                    color: #FFF;
                    position: relative;
                    overflow: hidden;
                }
                .left {
                    flex-basis: 5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 1rem;
                    position: relative;
                    z-index: 2;
                }
                .right {
                    flex: 1 1;
                    display: flex;
                    align-items: center;
                    position: relative;
                    z-index: 2;
                }
                .right span {
                    font-size: 1.5rem;
                }
                .right p {
                    font-style: italic;
                }
                .record {
                    width: 4rem;
                    height: 4rem;
                    border-radius: 50%;
                    background: #666;
                    border: none;
                    box-shadow: 0 0 5px rgba(0, 0, 0, .2);
                    outline: none;
                    position: relative;
                    padding: 0;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .record svg {
                    position: relative;
                    z-index: 2;
                }
                .record .btn-fill {
                    background: #f44242;
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    z-index: 1;
                    transform: scale(0);
                    transition: transform 300ms ease-in;
                }
                .record.recording .btn-fill {
                    transform: scale(1);
                }
                .fill {
                    position: absolute;
                    z-index: 1;
                    left: calc(50% - 45px);
                    top: 0;
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    background: #cc3737;
                    transform: scale(0);
                    transition: transform 300ms ease-in;
                }
                .fill.recording {
                    transform: scale(5);
                }
            </style>
            <div class="fill ${this.recording ? 'recording' : ''}"></div>
            <div class="left">
                <a href="javascript:void(0)" class="record ${this.recording ? 'recording' : ''}" @touchstart=${(event) => this._startRecording(event)} @touchend=${(event) => this._stopRecording(event)}>
                    <div class="btn-fill"></div>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#FFFFFF">
                        <path d="M19 11v-1h-2v1c0 2.756-2.244 5-5 5s-5-2.244-5-5v-1h-2v1c0 3.522 2.613 6.441 6 6.928v1.572c0 0.6-0.494 1.212-1.35 1.681-0.966 0.528-2.262 0.819-3.65 0.819v1h12v-1c-1.387 0-2.684-0.291-3.65-0.819-0.859-0.469-1.35-1.081-1.35-1.681v-1.572c3.387-0.488 6-3.406 6-6.928zM13.763 22h-3.525c1.094-0.631 1.763-1.512 1.763-2.5 0 0.987 0.669 1.869 1.762 2.5z"></path>
                        <path d="M12 15c2.206 0 4-1.794 4-4v-6c0-2.206-1.794-4-4-4s-4 1.794-4 4v6c0 2.206 1.794 4 4 4zM10 5c0-1.103 0.897-2 2-2s2 0.897 2 2v6c0 1.103-0.897 2-2 2s-2-0.897-2-2v-6z"></path>
                    </svg>
                </a>
            </div>
            <div class="right">
        ${this.recording ? html`<span>00:00:${(this.seconds + "").padStart(2, "0")}</span>` : html`<p>Press and hold to record</p>`}                    
            </div>                      
        `;
    }

}

customElements.define("audio-recorder", AudioRecorder);