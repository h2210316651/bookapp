import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public state={email:undefined,password:undefined,err:undefined};
  constructor(
    private http:HttpClient,
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.state.err=undefined;
    console.log(this.state.email,this.state.password);
    
    //TO DO Add http call to api and handle according to response

    //Sparse Validation. Make complete validation here
    if((this.state.email!==undefined || this.state.password!==undefined)&&(this.state.email!="" || this.state.password!="")){

      this.http.post("apiurlhere",{email:this.state.email,password:this.state.password}).subscribe((res)=>{
        console.log(res);
        localStorage.setItem("jwt",res['jwt']);
        //To DO add validation to check if user creds match and then set state to loggedin
        localStorage.setItem("isLoggedIn","true");
        localStorage.setItem("username","Anuhya");
        console.log(localStorage.getItem("isLoggedIn"));
        
      });
    }else{
      this.state.err="Email and Password Cannot be empty";
      //TO DO remove the following  lines  
      localStorage.setItem("isLoggedIn","true");
      localStorage.setItem("username","Anuhya");
      console.log(localStorage.getItem("isLoggedIn"),localStorage.getItem('username'));
    }

  }

}
