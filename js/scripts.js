$(function () {
    const texts = ["Project Manager", "Fullstack Developer", "Data Engineer"];
    let count = 0, index = 0, currentText = '', letter = '';
    (function type() {
      if (count === texts.length) count = 0;
      currentText = texts[count];
      letter = currentText.slice(0, ++index);
      $('#typing-text').text(letter);
      if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1500);
      } else {
        setTimeout(type, 100);
      }
    })();
  });
  