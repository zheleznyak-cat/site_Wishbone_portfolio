let parent = document.querySelectorAll(".parent");

for (let par of parent) {
  par.addEventListener("mouseenter", () => {
    const child1 = par.querySelector(".child1");
    const child2 = par.querySelector(".child2");
    child1.style.fontSize = "1.8rem"; // Изменение стиля первого дочернего элемента
    child2.style.fontSize = "1.5rem"; // Изменение стиля второго дочернего элемента
  });

  par.addEventListener("mouseleave", () => {
    const child1 = par.querySelector(".child1");
    const child2 = par.querySelector(".child2");
    child1.style.fontSize = "1.7rem"; // Возврат к исходному стилю
    child2.style.fontSize = "1.6rem"; // Возврат к исходному стилю
  });
}

let cards = document.querySelectorAll(".project_card");
let activeChildren = []; // Массив для хранения активных дочерних элементов

// Изначально устанавливаем класс active на дочерние элементы второй карточки
const secondCard = cards[1];
const child1 = secondCard.querySelector(".project_card_h6");
const child2 = secondCard.querySelector(".project_card_h4");
const child3 = secondCard.querySelector(".cards_btn");

child1.classList.add("active");
child2.classList.add("active");
child3.classList.add("active");
activeChildren.push(child1, child2, child3);

for (let card of cards) {
  card.addEventListener("mouseenter", () => {
    // Убираем активный стиль с дочерних элементов
    activeChildren.forEach((child) => child.classList.remove("active"));
    activeChildren = []; // Очищаем массив активных дочерних элементов

    const child1 = card.querySelector(".project_card_h6");
    const child2 = card.querySelector(".project_card_h4");
    const child3 = card.querySelector(".cards_btn");

    // Добавляем стиль активным дочерним элементам
    child1.classList.add("active");
    child2.classList.add("active");
    child3.classList.add("active");

    // Сохраняем активные дочерние элементы
    activeChildren.push(child1, child2, child3);
  });

  card.addEventListener("mouseleave", () => {
    // Убираем стиль активным дочерним элементам
    const child1 = card.querySelector(".project_card_h6");
    const child2 = card.querySelector(".project_card_h4");
    const child3 = card.querySelector(".cards_btn");

    child1.classList.remove("active");
    child2.classList.remove("active");
    child3.classList.remove("active");

    // Проверяем, если курсор покинул все карточки
    let isAnyCardHovered = Array.from(cards).some((c) => c.matches(":hover"));

    if (!isAnyCardHovered) {
      // Если ни одна карточка не активна, возвращаем стиль .active к дочерним элементам второй карточки
      if (activeChildren.length > 0) {
        activeChildren.forEach((child) => child.classList.remove("active"));
      }

      // Добавляем обратно дочерние элементы второй карточки
      const secondCardChild1 = cards[1].querySelector(".project_card_h6");
      const secondCardChild2 = cards[1].querySelector(".project_card_h4");
      const secondCardChild3 = cards[1].querySelector(".cards_btn");

      secondCardChild1.classList.add("active");
      secondCardChild2.classList.add("active");
      secondCardChild3.classList.add("active");

      // Добавляем их в массив активных дочерних элементов
      activeChildren.push(secondCardChild1, secondCardChild2, secondCardChild3);
    }
  });
}

// team
let parents = document.querySelectorAll(".team_person");

for (let par of parents) {
  par.addEventListener("mouseenter", () => {
    const child1 = par.querySelector(".team_img-partner");
    const child2 = par.querySelector(".team_sign_h5");
    const child3 = par.querySelector(".team_sign_h6");
    child1.style.scale = "1.1"; // Изменение стиля первого дочернего элемента
    child2.style.scale = "1.1"; // Изменение стиля второго дочернего элемента
    child3.style.scale = "1.1"; // Изменение стиля второго дочернего элемента
  });

  par.addEventListener("mouseleave", () => {
    const child1 = par.querySelector(".team_img-partner");
    const child2 = par.querySelector(".team_sign_h5");
    const child3 = par.querySelector(".team_sign_h6");
    child1.style.scale = "1"; // Возврат к исходному стилю
    child2.style.scale = "1"; // Возврат к исходному стилю
    child3.style.scale = "1"; // Возврат к исходному стилю
  });
}
let scale = document.querySelector(".firm_partner");
scale.addEventListener("mouseenter", () => {
  const child1 = scale.querySelector(".firm_img-partner");
  const child2 = scale.querySelector(".firm_sign_h5");
  const child3 = scale.querySelector(".firm_sign_h6");
  child1.style.scale = "1.08"; // Изменение стиля первого дочернего элемента
  child2.style.scale = "1.08"; // Изменение стиля второго дочернего элемента
  child3.style.scale = "1.08"; // Изменение стиля второго дочернего элемента
});

scale.addEventListener("mouseleave", () => {
  const child1 = scale.querySelector(".firm_img-partner");
  const child2 = scale.querySelector(".firm_sign_h5");
  const child3 = scale.querySelector(".firm_sign_h6");
  child1.style.scale = "1"; // Возврат к исходному стилю
  child2.style.scale = "1"; // Возврат к исходному стилю
  child3.style.scale = "1"; // Возврат к исходному стилю
});
