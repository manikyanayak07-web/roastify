function generateRoast() {
  const roasts = [
    "You're proof that even evolution takes breaks.",
    "If brains were dynamite, you wouldn’t have enough to blow your nose.",
    "You bring everyone joy… when you leave the room.",
    "You're like a cloud. When you disappear, it’s a beautiful day."
  ];
  const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
  const roastElement = document.getElementById("roast");
  roastElement.innerText = randomRoast;

  // Random background color
  const colors = ["#ff6a00", "#ee0979", "#00c9ff", "#92fe9d"];
  document.body.style.background = `linear-gradient(135deg, ${colors[Math.floor(Math.random()*colors.length)]}, black)`;
}


