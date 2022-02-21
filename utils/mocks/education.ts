import { IDictionary } from '../../models/IDictionary';
import { Education } from '../../models/Education';

export const education: IDictionary<Education> = {
  'Titre Professionnel': {
    name: 'Conceptrice développeuse informatique',
    subject:
      'software engineering: project management, specifications, modeling, data models, database (Oracle), SQL, DQL, Java & front-end technologies',
    date: 'degree obtained in 2015',
    level: '(Bac +4)',
    school:
      'AFPA (Agence pour la Formation Professionnelle des Adultes) Balma (fr)',
  },
  'Licence professionnelle': {
    name: 'Nouvelles Technologies de l’Information et de la Communication',
    subject:
      'website and mobile app creation: PHP, HTML5, CSS3, JavaScript, Ajax, CMS',
    date: 'degree obtained in 2012',
    level: '(Bac +3)',
    school: 'Université Toulouse 2 – Foix (fr)',
  },
};
