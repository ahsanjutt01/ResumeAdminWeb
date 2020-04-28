import { Component, OnInit } from '@angular/core';

// Services
import { CommonService } from '../_services/common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: [any];
  constructor(
    private commonService: CommonService,
  ) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.commonService.getMessages().subscribe((data: any) => {
      this.contacts = data;
    }, error => {
      debugger;
    });
  }

}
