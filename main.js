// Set count and increment count
const count = document.querySelector(".count")
let num = 1

const increment = () => {
    num++
    if(num >= 5) {
        reset()
    }
    count.innerText = num
}

// Resets count
const reset = () => {
    num = 1
}

// Sets metronome as default setting
Metronome.checked = true

// Setup sounds
const tick = new Audio('sounds/tick.mp3')
const tock = new Audio('sounds/tock.mp3')
const kickDrum = new Audio('sounds/kick-drum.mp3')
const hiHat = new Audio('sounds/hi-hat.mp3')
const snareDrum = new Audio('sounds/snare-drum.mp3')

// Query elements
const kickDrumNum = document.querySelector("#kickDrumNum")
const hiHatNum = document.querySelector("#hiHatNum")
const snareDrumNum = document.querySelector("#snareDrumNum")

// This function is called every 600ms
const update = () => {
    
    increment()

    if(Metronome.checked) {
        if(num % 4 === 0) {
            tock.play()
        }
        else {
            tick.play()
        }
    }

    if(KickDrum.checked) {
        if(Number(kickDrumNum1.value) === num || Number(kickDrumNum2.value) === num) {
            kickDrum.play()
        }
    }

    if(HiHat.checked) {
        if(Number(hiHatNum1.value) === num || Number(hiHatNum2.value) === num) {
            hiHat.play()
        }
    }

    if(SnareDrum.checked) {
        if(Number(snareDrumNum1.value) === num || Number(snareDrumNum2.value) === num) {
            snareDrum.play()
        }
    }

}

// This function sets up update() to be called every 600ms
const setupUpdate = () => {
    setInterval(update, 600)
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300)