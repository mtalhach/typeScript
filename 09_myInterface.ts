interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrial: () => string;
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const talha: User = {
  dbId: 22,
  email: "abc@gmail.com",
  userId: 2211,
  githubToken: "github",
  startTrial: () => {
    return "Hello";
  },
  getCoupon: (name: "talha", off: 10) => {
    return 10;
  },
};
talha.email = "abc@gmail.com";
// talha.dbId = 33;
