import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;

  constructor() {
    this.user = {
      name: 'Rahul Goti',
      title: 'Software Developer',
      address: '203, Surat, India',
      phone:
        [9979787707, 8899774455]
    }

  }

  ngOnInit() {
  }

}
