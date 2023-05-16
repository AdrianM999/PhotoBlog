var textWrappers = document.querySelectorAll('.animation');
textWrappers.forEach(textWrapper => {
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
});

anime.timeline()
  .add({
    targets: '.animation .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 250,
    delay: (el, i) => 150 * (i+1)
  })