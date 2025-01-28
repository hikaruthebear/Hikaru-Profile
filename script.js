let i = 0;

function showElement(elementId) {
  i++;

  if (i % 2) {
    document.getElementById(elementId).style.display = "none";
  } else {
    document.getElementById(elementId).style.display = "block";
    i = 0;
  }
}
