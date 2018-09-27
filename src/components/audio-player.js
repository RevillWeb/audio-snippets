import {LitElement, html} from '@polymer/lit-element';

class AudioPlayer extends LitElement {

    static get properties() {
        return {
            playing: { type: Boolean },
            duration: { type: Number },
            seconds: { type: Number },
            src: {
                type: String,
                attribute: true
            },
            date: { type: String }
        };
    }

    constructor() {
        super();
        this._$audio = null;
        this._ticker = null;
        this._metadataLoaded = this._metadataLoaded.bind(this);
    }

    toggle() {
        
        if (!this.playing) {

            this.playing = true;
            this._$audio.addEventListener("ended", () => {
                this.playing = false;
                clearInterval(this._ticker);
            }, { once: true });
            this.seconds = 0;
            this._ticker = setInterval(() => this.seconds++, 1000);
            this._$audio.play();

        } else {

            this._$audio.pause();
            this._$audio.currentTime = 0;
            this.playing = false;
            clearInterval(this._ticker);

        }
    }

    updateComplete() {
        console.log("URL:", this.src + "");
        this._$audio = this.shadowRoot.getElementById("audio");
        this._$audio.addEventListener("loadedmetadata", (event) => {
            console.log(event);
            
        }, { once: true });
    }

    _metadataLoaded() {
        if (this._$audio === null) this._$audio = this.shadowRoot.getElementById("audio");
        // There is a bug in Chrome which results in duration being Infinity
        if (this._$audio.duration === Infinity) {
            this._$audio.addEventListener("timeupdate", () => {
                // Now the duration should be correct
                this._$audio.currentTime = 0;
                this.duration = this._$audio.duration;
            }, { once: true });
            // We can work around it by setting the currentTime property
            this._$audio.currentTime = 1000000;
        } else {                
            this.duration = this._$audio.duration;
        }
    }

    _getDays() {
        const days = Math.round(Math.abs((new Date(this.date).getTime() - new Date().getTime())/(24*60*60*1000)));
        return (days > 0) ? html`Recorded ${days} days ago` : html`Recorded today`;
    }

    _getDuration() {
        const duration = Math.round(this.duration, 1);
        return html`${duration} second${duration === 0 || duration > 1 ? 's' : ''}`;
    }

    render() {
        return html`
            <style>
                :host {
                    display: flex;
                    padding: 1rem .5rem;                    
                    user-select: none;
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
                    flex-direction: column;
                    display: flex;
                    font-size: 1.1rem;
                    justify-content: center;
                    position: relative;
                    z-index: 2;
                }
                .right span {
                    font-size: 1.5rem;
                    color: #FFF;
                }
                .right p {
                    font-style: italic;
                }
                .very-right {
                    flex-basis: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .play {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 4rem;
                    height: 4rem;
                    border-radius: 50%;
                    background: #666;
                    border: none;
                    box-shadow: 0 0 5px rgba(0, 0, 0, .5);
                    outline: none;
                    position: relative;
                    padding: 0;
                    overflow: hidden;
                }
                .fill {
                    position: absolute;
                    z-index: 1;
                    left: calc(50% - 45px);
                    top: 0;
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    background: #35C335;
                    transform: scale(0);
                    transition: transform 300ms ease-in;
                }
                .fill.playing {
                    transform: scale(5);
                }
            </style>
            <div class="fill ${this.playing ? 'playing' : ''}"></div>          
            <div class="left">
                <audio id="audio" src=${this.src} preload="metadata" @loadedmetadata=${this._metadataLoaded}></audio>
                <a class="play" @click=${() => this.toggle()}>
                    ${!this.playing ? html`
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#FFFFFF">
                            <path d="M20.516 11.144l-15-9c-0.309-0.184-0.694-0.191-1.006-0.012-0.316 0.175-0.509 0.509-0.509 0.869v18c0 0.359 0.194 0.694 0.506 0.869 0.153 0.087 0.322 0.131 0.494 0.131 0.178 0 0.356-0.047 0.516-0.144l15-9c0.3-0.181 0.484-0.506 0.484-0.856s-0.184-0.678-0.484-0.856zM6 19.234v-14.469l12.056 7.234-12.056 7.234z"></path>
                        </svg>
                    ` : html`
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#FFFFFF">
                            <path d="M21 2h-18c-0.553 0-1 0.447-1 1v18c0 0.553 0.447 1 1 1h18c0.553 0 1-0.447 1-1v-18c0-0.553-0.447-1-1-1zM20 20h-16v-16h16v16z"></path>
                        </svg>
                    `} 
                </a>
            </div>
            <div class="right">
                ${this.playing ? html`<span>00:00:${(this.seconds + "").padStart(2, "0")}</span>` : html`
                    ${this.date ? html`<div>${this._getDays()}</div>` : ''}
                    <div>Duration: ${this._getDuration()}</div>
                `}
            </div>
            <div class="very-right">
                <a href="javascript:void(0)">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M23.656 1.244c-0.297-0.256-0.712-0.319-1.069-0.156l-22 10c-0.384 0.175-0.616 0.569-0.584 0.987s0.319 0.772 0.722 0.888l6.275 1.791v7.247c0 0.441 0.288 0.828 0.709 0.956 0.097 0.028 0.194 0.044 0.291 0.044 0.328 0 0.644-0.162 0.831-0.447l3.513-5.262 5.209 2.606c0.266 0.131 0.575 0.141 0.847 0.022s0.478-0.35 0.559-0.634l5-17c0.109-0.378-0.009-0.784-0.303-1.041zM3.888 11.784l14.078-6.4-9.603 7.684c-0.028-0.012-0.059-0.022-0.087-0.031l-4.387-1.253zM9 18.697v-4.697c0-0.050-0.003-0.1-0.012-0.15l10.472-8.378-8.228 9.888c-0.022 0.028-0.044 0.056-0.063 0.084l-2.169 3.253zM17.378 17.572l-4.722-2.362 8.375-10.066-3.653 12.428z"></path>
                    </svg>
                </a>
            </div>                   
        `;
    }

}

customElements.define("audio-player", AudioPlayer);