const priceInput = document.querySelector("#price");
const commissionInput = document.querySelector("#commission");
const total = document.querySelector("#total");
const platform = document.querySelector("#platform");
const worker = document.querySelector("#worker");
const calculate = document.querySelector("#calculate");

function formatMAD(value) {
  return `${value.toFixed(2)} MAD`;
}

function updateCommission() {
  const price = Number(priceInput.value || 0);
  const commission = Number(commissionInput.value || 0);
  const platformAmount = price * commission / 100;
  const workerAmount = price - platformAmount;

  total.textContent = formatMAD(price);
  platform.textContent = formatMAD(platformAmount);
  worker.textContent = formatMAD(workerAmount);
}

function showMessage(service) {
  const notice = document.createElement("div");
  notice.className = "success-message";
  notice.textContent = `✅ تم اختيار خدمة: ${service}. الخطوة القادمة هي الدفع.`;
  document.querySelector(".calculator").appendChild(notice);
  setTimeout(() => notice.remove(), 3000);
}

calculate.addEventListener("click", updateCommission);
priceInput.addEventListener("input", updateCommission);
commissionInput.addEventListener("change", updateCommission);

document.querySelectorAll("[data-service]").forEach((button) => {
  button.addEventListener("click", () => {
    showMessage(button.dataset.service);
  });
});

updateCommission();
