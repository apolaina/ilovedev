import { Education } from '../../models/Education';
import { IDictionary } from '../../models/IDictionary';

import { education } from '../mocks/education';

export class EducationAPI {
  static async get(): Promise<IDictionary<Education>> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(education);
      }, 1500);
    });
  }
}
