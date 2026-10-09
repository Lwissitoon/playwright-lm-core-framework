export interface LoginScenario {
  testId: string;
  description: string;
  email: string;
  pass: string;
  expectedError: string;
}

export const LOGIN_NEGATIVE_SCENARIOS: LoginScenario[] = [
  {
    testId: "TC-01",
    description: "Login with completely invalid email format",
    email: "notanemail.com",
    pass: "Password123!",
    expectedError: "Invalid email address format."
  },
  {
    testId: "TC-02",
    description: "Login with correct user but incorrect password",
    email: "valid_user@test.com", // You can also map this to envConfig dynamically
    pass: "WrongPassword!",
    expectedError: "Your email or password is incorrect!"
  },
  {
    testId: "TC-03",
    description: "Login with empty fields",
    email: "",
    pass: "",
    expectedError: "Fields cannot be empty."
  }
];
