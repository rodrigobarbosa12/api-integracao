interface User {
  id: number;
  email: string;
  client: string;
}

declare global {
  namespace Express {
      interface Request {
        user? : User;
      }
  }
}

export default global;
