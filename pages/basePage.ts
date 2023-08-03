import {Page} from "@playwright/test"

export default class BasePage {

    constructor(public page: Page){}

    async clickElement(el){
        await el.click()
    }

    async hoverElement(el){
        await el.hover()
    }

    async fillInField(el, value){
        await el.type(value)
    }

}