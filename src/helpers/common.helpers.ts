export class CommonHelpers {
  static generateRandomEmail(): string {
    return `user_${Date.now()}@testmail.com`;
  }

  static async sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
