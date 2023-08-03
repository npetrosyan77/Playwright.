import {Page} from "@playwright/test"
import BasePage from "./basePage";

export default class LoginPage extends BasePage{

    constructor(
        public page: Page,
        
        readonly loginFromDropdown = page.getByRole('link', { name: 'Login'}),
        readonly loginBtn = page.getByRole('button', { name: 'Login' }),
        readonly emailField = page.getByPlaceholder('E-Mail Address'),
        readonly passField = page.getByPlaceholder('Password'),
        readonly forgetPassword = page.getByRole('link', { name: 'Forgotten Password', exact: true }),
        readonly continueBtn = page.getByRole('button', { name: 'Continue' })
        
    ){

        super(page)
    }


    async goToLoginPage(): Promise<void>{
        await super.clickElement(this.loginFromDropdown)
    }

    async fillInEmail(email: string): Promise<void>{
        await super.fillInField(this.emailField, email)
    }

    async fillInPassword(password: string): Promise<void> {
        await super.fillInField(this.passField, password)
    }

    async clickLogin(): Promise<void>{
        await super.clickElement(this.loginBtn)
    }

    async clickForgetPass(): Promise<void> {
        await super.clickElement(this.forgetPassword)
    }

    async clickToContinueToNewPassword(): Promise<void>{
        await super.clickElement(this.continueBtn)
    }
        
}