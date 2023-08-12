function hitungBMI() {
  var berat = parseFloat(document.getElementById("berat").value);
  var tinggi = parseFloat(document.getElementById("tinggi").value) / 100; // Mengkonversi tinggi menjadi meter
  var bmi = berat / (tinggi * tinggi);

  var hasil = document.getElementById("hasil");
  var caption = document.createElement("p");
  caption.classList.add("hasil-caption");

  if (isNaN(bmi)) {
    caption.innerText = "Masukkan berat badan dan tinggi yang valid.";
  } else {
    caption.innerText = "BMI Anda: " + bmi.toFixed(2);

    if (bmi < 18.5) {
      caption.innerText += " - Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      caption.innerText += " - Berat badan normal";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      caption.innerText += " - Kelebihan berat badan";
    } else {
      caption.innerText += " - Kegemukan";
    }
  }

  hasil.innerHTML = "";
  hasil.appendChild(caption);
}

function resetForm() {
  document.getElementById("berat").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("usia").value = "";
  document.getElementById("hasil").innerHTML = "";
}
