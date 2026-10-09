export class CommonHelpers {
  /**
   * Generates a unique email string using current timestamps.
   */
  static generateRandomEmail(): string {
    return `qa_team_${Date.now()}@testenvironment.com`;
  }

  /**
   * Safe execution thread pause utility.
   */
  static async sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}