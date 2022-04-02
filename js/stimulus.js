let n_do_pressed = false
let _keys = {}
let synths = {}

document.addEventListener('keydown', function (event) {
    event.preventDefault()
    if (!_keys[event.key]) {
        synths[event.key] = new Tone.Synth({
            "oscillator" : {
                "type" : "sine",
                "modulationFrequency" : 1
            },
            "envelope" : {
                "attack" : 0.02,
                "decay" : 0.1,
                "sustain" : 0.2,
                "release" : 2,
            }
        }).toDestination();
        const now = Tone.now()
        synths[event.key].triggerAttack(notes[event.key], now)
        synths[event.key].triggerRelease(now + 1)
        let button = document.getElementById(event.key)
        button.style.backgroundColor = "rgb(120, 120, 120)"
        _keys[event.key] = true
    }
})

document.addEventListener('keyup', function (event) {
    event.preventDefault()
    _keys[event.key] = false
    synths[event.key].triggerRelease()
    delete synths[event.key]
    let button = document.getElementById(event.key)
    button.style.backgroundColor = "rgb(226, 226, 226)"
})

function give_coffee(url) {
    window.location.href = 'https://www.buymeacoffee.com/nanashi1'
}