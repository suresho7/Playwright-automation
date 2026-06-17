export class loginpage{
    constructor(page){
        this.page=page
        this.username=page.locator("//input[@name='username']")
        this.password=page.locator("//input[@name='password']")
        this.loginlink=page.locator("//input[@value='Log In']")


    }
    async clickloginlink(username,password){
        await this.username.fill(username) 
        await this.password.fill(password)
        await this.loginlink.click()
    }
    
}