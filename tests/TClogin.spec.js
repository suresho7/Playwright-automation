//import {test,expect} from '@playwright/test'
import { POmanager } from '../pageobject/POmanager.js'
import {customtest as test,expect} from '../fixtures/testfixture.js'
test('login',async({page,testdataForregistration})=>{
    const pomanager=new POmanager(page)
    const homepage=pomanager.getHomePage()
    await homepage.goTo()
    const loginpages=pomanager.getloginpage()
    await loginpages.clickloginlink(
        testdataForregistration.username,
        testdataForregistration.password
    )
    //await homepage.regsterationclicklink()
    //const Regsterpage=new regsterpage(page)
    //const Regsterpage=pomanager.getRegisterationpage()
    
    //await Regsterpage.regsterdetails('suresh','mandalapu','gudipadu','eluru','ap','11111','9347210214','1234','sur','1234@sure','1234@sure')
   // await Regsterpage.regsterbuttonclick()
    await page.waitForTimeout(5000)

})