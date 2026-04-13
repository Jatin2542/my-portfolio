function copyEmail() {
  const email = "sharmajatin6960@gmail.com";

  navigator.clipboard.writeText(email)
    .then(() => {
      alert("Email Copied ✅");
    })
    .catch(() => {
      alert("Copy failed ❌");
    });
}

function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
} function copyEmail() {
  const email = "sharmajatin6960@gmail.com";

  navigator.clipboard.writeText(email)
    .then(() => {
      alert("Email Copied ✅");
    })
    .catch(() => {
      alert("Copy failed ❌");
    });
}

// Yahan se naya code add kiya gaya hai 👇
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}