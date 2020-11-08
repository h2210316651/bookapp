import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public state={email:undefined,password:undefined,pic:undefined};
  constructor(
    private http:HttpClient,
    private router:Router
  ) { 

  }

  ngOnInit(): void {
  }
  register(){
    console.log(this.state.email,this.state.password,this.state.pic);
    // TO DO Make an actual api call and get response
    this.http.post("apiurlhere",{email:this.state.email,password:this.state.password,profilepic:this.state.pic}).subscribe((res)=>{
      console.log(res);
      window.alert("Successfully Registered");
      this.router.navigate(['/login']);
    });

    //To DO after successfully implementing the api delete the following lines
    window.alert("Successfully Registered");
      this.router.navigate(['/login']);
    
  }

}
