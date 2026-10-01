function generateRoast() {
  const roasts = [
    "You're proof that even evolution takes breaks.",
    "If brains were dynamite, you wouldn’t have enough to blow your nose.",
    "You bring everyone so much joy… when you leave the room.",
    "You're like a cloud. When you disappear, it’s a beautiful day."
  ];
  const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
  document.getElementById("roast").innerText = randomRoast;
}
