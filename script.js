let toastBox = document.getElementById("toastBox");

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  // Convert to lowercase for case-insensitive comparison
  if (msg.toLowerCase().includes("error")) {
    toast.classList.add("error");
  }

  if (msg.toLowerCase().includes("invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 6000);
}
