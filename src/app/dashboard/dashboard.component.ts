import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user=""
  
  constructor(private router:Router,private dataSerivce:DataService) {
    this.user = localStorage.getItem("name")
   }

  ngOnInit(): void {
  }
  create(){
    this.router.navigateByUrl('createEvent');
  }
  show(){
    this.router.navigateByUrl('showEvent')
  }
  remainder(){
    this.router.navigateByUrl('remainder')
  }

}
