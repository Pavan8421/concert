document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".navbar-nav a");
  const divs = document.querySelectorAll(".content");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default link behavior

      // Remove active class from all divs
      divs.forEach(div => div.classList.remove("active"));

      // Show the corresponding content div
      const targetDiv = document.querySelector(`#${this.id.replace('Link', 'Div')}`);
      //console.log(targetDiv);
      if (targetDiv) {
        targetDiv.classList.add("active");
      }
    });
  });
});