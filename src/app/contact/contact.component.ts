import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.commonService.getMessages().subscribe((data: any) => {
      this.contacts = data;
    }, error => {
      this.toastr.error('Unable to get get messages!');
    });
  }

}
