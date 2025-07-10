  document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("changeColorBtn");
    button.addEventListener("click", function() {
      const colors = ["#89CFF0", "#ff5733", "#92574b", "#d2b48c", "#c48e76"];
      const randomcolor = colors[Math.floor(Math.random()* colors.length)];
      document.body.style.background = randomcolor;
    });
  });