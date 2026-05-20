declare global {
  namespace Express {
    interface Request {
      id: string;
      user?: Record<string, unknown>;
    }
  }
}

export {};
