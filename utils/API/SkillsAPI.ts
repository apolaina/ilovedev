import { skills } from '../mocks/skills';

export class SkillsAPI {
  static async get(): Promise<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(skills);
      }, 2500);
    });
  }
}
