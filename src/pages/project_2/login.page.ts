import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';

export class Project2LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Strict Lazy Loading Locators via TypeScript Getters
  private get emailField(): Locator { return this.page.locator('[data-qa="login-email"]'); }
  private get passwordField(): Locator { return this.page.locator('[data-qa="login-password"]'); }
  private get submitButton(): Locator { return this.page.locator('[data-qa="login-button"]'); }
  
  get errorMessage(): Locator { return this.page.locator('.login-form p[style*="color: red"]'); }

  /**
   * Structured transactional workflow for user login verification.
   */
  async login(email: string, pass: string): Promise<void> {
    await this.typeIn(this.emailField, email);
    await this.typeIn(this.passwordField, pass);
    await this.clickOn(this.submitButton);
  }
}