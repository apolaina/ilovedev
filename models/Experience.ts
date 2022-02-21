export interface Experience {
  context: string;
  missions: Array<Mission>;
  dates: string;
  url: string;
  imageUrl: string;
}

interface Mission {
  name: string;
}
