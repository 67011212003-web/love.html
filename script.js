const messageText = "ขอบคุณที่เข้ามาเป็นส่วนหนึ่งในชีวิตเรานะ... ทุกรอยยิ้มของเธอมีความหมายกับเรามากจริงๆ วันนี้เราเลยอยากถามความรู้สึกของเธอว่า...";
const typewriterElement = document.getElementById('typewriter');
const interactionArea = document.getElementById('interactionArea');

// 1. ฟังก์ชันตัวโน้ตดนตรี
function createNote() {
    const notes = ['🎵', '🎶', '✨', '🌸'];
    const note = document.createElement('div');
    note.className = 'note';
    note.innerHTML = notes[Math.floor(Math.random() * notes.length)];
    note.style.left = Math.random() * 100 + "vw";
    note.style.top = "100vh";
    document.getElementById('music-notes-container').appendChild(note);
    setTimeout(() => note.remove(), 5000);
}

// 2. ฟังก์ชันพิมพ์ดีด
function typeWriter(text, i) {
    if (i < text.length) {
        typewriterElement.innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(text, i + 1), 75);
    } else {
        interactionArea.classList.remove('hidden');
        setTimeout(() => interactionArea.style.opacity = '1', 100);
    }
}

// 3. ฟังก์ชันเปิดซองจดหมาย
function openEnvelope() {
    document.getElementById('bgMusic').play().catch(() => {});
    setInterval(createNote, 600);
    
    document.getElementById('envelope-wrapper').style.display = 'none';
    document.getElementById('mainContent').classList.remove('hidden');
    document.querySelector('.photo-frame').classList.add('polaroid-reveal');
    
    typeWriter(messageText, 0);
}

// 4. ปุ่มหนี (No)
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// 5. เมื่อกดตกลง
document.getElementById('yesBtn').onclick = () => {
    document.querySelector('.scrapbook').style.opacity = '0';
    document.querySelector('.scrapbook').style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        document.body.innerHTML = `
            <div style="text-align:center; animation: fadeIn 2s;">
                <h1 style="font-family:'Charm'; color:#ff4d6d; font-size:3.5rem;">Happy Ending ❤️</h1>
                <p style="font-size:1.2rem; color:#a98467;">สัญญาว่าจะดูแลเธอให้ดีที่สุดเลยนะ</p>
                <div style="font-size:4rem; margin-top:20px;">👩‍❤️‍👨</div>
            </div>
        `;
        document.body.style.background = "#fff0f3";
    }, 1000);
};