const memory = document.getElementById("memory-cost");
const storage = document.getElementById("storage-cost");
const delivery = document.getElementById("delivery-cost");

//update total

function update() {
  const totalPrice = document.getElementById("total-cost");
  totalPrice.innerText =
    parseInt(memory.innerText) +
    parseInt(storage.innerText) +
    parseInt(delivery.innerText) +
    1299;
  const totalPriceFooter = document.getElementById("total-cost-footer");
  totalPriceFooter.innerText =
    parseInt(memory.innerText) +
    parseInt(storage.innerText) +
    parseInt(delivery.innerText) +
    1299;
}

//promocode-apply

document.getElementById("promo-btn").addEventListener("click", function () {
  const totalCostPromo = document.getElementById("total-cost");
  totalCostPromo.innerText =
    totalCostPromo.innerText - totalCostPromo.innerText * 0.2;
});
document.getElementById("promo-btn").addEventListener("click", function () {
  const totalCostPromoFooter = document.getElementById("total-cost-footer");
  totalCostPromoFooter.innerText =
    totalCostPromoFooter.innerText - totalCostPromoFooter.innerText * 0.2;
});

document
  .getElementById("promo-code")
  .addEventListener("keyup", function (event) {
    if (event.target.value == "stevekaku") {
      document.getElementById("promo-btn").removeAttribute("disabled");
    } else {
      document.getElementById("promo-btn").setAttribute("disabled", true);
    }
  });
//fn call for all component cost
document
  .getElementById("8gb-memory-btn")
  .addEventListener("click", function () {
    memory.innerText = 0;
    update();
  });

document
  .getElementById("16gb-memory-btn")
  .addEventListener("click", function () {
    memory.innerText = 180;
    update();
  });

document
  .getElementById("256gb-storage-btn")
  .addEventListener("click", function () {
    storage.innerText = 0;
    update();
  });
document
  .getElementById("512gb-storage-btn")
  .addEventListener("click", function () {
    storage.innerText = 100;
    update();
  });
document
  .getElementById("1tb-storage-btn")
  .addEventListener("click", function () {
    storage.innerText = 180;
    update();
  });
document
  .getElementById("free-delivery-btn")
  .addEventListener("click", function () {
    delivery.innerText = 0;
    update();
  });
document
  .getElementById("cash-delivery-btn")
  .addEventListener("click", function () {
    delivery.innerText = 20;
    update();
  });
