import {Homepage} from './Homepage'
import{loginpage} from './loginpage'
import {regsterpage} from './regsterpage'
export class POmanager{
    constructor(page){
        this.page=page
        this.Homepage=new Homepage(this.page)
        this.regsterpage=new regsterpage(this.page)
        this.loginpage=new loginpage(this.page)
    }
    getHomePage(){
        return this.Homepage
    }
    getRegisterationpage(){
        return this.regsterpage
    }
    getloginpage(){
        return this.loginpage
    }
}