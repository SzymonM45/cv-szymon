import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.scss'

interface Experience {
  year: number;
  description: string;

}

interface CVData {
  photo: string;
  name: string;
  lastName: string;
  position: string;
  experience: Experience[];
  education: string[];
}

const cvData: CVData = {
  photo: 'szymon.jpg',
  name: 'Szymon',
  lastName: 'Maciołek',
  position: 'The best from the best of the best',
  experience: [
    { year: 1998, description: 'Securitas Polska'},
    { year: 2004, description: 'Astra Zeneca'},
    { year: 2005, description: 'ZSP nr 2 w Siedlcach'},
    { year: 2019, description: 'SCDiDN w Siedlcach'}
  ],
  education: [
      'Uniwersytet Przyrodniczo-Humanistyczny w Siedlcach - doktorat 2018 ', "Uniwersytet Przyrodniczo-Humanistyczny w Siedlcach - magister 2003"
  ]

}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

  <main>
    <header>
      <h1> CV {cvData.name} {cvData.lastName}</h1>
    </header>
    <aside>
      <h2>Podstawowe dane</h2>
    <img src={cvData.photo} alt={`${cvData.name} ${cvData.lastName} `}/>
    <p>{cvData.name} {cvData.lastName}</p>
    <small>{cvData.position}</small>
    </aside>

    <section>
      <h2>Doświadczenie</h2>
      <ul>
        {cvData.experience.map(experience => <li key={experience.year}>
          {experience.year} - {experience.description}
        </li>)}
            </ul>
      <h2>Wykształcenie</h2>
      <ul>
        {cvData.education.map(education => <li>{education}</li>)}
      </ul>
    </section>

  </main>











  </React.StrictMode>,
)
