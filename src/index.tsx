import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Получаем элемент с ID 'root' и указываем его тип
const rootElement = document.getElementById("root") as HTMLElement;

// Создаем корень приложения
const root = ReactDOM.createRoot(rootElement);

// Рендерим приложение
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
