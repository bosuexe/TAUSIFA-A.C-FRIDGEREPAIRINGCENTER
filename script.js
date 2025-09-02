// সার্ভিস কার্ডে ক্লিক করলে অ্যালার্ট দেখাবে
document.querySelectorAll(".service").forEach(item => {
  item.addEventListener("click", () => {
    alert(item.querySelector("h3").innerText + " - সার্ভিসের জন্য কল করুন 📞 ০১XXXXXXXXX");
  });
});

// Contact Button
document.getElementById("contactBtn").addEventListener("click", () => {
  alert("আমাদের সাথে যোগাযোগ করুন: 📞 ০১XXXXXXXXX");
});
