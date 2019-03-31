import React from 'react';
import debora from '../assets/debora.png';

import './style.scss';

const About = () => (
  <div className="aboutPage">
    <div className="purpleRow">
      <div className="description">About</div>
    </div>
    <div className="edition about">
      <img src={debora} />
      <b>Debora de Oliveira</b>
      <b>Desenvolvedora FullStack</b>
      <p>
        Formada em Matemática com experiência<br />
        em Educação, Design e Serviços.<br />
        Atuando atualmente com GraphQL-Dotnet,<br />
        C# e React.
      </p>
      <b>47 9 8409 8900 | deborapoh@gmail.com</b>
      <b>linkedin.com/in/deborapoh</b>
    </div>
  </div>

);

export default About;
