import { IDictionary } from '../../models/IDictionary';

import { skills } from '../mocks/skills';

export class SkillsAPI {
  static async get(): Promise<IDictionary<Array<string>>> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(skills);
      }, 2500);
    });
  }
}
