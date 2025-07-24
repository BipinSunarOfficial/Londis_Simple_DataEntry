
const scriptURL = "https://script.google.com/macros/s/AKfycbzYA3h4b7AtgJUdzEXiMV3OQVFA4nbAr3Z-pGsOsqdUPUjGaWKizg9IVRM0HhVbjrk06Q/exec";

// Auto-fill today's date
document.querySelector('input[name="Date"]').valueAsDate = new Date();

document.getElementById("saleForm").addEventListener("submit", function (e) {
e.preventDefault();

const form = e.target;
const formData = new FormData(form);
const plainData = new URLSearchParams(formData);

fetch(scriptURL, {
method: "POST",
body: plainData // No headers!
})
.then((res) => res.text())
.then((response) => {
  alert("✅ Form submitted successfully!");
  form.reset();
  document.querySelector('input[name="Date"]').valueAsDate = new Date();
})
.catch((error) => {
  alert("❌ Submission failed.");
  console.error(error);
});
});
