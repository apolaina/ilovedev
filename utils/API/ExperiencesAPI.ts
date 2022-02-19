import { experiences } from '../mocks/experiences';

export class ExperiencesAPI {
  static async get(): Promise<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(experiences);
      }, 2500);
    });
  }
}
