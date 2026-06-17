import { POmanager } from '../pageobject/POmanager.js'
import {customtest as test,expect} from '../fixtures/testfixture.js'
test.describe.parallel('testnew',()=>{
test('@fastregster',async({page,testdataForregistration})=>{
    const pomanager=new POmanager(page)
    const homepage=pomanager.getHomePage()
    await homepage.goTo()
    await homepage.regsterationclicklink()
    //const Regsterpage=new regsterpage(page)
    const Regsterpage=pomanager.getRegisterationpage()
    await Regsterpage.regsterdetails(
        testdataForregistration.firstname,
        testdataForregistration.lastname,
        testdataForregistration.address,
        testdataForregistration.city,
        testdataForregistration.state,
        testdataForregistration.zipcode,
        testdataForregistration.phonenumber,
        testdataForregistration.ssn,
        testdataForregistration.username,
        testdataForregistration.password,
        testdataForregistration.confirmpassword
    )
    //await Regsterpage.regsterdetails('suresh','mandalapu','gudipadu','eluru','ap','11111','9347210214','1234','sur','1234@sure','1234@sure')
    await Regsterpage.regsterbuttonclick()
    await page.waitForTimeout(7000)

})
test('@smokelogin',async({page,testdataForregistration})=>{
    const pomanager=new POmanager(page)
    const homepage=pomanager.getHomePage()
    await homepage.goTo()
    const loginpages=pomanager.getloginpage()
    await loginpages.clickloginlink(
        testdataForregistration.username,
        testdataForregistration.password
    )
    await page.waitForTimeout(5000)

})
})