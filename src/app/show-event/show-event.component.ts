import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.css']
})
export class ShowEventComponent implements OnInit {
  eventDet=""
  edate=""
  edetl=""
  indexNum=""
  constructor(private dataservice:DataService,private router:Router) {
    let uID=localStorage.getItem("uID")
    this.dataservice.displayevent(uID)
     .subscribe((result:any)=>{
       if(result){
         this.eventDet=result.message
       }
      },
      (result)=>{
alert(result.error.message)
      
     })
   }

  ngOnInit(): void {
  }
  back(){
    this.router.navigateByUrl('createEvent')
  }
  deleteRow(eventdet){
    let uID=localStorage.getItem("uID")
    this.dataservice.deleteRow(eventdet,uID)
      .subscribe((result:any)=>{
      if(result){
        alert(result.message)
        location.reload();
      }
      },
      (result)=>{
      alert(result.error.message)
     
     })
  }
  updateRow(indexNo:any,eventDate:any,eventdet:any){
    document.getElementById("editDiv").setAttribute("style", "display:block;")
    this.indexNum=indexNo
   this.edate=eventDate
    this.edetl=eventdet
  }
  update(indexNum:any,evnDate:any,evnDelt:any){
    let uID=localStorage.getItem("uID")
   this.dataservice.update(uID,indexNum,evnDate,evnDelt)
   .subscribe((result:any)=>{
    if(result){
      alert(result.message)
      location.reload();
    }
    },
    (result)=>{
    alert(result.error.message)
   
   })
  }
}
