function initApp() {
  const localData = localStorage.getItem("saved_profiles");
  if (!localData || JSON.parse(localData).users.length === 0) {
    
    fetch("users.json")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => displayCards(data.users), 2000);
        localStorage.setItem("saved_profiles", JSON.stringify(data));
      });
  } else {
    displayCards(JSON.parse(localData).users);
  }
}
initApp();

function displayCards(usersList) {
  const box = document.getElementById("wrapper");
  const blueprint = document.getElementById("card-mockup");
  box.innerHTML = "";
  
  usersList.forEach((item) => {
    const clone = blueprint.content.cloneNode(true);
    clone.querySelector(".user-name").textContent = item.name;
    clone.querySelector(".user-surname").textContent = item.surname;
    clone.querySelector(".user-email").textContent = item.email;
    clone.querySelector(".user-age").textContent = item.age;
    clone.querySelector(".user-city").textContent = item.city;

    const singleCard = clone.querySelector(".user-card");
    clone.querySelector(".remove-card-btn").addEventListener("click", () => {
      singleCard.remove();
      const current = JSON.parse(localStorage.getItem("saved_profiles"));
      current.users = current.users.filter(u => u.id !== item.id);
      localStorage.setItem("saved_profiles", JSON.stringify(current));
    });

    box.appendChild(clone);
  });
}

document.getElementById("clear-items-btn").addEventListener("click", () => {
  document.getElementById("wrapper").innerHTML = "";
  localStorage.setItem("saved_profiles", JSON.stringify({ users: [] }));
});

document.getElementById("load-items-btn").addEventListener("click", () => {
  const presentCards = document.querySelectorAll(".user-card");
  
  fetch("users.json")
    .then((res) => {
      if (!res.ok) throw new Error();
      return res.json();
    })
    .then((data) => {
      if (data.users.length === presentCards.length) {
        alert("Все пользователи уже загружены");
      } else {
        displayCards(data.users);
        localStorage.setItem("saved_profiles", JSON.stringify(data));
      }
    })
    .catch(() => {
      document.getElementById("wrapper").innerHTML = "Ошибка при загрузке данных";
    });
});

