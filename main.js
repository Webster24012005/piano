let notes = []


for(let i=0; i<12; i++){
    let note = new Audio()
    notes.push(note)
}
notes[0].src = "Note/C.wav"
notes[1].src = "Note/D.wav"
notes[2].src = "Note/E.wav"
notes[3].src = "Note/F.wav"
notes[4].src = "Note/G.wav"
notes[5].src = "Note/A.wav"
notes[6].src = "Note/B.wav"

notes[7].src = "Note/C1.wav"
notes[8].src = "Note/D1.wav"
notes[9].src = "Note/F1.wav"
notes[10].src = "Note/G_s.wav"
notes[11].src = "Note/A.wav"

let buttons = document.querySelectorAll(".p")

for(let i=0; i<buttons.length; i++){
    buttons[i].onmousedown = function(){
        notes[i].play()
    }
}

console.log(notes)