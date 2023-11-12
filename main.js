

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function playAudio(audio) {
    return new Promise(res => {
        audio.play()
        audio.onended = res
    })
}


async function playMp3(path) {
    console.log(1);
    await playAudio(new Audio(path))
    console.log(2);
}

/**
 * 
 * @param {HTMLAudioElement} music 
 */
async function cp(music) {
    if (music.paused) {
        // we just want to resume
        music.play()
    } else {
        music.pause()
    }
}

function mcp(songPath = undefined) {
    const MAX_TIME_SECONDS = 30
    const MIN_TIME_SECONDS = 10
    const PAUSE_WAIT_SECONDS = 5
    const path = songPath || songs.getSongSrc()

    audio.pause()
    audio = new Audio(path)
    audio.onloadeddata = async () => {
        while ((audio.currentTime || 0) < audio.duration) {
            audio.play()
            const pauseAfterSeconds = Math.floor(
                randomNumberBetween(MIN_TIME_SECONDS, MAX_TIME_SECONDS)
            )
            await wait(pauseAfterSeconds * 1000)
            audio.pause()
            await wait(PAUSE_WAIT_SECONDS * 1000)
        }
    }
}

/**
 * includes the min, excludes the max
 * @param {number} min 
 * @param {number} max 
 * @returns
 */
function randomNumberBetween(min, max) {
    return Math.random() * Math.abs(max - min) + min
}

function pause() {
    audio?.pause()
}

function play() {
    audio?.play()
}

function playPause() {
    if (!audio.currentTime) {
        return
    }
    if (audio.paused) {
        // we just want to resume
        audio.play()
        return false
    } else {
        audio.pause()
        return true
    }
}

function currentTime() {
    return audio?.currentTime
}


function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

class Album {
    /**
     * 
     * @param {Array<string>} songSrcs 
     */
    constructor(songSrcs) {
        this.srcs = songSrcs
    }

    /**
     * gets the src of a random song
     * @returns {string}
     */
    getSongSrc() {
        return removeItemFromArray(this.srcs, randomIdx(this.srcs))
    }

    addSong(src) {
        this.srcs.unshift(src)
    }

    songDataFromUrl = (urlStr) => {
        const pathname = (new URL(urlStr)).pathname;
        const fileName = pathname.split('/').pop();
        return {
            name: removeBensound(fileName),
            path: urlStr,
        }
    }

    albumData() {
        return this.srcs.map(this.songDataFromUrl)
    }
}

/**
 * 
 * @param {string} string 
 * @returns 
 */
function removeBensound(string) {
    return string.replace("bensound-", "")
}



/**
 * 
 * @param {Array<*>} arr 
 * @param {number} idx 
 */
function removeItemFromArray(arr, idx) {
    const removedItem = arr[idx]
    if (idx < arr.length) {
        arr.splice(idx, 1)
    }
    return removedItem
}

function randomIdx(arr) {
    return Math.floor(randomNumberBetween(0, arr.length))
}


const BENSOUND_COLLECTION = [
    "https://cdn.bensound.com/bensound-happyrock.mp3",
    "https://cdn.bensound.com/bensound-elevate.mp3",
    "https://cdn.bensound.com/bensound-anewbeginning.mp3",
    "https://cdn.bensound.com/bensound-extremeaction.mp3",
    "https://cdn.bensound.com/bensound-dubstep.mp3",
    "https://cdn.bensound.com/bensound-moose.mp3",
]

const songs = new Album(BENSOUND_COLLECTION)

let audio = new Audio()


function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }


ready(() => {
    //  this is the main entrance

    const eventAwesome = new CustomEvent("awesome", {
        bubbles: true,
        detail: { text: () => textarea.value },
    });


    const albumContainer = document.getElementById("album")
    albumContainer.replaceChildren(
        ...songs.albumData().map(songData => {
            const publisher = ui_publisher()
            return ui_article("",
                ui_h2("", songData.name),
                // ---- play game button ----
                (() => {
                    const btn = ui_button("", "Start Game With this Song")
                    btn.onclick = () => {
                        mcp(songData.path)
                        publisher.publish(songData.name)
                    }
                    return btn
                })(),
                // ---- play/pause button ----
                publisher.makeSubscriber((() => {
                    const btn = ui_button("", "Play/Pause")
                    btn.onclick = () => {
                        const paused = playPause()
                        if (paused) {
                            btn.replaceChildren("Play")
                        }
                    }
                    return btn
                })(), (btn, data)=>{
                    btn.replaceChildren("Pause")
                })
            )
        })
    )
})