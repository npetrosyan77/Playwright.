import {Page} from "@playwright/test";
import BasePage from "./basePage";

export default class RegisterPage extends BasePage{

    constructor(
        public page: Page,
         
        readonly accountDropdown = page.locator('.dropdown-hoverable > a[href*="account"]'),
        readonly registerOption = page.locator('li a[href*="account/register"]'),
        readonly firstNameField = page.locator("#input-firstname"),
        readonly lastNameField = page.locator("#input-lastname"),
        readonly emailField = page.locator("#input-email"),
        readonly phoneNumField = page.locator("#input-telephone"),
        readonly passwordField = page.locator("#input-password"),
        readonly confirmPasswordField = page.locator("#input-confirm"),
        readonly agreeCheckbox = page.locator('.custom-checkbox'),
        readonly submitBtn = page.locator('input[type="submit"]'),
        readonly ontinueAfterRegistration = page.locator('.mb-4 .btn-primary')
     
        ) {
            super(page);
        }

    async hoverAccount(){
        await super.hoverElement(this.accountDropdown)
    }

    async clickRegister(){
        await super.clickElement(this.registerOption)
    }

    async  enterFirstName(firstName: string){
        await super.fillInField(this.firstNameField, firstName)
    }

    async enterLastName(lastName: string){
        await super.fillInField(this.lastNameField, lastName)
    }

    async enterEmail(email: string){
       await super.fillInField(this.emailField, email)

    }

    async enterPhone(phoneNum: string){
        await super.fillInField(this.phoneNumField, phoneNum)
    }

    async password(pass: string){
        await super.fillInField(this.passwordField, pass)
    }

    async confirmPass(pass:string){
        await super.fillInField(this.confirmPasswordField, pass)
    }

    async privacyPolicy(){
        await super.clickElement(this.agreeCheckbox)
    }

    async continueRegistration(){
        await super.clickElement(this.submitBtn)
    }
}