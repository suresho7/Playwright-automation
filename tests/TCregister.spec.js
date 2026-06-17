//import {test,expect} from '@playwright/test'
//import {Homepage} from '../pageobject/Homepage'
//import {regsterpage} from '../pageobject/regsterpage'
//import { POmanager } from '../pageobject/POmanager.js'
//import testdata from'../utils/parabank.json' assert{type:'json'}
// test('regster',async({page})=>{
//     const homepage=new Homepage(page)
//     await homepage.goTo()
//     await homepage.regsterationclicklink()
//     const Regsterpage=new regsterpage(page)
//     await Regsterpage.regsterdetails('suresh','mandalapu','gudipadu','eluru','ap','11111','9347210214','1234','sur','1234@sure','1234@sure')
//     await Regsterpage.regsterbuttonclick()
//     await page.waitForTimeout(5000)

// })
// for(const data of testdata){
// test(`regster ${data.username}`,async({page})=>{
//     const pomanager=new POmanager(page)
//     const homepage=pomanager.getHomePage()
//     await homepage.goTo()
//     await homepage.regsterationclicklink()
//     //const Regsterpage=new regsterpage(page)
//     const Regsterpage=pomanager.getRegisterationpage()
//     await Regsterpage.regsterdetails(
//         data.firstname,
//         data.lastname,
//         data.address,
//         data.city,
//         data.state,
//         data.zipcode,
//         data.phonenumber,
//         data.ssn,
//         data.username,
//         data.password,
//         data.confirmpassword
//     )
//     //await Regsterpage.regsterdetails('suresh','mandalapu','gudipadu','eluru','ap','11111','9347210214','1234','sur','1234@sure','1234@sure')
//     await Regsterpage.regsterbuttonclick()
//     await page.waitForTimeout(5000)

// })
// }



//import {test,expect} from '@playwright/test'
import { POmanager } from '../pageobject/POmanager.js'
import {customtest as test,expect} from '../fixtures/testfixture.js'
test('regster',async({page,testdataForregistration})=>{
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
    await page.waitForTimeout(5000)

})