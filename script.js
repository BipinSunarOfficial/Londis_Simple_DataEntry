const scriptURL = "https://script.google.com/macros/s/AKfycbzYA3h4b7AtgJUdzEXiMV3OQVFA4nbAr3Z-pGsOsqdUPUjGaWKizg9IVRM0HhVbjrk06Q/exec";

// Auto-fill today's date
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('input[name="Date"]').valueAsDate = new Date();

  document.getElementById("saleForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const plainData = new URLSearchParams(formData);

    fetch(scriptURL, {
      method: "POST",
      body: plainData
    })
    .then((res) => res.text())
    .then((response) => {
      alert("✅ Form submitted successfully!");
      form.reset();
      document.querySelector('input[name="Date"]').valueAsDate = new Date();
    })
    .catch((error) => {
      alert("❌ Submission failed. Please try again.");
      console.error("Error:", error);
    });
  });
});
