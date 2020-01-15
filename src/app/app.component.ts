import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-example';

  private username = "";
  private password = "";
  private alert = "";
  private logged = false;
  private alert2 = "";

  clickedButton() {
    if(this.username == "abc" && this.password == "1234") {
      this.logged = true
      this.alert = "You are sign in. ";
    } else {
      this.alert2 = "Incorrect username or password! ";
    } 
  }

  backButton() {
    this.logged = false
  }
}
