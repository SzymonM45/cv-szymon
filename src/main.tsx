import React from 'react'
import ReactDOM from 'react-dom/client'

import './SAAS/style.css'

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
  lastName: 'M',
  position: 'The best from the best of the best',
  experience: [
    { year: 1998, description: 'SC Polska'},
    { year: 2004, description: 'AZ Polska'},
    { year: 2005, description: 'ZS Polska'},
    { year: 2019, description: 'SC Polska'}
  ],
  education: [
      'Uniwersytet Przyrodniczo-Humanistyczny w Kielcach -  2018 ', "Uniwersytet Przyrodniczo-Humanistyczny w Siedlcach -  2003"
  ]

}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

  <main className='cv-main'>
    <header className='cv-header'>
      <h1> CV {cvData.name} {cvData.lastName}</h1>
    </header>
    <aside className='cv-personal'>
      <h2>Podstawowe dane</h2>
    <img className='cv-photo' src={cvData.photo} alt={`${cvData.name} ${cvData.lastName} `}/>
    <p>{cvData.name} {cvData.lastName}</p>
    <small>{cvData.position}</small>
    </aside>

    <section className='cv-details'>
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
