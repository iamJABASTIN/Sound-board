const sounds = [ 'crash','tom1','tom2','tom3','tom4','kick']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound

    btn.addEventListener('click',() => {
        stopSound()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSound(){
    sounds.forEach(sound => {
        const s = document.getElementById(sound)

        s.pause()
        s.currentTime = 0;
    })
}