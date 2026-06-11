let totalBill = 0;
function addItem(name, price) {
    totalBill += price;
    document.getElementById("totalDisplay").innerText = "Total: ₹" + totalBill;
}
function payBill() {
    alert("Payment of ₹" + totalBill + " Successful!");
    totalBill = 0;
    document.getElementById("totalDisplay").innerText = "Total: ₹0";
}