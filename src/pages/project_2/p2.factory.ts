import { Page } from '@playwright/test';
import { Project2LoginPage } from './login.page';

export class Project2App {
  private readonly page: Page;
  private _loginPage?: Project2LoginPage;

  constructor(page: Page) {
    this.page = page;
  }

  get loginPage(): Project2LoginPage {
    if (!this._loginPage) {
      this._loginPage = new Project2LoginPage(this.page);
    }
    return this._loginPage;
  }
}
