export class regsterpage {
   constructor(page) {
      this.firstname = page.locator('//input[@id="customer.firstName"]')
      this.lastname = page.locator('//input[@id="customer.lastName"]')
      this.address = page.locator('//input[@id="customer.address.street"]')
      this.city = page.locator('//input[@id="customer.address.city"]')
      this.state = page.locator('//input[@id="customer.address.state"]')
      this.zipcode = page.locator('//input[@id="customer.address.zipCode"]')
      this.phone = page.locator('//input[@id="customer.phoneNumber"]')
      this.sse = page.locator('//input[@id="customer.ssn"]')
      this.username = page.locator('//input[@id="customer.username"]')
      this.password = page.locator('//input[@id="customer.password"]')
      this.confirm = page.locator('//input[@id="repeatedPassword"]')
      this.regsterbutton=page.locator('//input[@value="Register"]')
   }
   async regsterdetails(firstName,lastname,address,city,state,zipcode,phone,sse,username,password,confirm){
      await this.firstname.fill(firstName)
      await this.lastname.fill(lastname)
      await this.address.fill(address)
      await this.city.fill(city)
      await this.state.fill(state)
      await this.zipcode.fill(zipcode)
      await this.phone.fill(phone)
      await this.sse.fill(sse)
      await this.username.fill(username)
      await this.password.fill(password)
      await this.confirm.fill(confirm)
   }
   async regsterbuttonclick()
   {
      await this.regsterbutton.click()
   }
}