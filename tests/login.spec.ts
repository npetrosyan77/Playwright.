import {test, Page, expect} from "@playwright/test"
import LoginPage from "../pages/loginPage"
import RegisterPage from "../pages/registerPage"
import { LOGIN_INFO } from "../support/test_data"

const LOGININFO = LOGIN_INFO()


test.describe('User login functionality', () => {

    test('User login with valid cedentials', async ({page}) => {
        const login_Page = new LoginPage(page)
        const regPage = new RegisterPage(page)

        await page.goto("/")
        await regPage.hoverAccount()
        await login_Page.goToLoginPage()
        const currentUrl = page.url();
        expect(currentUrl).toContain('login');
        await login_Page.fillInEmail(LOGININFO.existingEmail)
        await login_Page.fillInPassword(LOGININFO.existingPassword)
        await login_Page.clickLogin()
        const currentUrl_ = page.url();
        expect(currentUrl_).toContain('account/account');
    })

    test('User login with invalid credentials', async ({page}) => {
        const login_Page = new LoginPage(page)
        const regPage = new RegisterPage(page)

        await page.goto("/")
        await regPage.hoverAccount()
        await login_Page.goToLoginPage()
        const currentUrl = page.url();
        expect(currentUrl).toContain('login');
        await login_Page.fillInEmail(LOGININFO.existingEmail)
        await login_Page.fillInPassword(LOGININFO.wrongPassword)
        await login_Page.clickLogin()
        const errorText = await page.locator('.alert-dismissible').textContent();
        expect(errorText).toContain('Warning: No match for E-Mail Address and/or Password.')
        expect(currentUrl).toContain('login');
    })
    
    test('Forget Password functionality', async ({page}) => {
        const login_Page = new LoginPage(page)
        const regPage = new RegisterPage(page)

        await page.goto("/")
        await regPage.hoverAccount()
        await login_Page.goToLoginPage()
        await login_Page.clickForgetPass()
        const currentUrl = page.url();
        expect(currentUrl).toContain('forgotten');
        await regPage.enterEmail(LOGININFO.existingEmail)
        await login_Page.clickToContinueToNewPassword()
        const successText = await page.locator('.alert-dismissible').textContent();
        expect(successText).toContain('An email with a confirmation link has been sent your email address.')

    })
})