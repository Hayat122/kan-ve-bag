async function send() {

  const data = {
    patient: {
      name: document.getElementById("pname").value,
      blood: document.getElementById("pblood").value
    },
    donor: {
      name: document.getElementById("dname").value,
      blood: document.getElementById("dblood").value
    }
  };

  const res = await fetch("/api/donor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },

    
    body: JSON.stringify(data)
  });

  const result = await res.json();

  document.getElementById("result").innerText = result.message;
}

document.querySelector(".send-btn").addEventListener("click", function () {
  alert("Talebiniz Başarıyla İletilmiştir.");
});

