import {test, expect, type Page} from "@playwright/test"
import RegisterPage from "../pages/registerPage"
import {REG_INFO} from "../support/test_data"


const _USERINFO = REG_INFO()
const _USERINFO_2 = REG_INFO()


test.describe('User registration in LabdaTest Playground',() => {
    test('User registration with valid credentials', async ({page}) => {

        const regPage = new RegisterPage(page)

        await page.goto("/")
        await regPage.hoverAccount()
        await regPage.clickRegister()
        await regPage.enterFirstName(_USERINFO.first_n)
        await regPage.enterLastName(_USERINFO.last_n)
        await regPage.enterEmail(_USERINFO.email)
        await regPage.enterPhone(_USERINFO.number)
        await regPage.password(_USERINFO.password)
        await regPage.confirmPass(_USERINFO.password)
        await regPage.privacyPolicy()
        await regPage.continueRegistration()
        const currentUrl = page.url();
        expect(currentUrl).toContain('success');
    })


    test('User registration with already existing email',  async ({page})=> {
        const regPage = new RegisterPage(page)

        await page.goto("/")
        await regPage.hoverAccount()
        await regPage.clickRegister()
        await regPage.enterFirstName(_USERINFO_2.first_n)
        await regPage.enterLastName(_USERINFO_2.last_n)
        await regPage.enterEmail('test5722@t.est')
        await regPage.enterPhone(_USERINFO_2.number)
        await regPage.password(_USERINFO_2.password)
        await regPage.confirmPass(_USERINFO_2.password)
        await regPage.privacyPolicy()
        await regPage.continueRegistration()
        await page.waitForSelector('.alert-dismissible', { state: 'visible' });
        const errorText = await page.locator('.alert-dismissible').textContent();
        expect(errorText).toContain('Warning: E-Mail Address is already registered!');
    })
})
