import { Experience } from '../../models/Experience';
import { IDictionary } from '../../models/IDictionary';

import { experiences } from '../mocks/experiences';

export class ExperiencesAPI {
  static async get(): Promise<IDictionary<Experience>> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(experiences);
      }, 2500);
    });
  }
}
