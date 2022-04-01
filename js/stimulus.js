let n_do_pressed = false
let _keys = {}
let synths = {}

document.addEventListener('keydown', function (event) {
    event.preventDefault()
    if (!_keys[event.key]) {
        synths[event.key] = new Tone.Synth().toDestination();
        synths[event.key].triggerAttack(notes[event.key], "8n")
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