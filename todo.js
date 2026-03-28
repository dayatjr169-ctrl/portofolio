// tambah task
function addTask() {
  const input = document.getElementById("input");
  const list = document.getElementById("list");

  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  // klik selesai
  li.onclick = function () {
    li.classList.toggle("done");
    saveData();
  };

  // tombol delete
  const btn = document.createElement("button");
  btn.textContent = "x";

  btn.onclick = function (e) {
    e.stopPropagation();
    li.remove();
    saveData();
  };

  li.appendChild(btn);
  list.appendChild(li);

  input.value = "";
  saveData();
}

// simpan data
function saveData() {
  const list = document.getElementById("list");
  localStorage.setItem("tasks", list.innerHTML);
}

// tampilkan data
function showData() {
  const list = document.getElementById("list");
  const data = localStorage.getItem("tasks");

  if (data) {
    list.innerHTML = data;
  }

  const items = list.querySelectorAll("li");

  items.forEach(li => {
    // klik selesai
    li.onclick = function () {
      li.classList.toggle("done");
      saveData();
    };

    // tombol delete
    const btn = li.querySelector("button");
    if (btn) {
      btn.onclick = function (e) {
        e.stopPropagation();
        li.remove();
        saveData();
      };
    }
  });
}

// enter = tambah task
document.getElementById("input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// jalankan saat halaman dibuka
showData();
