// Quiz visual images — HTML strings rendered inside quiz questions
const quizImages = {

    // ── TOWN MAP (p.37) ─────────────────────────────────────────────────
    // Layout matches the book's town map: 4 columns × 3 rows + 2 streets
    townMap: `
<div style="margin:10px 0 2px;font-family:sans-serif;font-size:0.76em;">
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:5px;max-width:460px;margin:0 auto;">

    <div style="background:#546e7a;color:#fff;padding:7px 3px;border-radius:9px;text-align:center;line-height:1.35">🏛️<br><b>Town Hall</b></div>
    <div style="background:#c0392b;color:#fff;padding:7px 3px;border-radius:9px;text-align:center;line-height:1.35">🏥<br><b>Hospital</b></div>
    <div style="background:#1565c0;color:#fff;padding:7px 3px;border-radius:9px;text-align:center;line-height:1.35">🚔<br><b>Police Station</b></div>
    <div style="background:#e65100;color:#fff;padding:7px 3px;border-radius:9px;text-align:center;line-height:1.35">🛍️<br><b>Shopping Centre</b></div>

    <div style="grid-column:1/-1;background:#90a4ae;height:15px;border-radius:4px;display:flex;align-items:center;padding:0 10px;color:#fff;font-size:0.9em;box-sizing:border-box;">🛣️ Main Street</div>

    <div style="background:#f57f17;color:#fff;padding:7px 3px;border-radius:9px;text-align:center;line-height:1.35">📮<br><b>Post Office</b></div>
    <div style="background:#6a1099;color:#fff;padding:7px 3px;border-radius:9px;text-align:center;line-height:1.35">☕<br><b>Café</b></div>
    <div style="background:#00796b;color:#fff;padding:7px 3px;border-radius:9px;text-align:center;line-height:1.35">🛒<br><b>Supermarket</b></div>
    <div style="background:#37474f;color:#fff;padding:7px 3px;border-radius:9px;text-align:center;line-height:1.35">🚉<br><b>Train Station</b></div>

    <div style="grid-column:1/-1;background:#90a4ae;height:15px;border-radius:4px;display:flex;align-items:center;padding:0 10px;color:#fff;font-size:0.9em;box-sizing:border-box;">🛣️ High Street</div>

    <div style="background:#2e7d32;color:#fff;padding:7px 3px;border-radius:9px;text-align:center;line-height:1.35">🌳<br><b>Park</b></div>
    <div style="background:#b71c1c;color:#fff;padding:7px 3px;border-radius:9px;text-align:center;line-height:1.35">🚒<br><b>Fire Station</b></div>
    <div style="background:#4a148c;color:#fff;padding:7px 3px;border-radius:9px;text-align:center;line-height:1.35">⛪<br><b>Church</b></div>
    <div style="background:#1b5e20;color:#fff;padding:7px 3px;border-radius:9px;text-align:center;line-height:1.35">🏫<br><b>School</b></div>

  </div>
  <p style="text-align:center;color:#aaa;font-size:0.82em;margin:5px 0 0;">📖 p.37</p>
</div>`,

    // ── HOUSE OBJECTS SCENE (p.40) ──────────────────────────────────────
    // Shows all object positions: on/in/under/behind/in front of
    houseObjects: `
<div style="margin:10px 0 2px;font-family:sans-serif;font-size:0.8em;background:#f1f3f5;border-radius:14px;padding:12px;">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;max-width:440px;margin:0 auto;">

    <!-- Bike + Guitar -->
    <div style="background:white;border-radius:10px;padding:9px;text-align:center;border:2px solid #dee2e6;">
      <div style="font-size:1.9em;letter-spacing:-4px;">🎸🚲</div>
      <div style="margin-top:4px;">🎸 guitar<br><b style="color:#e65100;">BEHIND</b> 🚲 bike</div>
    </div>

    <!-- Bag + Phone -->
    <div style="background:white;border-radius:10px;padding:9px;text-align:center;border:2px solid #dee2e6;">
      <div style="font-size:1.9em;">🎒</div>
      <div style="margin-top:4px;">📱 phone<br><b style="color:#1565c0;">IN</b> 🎒 bag</div>
    </div>

    <!-- Desk: laptop + watch -->
    <div style="background:white;border-radius:10px;padding:9px;text-align:center;border:2px solid #dee2e6;">
      <div style="display:flex;justify-content:center;align-items:center;gap:4px;font-size:1.5em;">⌚<span style="font-size:0.6em;color:#888;">→</span>💻</div>
      <div style="background:#a0522d;height:5px;border-radius:3px;margin:4px 8px;"></div>
      <div style="margin-top:4px;line-height:1.5">
        ⌚ <b style="color:#1565c0;">IN FRONT OF</b> 💻<br>
        💻 <b style="color:#2e7d32;">ON</b> desk 🖥️
      </div>
    </div>

    <!-- Chair: glasses on, videogame+cards under -->
    <div style="background:white;border-radius:10px;padding:9px;text-align:center;border:2px solid #dee2e6;">
      <div>👓 <b style="color:#2e7d32;">ON</b> 💺</div>
      <div style="font-size:1.8em;margin:2px 0;">💺</div>
      <div>🎮 🃏 <b style="color:#6a1099;">UNDER</b> 💺</div>
    </div>

  </div>
  <p style="text-align:center;color:#aaa;font-size:0.82em;margin:6px 0 0;">📖 p.40</p>
</div>`,

    // ── ANIMALS: CAN SWIM? (p.48) ───────────────────────────────────────
    // Q14: "Which of these animals CAN swim?" — eagle / lion / sheep / dolphin
    animalSwim: `
<div style="margin:10px 0 2px;font-family:sans-serif;font-size:0.82em;background:#e3f2fd;border-radius:14px;padding:12px;">
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;max-width:400px;margin:0 auto;text-align:center;">
    <div style="background:#fff8e1;border-radius:10px;padding:7px;border:2px solid #ffc107;">
      <div style="font-size:1.8em;">🦅</div>
      <div style="font-size:0.85em;margin-top:3px;"><b>eagle</b></div>
      <div style="color:#c62828;">❌ swim</div>
      <div style="color:#2e7d32;">✅ fly</div>
    </div>
    <div style="background:#fff8e1;border-radius:10px;padding:7px;border:2px solid #ffc107;">
      <div style="font-size:1.8em;">🦁</div>
      <div style="font-size:0.85em;margin-top:3px;"><b>lion</b></div>
      <div style="color:#c62828;">❌ swim</div>
      <div style="color:#2e7d32;">✅ run</div>
    </div>
    <div style="background:#fff8e1;border-radius:10px;padding:7px;border:2px solid #ffc107;">
      <div style="font-size:1.8em;">🐑</div>
      <div style="font-size:0.85em;margin-top:3px;"><b>sheep</b></div>
      <div style="color:#c62828;">❌ swim</div>
    </div>
    <div style="background:#0288d1;border-radius:10px;padding:7px;border:3px solid #01579b;">
      <div style="font-size:1.8em;">🐬</div>
      <div style="font-size:0.85em;margin-top:3px;color:white;"><b>dolphin</b></div>
      <div style="color:#b3e5fc;font-weight:bold;font-size:1em;">✅ SWIM!</div>
    </div>
  </div>
  <p style="text-align:center;color:#aaa;font-size:0.82em;margin:6px 0 0;">📖 p.46–48</p>
</div>`,

    // ── ANIMALS: CAN FLY? (p.48) ────────────────────────────────────────
    // Q9: options are penguin / eagle / duck / chicken
    animalFly: `
<div style="margin:10px 0 2px;font-family:sans-serif;font-size:0.82em;background:#f3e5f5;border-radius:14px;padding:12px;">
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;max-width:400px;margin:0 auto;text-align:center;">
    <div style="background:#fff;border-radius:10px;padding:7px;border:2px solid #ce93d8;">
      <div style="font-size:1.8em;">🐧</div>
      <div style="font-size:0.85em;"><b>penguin</b></div>
      <div style="color:#c62828;">❌ fly</div>
    </div>
    <div style="background:#e8f5e9;border-radius:10px;padding:7px;border:3px solid #388e3c;">
      <div style="font-size:1.8em;">🦅</div>
      <div style="font-size:0.85em;"><b>eagle</b></div>
      <div style="color:#2e7d32;font-weight:bold;">✅ FLY!</div>
    </div>
    <div style="background:#fff;border-radius:10px;padding:7px;border:2px solid #ce93d8;">
      <div style="font-size:1.8em;">🦆</div>
      <div style="font-size:0.85em;"><b>duck</b></div>
      <div style="color:#c62828;">❌ high fly</div>
    </div>
    <div style="background:#fff;border-radius:10px;padding:7px;border:2px solid #ce93d8;">
      <div style="font-size:1.8em;">🐔</div>
      <div style="font-size:0.85em;"><b>chicken</b></div>
      <div style="color:#c62828;">❌ fly</div>
    </div>
  </div>
  <p style="text-align:center;color:#aaa;font-size:0.82em;margin:6px 0 0;">📖 p.48</p>
</div>`

};
