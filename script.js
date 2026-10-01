// Show splash for 2 seconds, then reveal app
window.onload = function() {
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("app").style.display = "block";
  }, 2000); // 2000 ms = 2 seconds
};

function generateRoast() {
  const roasts = [
    "You're proof that even evolution takes breaks.",
    "If brains were dynamite, you wouldn’t have enough to blow your nose.",
    "You bring everyone joy… when you leave the room.",
    "You're like a cloud. When you disappear, it’s a beautiful day."
  ];
  const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
  document.getElementById("roast").innerText = randomRoast;
}

