function toCase(text) {
// If the string is empty, return "-"
  if (text === "") return "-";

  // Return lowercase + "-" + uppercase version
  return text.toLowerCase() + "-" + text.toUpperCase();
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
