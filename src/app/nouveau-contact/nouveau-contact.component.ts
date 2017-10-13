import { Component, OnInit } from '@angular/core';
import {ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(public contactService:ContactsService) { }

  ngOnInit() {
  }

  onsaveContact(dataForm){
    this.contactService.saveContact(dataForm)
      .subscribe(resp=>{
        console.log(resp)
      },err=>{
        console.log(err)
      })
  }
}
