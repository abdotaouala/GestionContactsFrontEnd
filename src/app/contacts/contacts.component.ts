import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {ContactsService} from "../../services/contacts.service";
import {Router} from "@angular/router";
import {Contact} from "../../model/model.contact";
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts:any;
  motCle:string="";
  page:number=0;
  size:number=5;
  conf:any=null;
  pages:Array<number>;
  c:Contact;
  constructor(private http:Http,public  contactservice:ContactsService,public route:Router) { }
  ngOnInit() {
  }
  doserch(){
    this.contactservice.getContacts(this.motCle,this.page,this.size)
      .subscribe(data=>{
        this.pageContacts=data;
        this.pages=new Array(data.totalPages);
      },err=>{
        console.log(err);
      })
  }

  chercher(){
    this.doserch();
  }

  gotopage(i:number){
    this.page=i;
    this.doserch();
  }
  editContact(id:number){
    this.route.navigate(['editContact',id])
  }
  ondeleteContact(){
    this.contactservice.deleteContact(this.c.id).subscribe(data=>{
      this.pageContacts.content.splice(
        this.pageContacts.content.indexOf(this.c),1
      )
    },err=>{
      console.log(err)
    })
  }
  chargeid(cont:Contact){
    this.c=cont;
  }

}
