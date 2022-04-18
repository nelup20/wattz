
$(document).ready(() => {
  const h2Header = $("#whoAreWe h2");
  let headerPaddingTop = "";

  if (window.innerWidth < 768) headerPaddingTop = "150px";
  if (window.innerWidth < 1340) headerPaddingTop = "277px";
  if (window.innerWidth >= 1340) headerPaddingTop = "40vh";

  h2Header.css({
    "padding-top": headerPaddingTop,
    opacity: "1",
    transition: "all 1s"
  });

  setTimeout(function () {
    $("#aboutWattz i.fa.fa-spinner.fa-pulse.fa-3x.fa-fw").fadeOut(100);

    startTextAnimation($("#aboutWattz h3"), 400);
    startTextAnimation($("#aboutWattz div"), 40);
  }, 2000);
});

const startTextAnimation = (element, speed) => {
  const elementText = element.text().split("");
  let elementAnimatedText = "";
  let currCharIndex = 0;

  element.text("").fadeIn(700);

  const interval = setInterval(() => {
    elementAnimatedText += elementText[currCharIndex];
    element.text(elementAnimatedText);

    if (currCharIndex >= elementText.length - 1) {
      clearInterval(interval);
    }

    currCharIndex++;
  }, speed);
}
