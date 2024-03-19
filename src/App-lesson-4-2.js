import React, { useState } from "react";
import "./App.css";

//const FIELD_NAME - об'єкт, що містить назви полів форми. Допомагає уникнути помилок через друкарські помилки та полегшує рефакторинг коду.
const FIELD_NAME = {
  NAME: "name",
  EMAIL: "email",
  PASSWORD: "password",
};

//Ініціалізація Стану
//- функція для ініціалізації початкових значень форми, дозволяє додатково розширити значення через передачу параметра.
const initialValues = (values) => ({
  [FIELD_NAME.NAME]: "",
  [FIELD_NAME.EMAIL]: "",
  [FIELD_NAME.PASSWORD]: "",
  ...values,
});

function App() {
  //- створює стан value для зберігання даних форми за допомогою гачка useState. Початкове значення отримується з initialValues.
  const [value, setValue] = useState(() =>
    initialValues({ create: "Створення користувача" })
  );

  //- створює стан для зберігання списку користувачів, початкове значення - пустий масив.
  const [userList, setUserList] = useState([]);

  //Обробники Подій
  //- обробник подій для форми. Запобігає перезавантаженню сторінки, додає поточні дані форми до списку користувачів і очищає форму.
  const handleSubmit = (e) => {
    e.preventDefault();

    setUserList([...userList, value]);

    setValue(initialValues());
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  console.log(value);

  //Рендеринг Компоненту
  // Код всередині return описує JSX розмітку компоненту. Форма містить поля вводу для імені, електронної адреси та пароля з відповідними обробниками подій.

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name={FIELD_NAME.NAME}
              placeholder="Ім'я"
              value={value[FIELD_NAME.NAME]}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="email"
              name={FIELD_NAME.EMAIL}
              placeholder="Email"
              value={value[FIELD_NAME.EMAIL]}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="password"
              name={FIELD_NAME.PASSWORD}
              placeholder="Пароль"
              value={value[FIELD_NAME.PASSWORD]}
              onChange={handleChange}
            />
          </div>

          <button type=" submit ">Відправити</button>
        </form>
        {/* Умовний рендеринг {userList.length > 0 && (...)} відображає список користувачів, якщо він не пустий. */}
        {userList.length > 0 && (
          <ol>
            {/* Для кожного користувача в масиві userList створюється фрагмент зі своїм компонентом User, і йому передається інформація про користувача та флаг відображення. */}
            {userList.map((user, index) => (
              <React.Fragment key={user[FIELD_NAME.NAME]}>
                <li>
                  <User {...user} show={index === 0} />
                </li>
              </React.Fragment>
            ))}
          </ol>
        )}
      </header>
    </div>
  );

  //function User({ name, email, password, show: initialShow }) - компонент, який приймає властивості користувача і показує їх.
  function User({ name, email, password, show: initialShow }) {
    //const [show, setShow] - локальний стан для керування відображенням детальної інформації користувача
    const [show, setShow] = useState(initialShow);

    //const toggleDetails = () => { setShow(!show); }; - функція toggleDetails встановлює стан show в протилежне значення, що призводить до зміни відображення детальної інформації при кліці на ім'я користувача.
    const toggleDetails = () => {
      setShow(!show);
    };

    console.log("render", name);

    //const isShow = initialShow && show; - створюється змінна isShow, що вказує, чи потрібно відображати детальну інформацію. Це залежить від початкового значення initialShow і значення локального стану show.
    const isShow = initialShow && show;

    //JSX Для Відображення
    //Після цього відбувається повернення react-елемента.
    // div onClick={toggleDetails} - при кліці на ім'я користувача викликається функція toggleDetails.
    // {name} - відображається ім'я користувача.
    // {isShow && (...)} - відбувається умовний рендеринг. Якщо isShow - true, то відображається детальна інформація про користувача у вигляді списку з електронною адресою та паролем.
    // Цей компонент дозволяє змінювати відображення детальної інформації користувача при кліці на його ім'я.
    return (
      <React.Fragment>
        <div onClick={toggleDetails}>{name}</div>
        {isShow && (
          <ul>
            <li>Email: {email}</li>
            <li>Password: {password}</li>
          </ul>
        )}
      </React.Fragment>
    );
  }
}
export default App;
