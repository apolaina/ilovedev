import { IDictionary } from '../../models/IDictionary';
import { Experience } from '../../models/Experience';

export const experiences: IDictionary<Experience> = {
  PEARLL: {
    context:
      "PEARLL was passionate about delivering wellness programs - based on science, that transform daily living habits - through a digital platform. Designed by top health and wellness professionals, PEARLL's personalized programs deliver integrated, step-by-step changes that reduce stress. I was fortunate to be involved in the development of the PEARLL web and mobile app, in addition to the development of the website.",
    missions: [
      {
        name: 'Update of the presentation website (Gatsby/React 17+/styled-components)',
      },
      {
        name: 'Implementation of services, models, components and pages of the application: data manipulation using GraphQL (Apollo) / axios, user login and registration, subscription management, display and management of questionnaires, display and management of programs and activities, integration on iOS/Android (Ionic, Capacitor, Xcode, Android Studio), integration of a store based on React Hooks, integration of logics within the backend for frontend (BFF Apollo GraphQL).',
      },
      { name: 'Design and mockup follow up' },
      { name: 'Participation in strategic changes and reflexions' },
      { name: 'Unit testing' },
      { name: 'Corrective and evolutionary maintenance' },
    ],
    dates: 'from 09/2020 to 12/2021',
    url: 'https://www.pearll.com/',
    imageUrl: require('../../assets/animations/yoga.json'),
  },
  ONEY: {
    context:
      "ONEY Bank wants to encourage its members to use the network's credit card in its major French retail partners (such as Auchan, Leroy Merlin and Norauto) thanks to a responsive game available online.",
    missions: [
      {
        name: 'Implementation of services, modules and application modules: login and registration of participants, display and management of quizzes and solutions, registration of participations, CSS animations, Angular 9, etc.',
      },
      { name: 'Design and mockup follow up' },
      {
        name: 'Documentation writing: documentation of components, classes and methods of the application',
      },
    ],
    dates: 'from 04/2020 to 07/2020',
    url: 'https://www.oney.fr/',
    imageUrl: require('../../assets/animations/game.json'),
  },
  BELL: {
    context:
      "Bell, one of Canada's leading telecommunications companies, has chosen to integrate myself into the IoT team to enhance and add new functionality to its Smart Building application. This web-based solution allows technicians to easily monitor remote installations. In addition, it is able to receive alerts in real time to optimize their intervention time.",
    missions: [
      {
        name: 'Implementation of services, models and modules of the application: initialization and installation of a Swagger package for the front-end, management of tanks, alarms and their details, implementation of Angular 8 best practices, CSS improvements, etc.',
      },
      {
        name: 'Follow-up of agile methods: scrums, slow deliveries of the application, positive reception of the changes of needs, participation in the technical/back-end reflexions',
      },
      {
        name: 'Documentation writing: documentation of components, classes and methods of the application',
      },
    ],
    dates: 'from 11/2019 to 12/2019',
    url: 'https://business.bell.ca/shop/medium-large/internet-of-things/smart-buildings',
    imageUrl: require('../../assets/animations/IoT.json'),
  },
  WAZO: {
    context:
      'WAZO is an engineering idea to facilitate the real estate management of Canadian owners and tenants, 100% digital. I have actively participated in the front-end development of the application that offers its customers the complete handling of their administrative and accounting tasks related to their real estate.',
    missions: [
      {
        name: 'Implementation of services, models and modules of the application: management of tenants, properties (buildings, houses), units (apartments, storage, parking), leases, collections (receivables), generation of accounting reports, Angular 7, Redux, etc.',
      },
      {
        name: 'Follow agile methods: scrums, slow delivery of the application, positive reception of changes in requirements',
      },
      {
        name: 'Documentation writing: documentation of components, classes and methods of the application',
      },
    ],
    dates: 'from 04/2019 to 03/2020',
    url: 'https://wazotechnology.com/',
    imageUrl: require('../../assets/animations/immo.json'),
  },
};
