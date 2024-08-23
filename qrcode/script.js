const input = document.querySelector("#qr-input");
const qrcode = document.querySelector("#qrcode");
const generateBtn = document.querySelector("#generate-btn");

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        genQRCode();
    }
});

generateBtn.addEventListener("click", genQRCode);

function genQRCode() {
    const value = input.value.trim();
    if (!value) return;
    qrcode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(value)}`;
}
