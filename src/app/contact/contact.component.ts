import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import openSocket from 'socket.io-client';
// Services
import { CommonService } from '../_services/common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private API_URL = 'http://localhost:4900';
  contacts = [];
  constructor(
    private commonService: CommonService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getContacts();
    const socket = openSocket(this.API_URL);
    socket.on('messsages', data => {
      if (data.action === 'create') {
        this.toastr.info('New message received!');
        this.contacts.unshift(data.message);
      }
    });
  }

  getContacts() {
    this.commonService.getMessages().subscribe((data: any) => {
      this.contacts = data;
      this.contacts.reverse();
    }, error => {
      this.toastr.error('Unable to get get messages!');
    });
  }
}
