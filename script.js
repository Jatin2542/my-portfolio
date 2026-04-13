
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