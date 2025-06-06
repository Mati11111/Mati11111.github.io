import './index.css';
import { Fade } from "react-awesome-reveal";
import React from 'react';
import { useState } from 'react';
import ToolsIcons from './components/toolsSection/toolsFormat';
import Footer from './components/footerSection/footer';
import PresentationLabel from './components/presentationLabel';
import LanguageChanger from './components/languageChanger';
import CareerFormat from './components/careerSection/careerFormat';
import ProjectFormat from './components/featuredProjects/projectCardsFormat';
import SummarySection from './components/summarySection/summary';

import GoTop from './utils/topButton';

import { ReactComponent as GitHubLogo } from '../src/imgs/logos/github-icon.svg';


const pfp = "https://private-user-images.githubusercontent.com/101642846/359743782-ffa84a53-bde0-41a6-ba91-9a314875567a.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjQyMTM4NTIsIm5iZiI6MTcyNDIxMzU1MiwicGF0aCI6Ii8xMDE2NDI4NDYvMzU5NzQzNzgyLWZmYTg0YTUzLWJkZTAtNDFhNi1iYTkxLTlhMzE0ODc1NTY3YS5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODIxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgyMVQwNDEyMzJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zYjljNzEwNGYxYTZiMmMwM2UxYjE0NGZlYTNkOGQyN2E2ODM5MWM4M2ZhYmNlODhjNjExZWZlNzAyYzlkNzVjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.Txvdfom_F7VhSEJB9E1fro6HMIjgGVHGIj5jJgf_HVQ";


function App() {
  const [isTraslatedLanguage, setTraslatedLanguage] = useState(false);
  return (
    <div>
      <body>

        {/* <------------------WIP PAGE PLACEHODER------------------> */}

        {/* <div className="containerWorking">
          <div className="image-containerWorking">
            <img className="pfp" src={pfp} />
          </div>
          <p className="workingPhrase">404 - Work in progress</p>
          <div className="gitLogoContainer">
            <GitHubLogo className='gitLogoWorking' alt='Redirigir a GitHub' href="https://github.com/Matii111" />
          </div>
        </div> */}

        {/* <------------------WIP PAGE PLACEHODER------------------> */}


        {/*             
            TODO: Add projects (color changer/tester, real webpage projects)
            TODO: Center personal resume perhaps
        */}

        <div>
          <LanguageChanger
            isTraslatedLanguage={isTraslatedLanguage}
            setTraslatedLanguage={setTraslatedLanguage}
          />
          <Fade
            direction='down'
            className='fade-effect'
            triggerOnce='true'
            fraction='0'
          >
            <PresentationLabel
              isTraslatedLanguage={isTraslatedLanguage}
            />
          </Fade>
          <GoTop />
          <div className='content-container'>
            <Fade
              direction='down'
              className='fade-effect'
              triggerOnce='true'
              fraction='0'
            >
              <SummarySection
                isTraslatedLanguage={isTraslatedLanguage}
              />
            </Fade>
            <ProjectFormat
              isTraslatedLanguage={isTraslatedLanguage}
            />
            <div className='career-container'>
              <CareerFormat
                isTraslatedLanguage={isTraslatedLanguage}
              />
            </div>
            <div className='tools-container'>
              <ToolsIcons
                isTraslatedLanguage={isTraslatedLanguage}
              />
            </div>
          </div>
          <Fade
            direction='up'
            className='fade-effect'
            triggerOnce='true'
            fraction='0.5'
          >
            <Footer
              isTraslatedLanguage={isTraslatedLanguage}
            />
          </Fade>
        </div>
      </body >
    </div >
  );
}

export default App;