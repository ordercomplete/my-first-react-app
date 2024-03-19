import { Fragment } from "react";
// Підключення CSS стилів для вашого додатка.
import "./App.css";

function App() {
  // Ініціалізація масиву об'єктів, кожен з яких представляє елемент списку з текстом та посиланням.
  const list = [
    { id: 1, text: "Перший	елемент", link: "/first" },
    { id: 2, text: "Другий	елемент", link: "/second" },
    { id: 3, text: "Третій	елемент", link: "/last" },
  ];
  // const handleClick = (link) => () => {
  //   window.location.assign(link);
  // };

  // Обробник подій для виведення діалогового вікна підтвердження при кліку.
  const handleLinkClick = () => {
    return window.confirm("Вийти?");
  };

  return (
    <div className="App">
      <header
        // обробник події onClickCapture для header, виводить сповіщення при будь-якому кліку в області заголовка.
        onClickCapture={() => {
          alert("Header");
        }}
        className="App-header"
      >
        {list.map((item) => (
          <Fragment key={item.id}>
            {/* Генерація компонентів Link для кожного елемента списку з передаванням властивостей */}
            {/* <span
              key={item.id}
              className="App-link"
              onClick={handleClick(item.link)}
            >
              {item.text}
            </span> */}
            <Link {...item} getConfirm={handleLinkClick} />{" "}
            {/* Передача функції handleLinkClick як пропс до компонента Link, без цієї "onClick={handleLinkClick}" правки у мене не працювало! Чому? */}
          </Fragment>
        ))}
        {/* Додатковий компонент Link з власним текстом і посиланням */}
        <Link
          text="My link"
          link="www.google.com"
          getConfirm={handleLinkClick}
        />
        {/* Компонент для вводу тексту */}
        <Input />
      </header>
    </div>
  );
}

function Link({ text, link, getConfirm, onClick }) {
  const handleClick = (e) => {
    console.log(e.target); // Логування об'єкту події

    e.preventDefault(); // Відміна стандартної обробки події (не переходити за посиланням)

    const result = getConfirm(); // Викликає обробник підтвердження для показу діалогового вікна

    if (result) {
      window.location.assign(link); // Якщо користувач підтвердив, змінюємо адресу в браузері на зазначене посилання.
    }
  };
  return (
    // Заміна спана на посилання, що обробляє кліки через handleClick або зовнішній onClick
    <a href={link} className="App-link" onClick={onClick || handleClick}>
      {text}
    </a>
  );
}

function Input() {
  // обробник події для поля вводу, логує значення поля при його зміні.
  const handleInput = (e) => {
    console.log(e.target.value);
  };
  // Відображення поля вводу, що реагує на зміни через обробник handleInput
  return <input onChange={handleInput} />;
  //onChange працює майже так як onInput
}

export default App;
