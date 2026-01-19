window.addEventListener("load", () => {
  const intro = document.getElementById("intro");

  setTimeout(() => {
    intro.style.display = "none";
  }, 2300); // sync with animation
});

document.querySelectorAll(".row-scroll").forEach(row => {
  // WHEEL SCROLL (desktop)
  row.addEventListener("wheel", (e) => {
    e.preventDefault();
    row.scrollLeft += e.deltaY;
  });

  // DRAG SCROLL (desktop)
  let isDown = false;
  let startX;
  let scrollLeft;

  row.addEventListener('mousedown', (e) => {
    isDown = true;
    row.classList.add('active');
    startX = e.pageX - row.offsetLeft;
    scrollLeft = row.scrollLeft;
  });

  row.addEventListener('mouseleave', () => {
    isDown = false;
    row.classList.remove('active');
  });

  row.addEventListener('mouseup', () => {
    isDown = false;
    row.classList.remove('active');
  });

  row.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - row.offsetLeft;
    const walk = (x - startX) * 2; // speed multiplier
    row.scrollLeft = scrollLeft - walk;
  });
});
