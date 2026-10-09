import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';

export class Project2LoginPage extends BasePage {
  private get emailField(): Locator { return this.page.locator('#p2-email'); }
  private get passwordField(): Locator { return this.page.locator('#p2-password'); }
  private get submitBtn(): Locator { return this.page.locator('button.p2-login-action'); }

  async login(email: string, pass: string): Promise<void> {
    await this.typeIn(this.emailField, email);
    await this.typeIn(this.passwordField, pass);
    await this.clickOn(this.submitBtn);
  }
}
