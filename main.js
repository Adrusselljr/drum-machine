// Setup sounds
const tick = new Audio('sounds/tick.mp3')
const tock = new Audio('sounds/tock.mp3')
const kickDrum = new Audio('sounds/kick-drum.mp3')
const hiHat = new Audio('sounds/hi-hat.mp3')
const snareDrum = new Audio('sounds/snare-drum.mp3')

// Query elements
// const Metronome = document.querySelector("#Metronome")
// const KickDrum = document.querySelector("#KickDrum")
// const HiHat = document.querySelector("#HiHat")
// const SnareDrum = document.querySelector("#SnareDrum")
// const kickDrumNum1 = document.querySelector("#kickDrumNum1")
// const hiHatNum1 = document.querySelector("#hiHatNum1")
// const snareDrumNum1 = document.querySelector("#snareDrumNum1")
// const kickDrumNum2 = document.querySelector("#kickDrumNum2")
// const hiHatNum2 = document.querySelector("#hiHatNum2")
// const snareDrumNum2 = document.querySelector("#snareDrumNum2")
// const kickEven = document.querySelector("#kickEven")
// const kickOdd = document.querySelector("#kickOdd")
// const kickAll = document.querySelector("#kickAll")
// const hiEven = document.querySelector("#hiEven")
// const hiOdd = document.querySelector("#hiOdd")
// const hiAll = document.querySelector("#hiAll")
// const snareEven = document.querySelector("#snareEven")
// const snareOdd = document.querySelector("#snareOdd")
// const snareAll = document.querySelector("#snareAll")
const count = document.querySelector(".count")
const beatCount = document.querySelector("#beatCount")

// Set count and increment count
let num = 1

const increment = () => {
    num++
    if(num >= Number(beatCount.value) + 1) {
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


// This function is called every 600ms
const update = () => {
    
    increment()

    // Metronome
    if(Metronome.checked) {
        if(num % 4 === 0) {
            tock.play()
        }
        else {
            tick.play()
        }
    }

    // Kick drum inputs
    if(KickDrum.checked) {
        if(Number(kickDrumNum1.value) === num || Number(kickDrumNum2.value) === num) {
            kickDrum.play()
        }
    }
    // Kick drum even count
    if(kickEven.checked) {
        if(num % 2 === 0) {
            kickDrum.play()
        }
    }
    // Kick drum odd count
    if(kickOdd.checked) {
        if(num % 2 === 1) {
            kickDrum.play()
        }
    }
    // Kick drum all count
    if(kickAll.checked) {
        kickDrum.play()
    }

    // Hi-hat inputs
    if(HiHat.checked) {
        if(Number(hiHatNum1.value) === num || Number(hiHatNum2.value) === num) {
            hiHat.play()
        }
    }
    // Hi-hat even count
    if(hiEven.checked) {
        if(num % 2 === 0) {
            hiHat.play()
        }
    }
    // Hi-hat odd count
    if(hiOdd.checked) {
        if(num % 2 === 1) {
            hiHat.play()
        }
    }
    // Hi-hat all count
    if(hiAll.checked) {
        hiHat.play()
    }

    // Snare drum inputs
    if(SnareDrum.checked) {
        if(Number(snareDrumNum1.value) === num || Number(snareDrumNum2.value) === num) {
            snareDrum.play()
        }
    }
    // Snare drum even count
    if(snareEven.checked) {
        if(num % 2 === 0) {
            snareDrum.play()
        }
    }
    // Snare drum odd count
    if(snareOdd.checked) {
        if(num % 2 === 1) {
            snareDrum.play()
        }
    }
    // Snare drum all count
    if(snareAll.checked) {
        snareDrum.play()
    }

}

// This function sets up update() to be called every 600ms
const setupUpdate = () => {
    setInterval(update, 600)
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300)