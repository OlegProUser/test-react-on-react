import React, { useEffect, useState, FC } from "react";
import "./App.css";

const reactQuestions = [
  {
    id: 1,
    question: "Что такое React?",
    answers: [
      "Библиотека JavaScript для создания пользовательских интерфейсов",
      "Фреймворк для разработки мобильных приложений",
      "Язык программирования для веб-разработки",
      "Система управления базами данных",
    ],
    trueAnswer: 0,
  },
  {
    id: 2,
    question: "Что такое компонент в React?",
    answers: [
      "Отдельный блок кода, который отвечает за определенную часть пользовательского интерфейса",
      "Файл с расширением .jsx",
      "Функция, которая возвращает JSX-код",
      "Все вышеперечисленное",
    ],
    trueAnswer: 3,
  },
  {
    id: 3,
    question: "Что такое состояние (state) в React?",
    answers: [
      "Данные, которые хранятся в компоненте и могут изменяться во время работы приложения",
      "Свойства, которые передаются в компонент",
      "Глобальные данные, доступные во всем приложении",
      "Все вышеперечисленное",
    ],
    trueAnswer: 0,
  },
  {
    id: 4,
    question: "Что такое props в React?",
    answers: [
      "Данные, которые передаются в компонент из родительского компонента",
      "Состояние компонента",
      "Методы, которые вызываются при событиях",
      "Все вышеперечисленное",
    ],
    trueAnswer: 0,
  },
  {
    id: 5,
    question: "Что такое JSX в React?",
    answers: [
      "Синтаксис, который позволяет писать HTML-подобный код в JavaScript",
      "Библиотека для создания пользовательских интерфейсов",
      "Язык программирования, используемый в React",
      "Все вышеперечисленное",
    ],
    trueAnswer: 0,
  },
  {
    id: 6,
    question: "Что такое жизненный цикл компонента в React?",
    answers: [
      "Набор методов, которые вызываются в определенные моменты времени во время существования компонента",
      "Процесс создания и рендеринга компонента",
      "Последовательность событий, происходящих при взаимодействии пользователя с компонентом",
      "Все вышеперечисленное",
    ],
    trueAnswer: 0,
  },
  {
    id: 7,
    question: "Что такое хуки в React?",
    answers: [
      "Специальные функции, которые позволяют использовать состояние и другие возможности React в функциональных компонентах",
      "Методы жизненного цикла компонента",
      "Способ передачи данных между компонентами",
      "Все вышеперечисленное",
    ],
    trueAnswer: 0,
  },
  {
    id: 8,
    question: "Что такое виртуальный DOM в React?",
    answers: [
      "Внутреннее представление DOM-дерева, которое React использует для оптимизации обновлений пользовательского интерфейса",
      "Библиотека для работы с DOM-элементами",
      "Способ рендеринга компонентов в браузере",
      "Все вышеперечисленное",
    ],
    trueAnswer: 0,
  },
  {
    id: 9,
    question: "Что такое Redux в React?",
    answers: [
      "Библиотека для управления состоянием приложения",
      "Фреймворк для создания пользовательских интерфейсов",
      "Инструмент для отладки React-приложений",
      "Все вышеперечисленное",
    ],
    trueAnswer: 0,
  },
  {
    id: 10,
    question: "Что такое контекст (Context) в React?",
    answers: [
      "Механизм для передачи данных между компонентами без необходимости явно передавать props через промежуточные компоненты",
      "Способ управления состоянием приложения",
      "Инструмент для отладки React-приложений",
      "Все вышеперечисленное",
    ],
    trueAnswer: 0,
  },
];

interface Question {
  question: string;
  answers: string[];
  trueAnswer: number;
}

interface QuestionsProps {
  handleKeyPress: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  obj: Question;
  tab: number;
  toNext: (tab: number, i: number) => void;
}

const Questions: FC<QuestionsProps> = ({
  handleKeyPress,
  obj,
  toNext,
  tab,
}) => {
  return (
    <div className="q" onKeyDown={handleKeyPress} tabIndex={0}>
      <h2 className="title">{obj.question}</h2>
      <ul>
        {obj.answers.map((v, i) => (
          <li key={i} onClick={() => toNext(tab, i)}>
            {v}
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  const [res, setRes] = useState(0);
  const [tab, setTab] = useState(0);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "1":
        toNext(tab, 0);
        console.log(1);
        break;
      case "2":
        toNext(tab, 1);
        console.log(2);
        break;
      case "3":
        toNext(tab, 2);
        console.log(3);
        break;
      case "4":
        toNext(tab, 3);
        console.log(4);
        break;
      default:
        break;
    }
  };

  function toNext(t: number, i: number) {
    if (i === reactQuestions[t].trueAnswer) {
      setRes(res + 1);
    }
    setTab(tab + 1);
  }

  function tryAgain() {
    setRes(0);
    setTab(0);
  }

  useEffect(() => {
    // Добавляем обработчик события при монтировании компонента
    const handleGlobalKeyPress = (event: KeyboardEvent) => {
      handleKeyPress(event as unknown as React.KeyboardEvent<HTMLDivElement>);
    };

    window.addEventListener("keydown", handleGlobalKeyPress);

    // Убираем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener("keydown", handleGlobalKeyPress);
    };
  }, []);

  return (
    <div className="App">
      <div
        className="progress"
        style={{ display: tab === 10 ? "none" : "block" }}
      >
        <div
          className="progress_line"
          style={{ width: `${10 + tab * 10}%` }}
        ></div>
      </div>
      {tab === 10 ? (
        <div className="r">
          <p>{res}</p>
          <button className="turn" onClick={tryAgain}>
            try again
          </button>
        </div>
      ) : (
        <Questions
          handleKeyPress={handleKeyPress}
          obj={reactQuestions[tab]}
          tab={tab}
          toNext={toNext}
        />
      )}
    </div>
  );
}

export default App;
