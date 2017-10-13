import { Component, OnInit } from '@angular/core';
import {Contact} from "../../model/model.contact";
import {ActivatedRoute} from "@angular/router";
import {ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  mode:number=1;
  contact:Contact=new Contact();
  id:number;
  constructor(public activatedRoute:ActivatedRoute,public contactService:ContactsService) {
  }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.contactService.getContact(this.id)
      .subscribe(resp=>{
        this.contact=resp;
      },err=>{
        console.log(err)
      })

  }

  updateContact(){
    this.contactService.updateContact(this.contact,this.id).subscribe(resp=>{
      this.contact=resp;
      this.mode=2;
    },err=>{
      console.log(err);
    });
  }

}
