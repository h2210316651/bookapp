import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public state={favourites:[],author:[],recommendations:[],isLoggedIn:false,username:undefined};
  //TO DO (Backend) Inject Http and make a call to retrive favourites author and recommendations
  constructor(
    private router:Router,
  ) { 
    if(localStorage.getItem('isLoggedIn')=="true"){
    this.state.isLoggedIn=true;
    this.state.username=localStorage.getItem('username');
    }
  }

  ngOnInit(): void {
  //  Dummy data to fill UI out. Replace with real values from API
  this.state.favourites.push({id:"dummyid1",coverPic:"https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/19a14fb2a_175267.jpg",name:"dummyname1",desc:"Dummy Desc"});
  }
  login(){
    this.router.navigate(['/login']);
  }

  logout(){
    this.state.isLoggedIn=false;
    localStorage.removeItem("username");
    localStorage.removeItem("jwt");
    localStorage.removeItem("isLoggedIn");
  }

}
