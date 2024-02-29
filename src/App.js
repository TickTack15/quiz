import React from 'react';

const questions = [
  {
    title: 'Welches ist ein Landkreis in Baden-Württemberg?',
    variants: ['Mecklenburgische Seenplatte', 'Neckar-Odenwald-Kreis', 'Nordfriesland', 'Altötting'],
    correct: 1,
  },
  {
    title: 'Für wie viele Jahre wird der Landtag in Baden-Württemberg gewählt?',
    variants: ['3', '4', '5', '6'],
    correct: 2,
  },
  {
    title: 'Ab welchem Alter darf man in Baden-Württemberg bei Kommenalwahlen wählen',
    variants: ['14', '16', '18', '20'],
    correct: 1,
  },
  {
    title: 'Welche Farben hat die Landesflagge von Baden-Württemberg?',
    variants: ['blau-weiß-rot', 'schwarz-gold', 'weiß-blau', 'grün-weiß-rot'],
    correct: 1,
  },
  {
    title: 'Wo können Sie sich in Baden-Württemberg über politische Themen informieren?',
    variants: [
      'beim Ordnungsamt der Gemeinde',
      'bei der Verbraucherzentrale',
      'bei der Landeszentrale für politische Bildung',
      'bei den Kirchen'
    ],
    correct: 2,
  },
  {
    title: 'Die Landeshauptstadt von Baden-Württemberg heißt ...',
    variants: [
      'Erster Minister / Erste Ministerin',
      'Premierminister / Premierministerin',
      'Bürgermeister / Bürgermeisterin',
      'Ministerpräsident / Ministerpräsidentin'
    ],
    correct: 3,
  },
  {
    title: 'Welchen Minister / welche Ministerin hat Baden-Württemberg nicht?',
    variants: [
      'Finanzminister / Finanzministerin',
      'Justizminister / Justizministerin',
      'Innenminister / Innenministerin',
      'Außenminister / Außenministerin'
    ],
    correct: 3,
  },
  {
    title: 'Was bedeutet „Volkssouveränität“?',
    variants: [
      'Der König / die Königin herrscht über das Volk',
      'Das Bundesverfassungsgericht steht über der Verfassung',
      'Die Interessenverbände üben die Souveränität zusammen mit der Regierung aus',
      'Die Staatsgewalt geht vom Volke aus'
    ],
    correct: 3,
  },
  {
    title: 'Wenn das Parlament eines deutschen Bundeslandes gewählt wird, nennt man das …',
    variants: ['Kommunalwahl', 'Landtagswahl', 'Europawahl', 'Bundestagswahl'],
    correct: 1,
  },
  {
    title: 'Was gehört in Deutschland nicht zur Exekutive?',
    variants: ['die Polizei', 'die Gerichte', 'das Finanzamt', 'die Ministerien'],
    correct: 1,
  }
];

function Result({ correct }) {
  return (
    <div className='result'>
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Sie haben {correct} von { questions.length } Antworten erraten</h2>
      <a href="/">
        <button>Nochmal versuchen</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{ question.title }</h1>
      <ul>
        {question.variants.map((variant, index) => 
          <li onClick={() => onClickVariant(index)} key={index}>
            {variant}
          </li>
        )}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);

  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {
        step !== questions.length
          ? <Game step={step} question={question} onClickVariant={onClickVariant} />
          : <Result correct={correct} />
      }
    </div>
  );
}

export default App;
