const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", (e) => {
  const trimmedName = e.currentTarget.value.trim();

  nameOutput.textContent = trimmedName !== "" ? trimmedName : "Anonymous";
});
