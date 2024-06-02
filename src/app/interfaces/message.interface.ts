export interface Message {
  text: string;
  isGpt: boolean;
  info?: {
    // lo suyo quizás sería usar OrthographyResponse
    userScore: number;
    errors: string[];
    message: string;
  };
}
