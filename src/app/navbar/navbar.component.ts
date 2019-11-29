import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import * as socketIo from 'socket.io-client';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  count = {};
  constructor(private dataService: DataService) { }
  ngOnInit() {
    const socket = socketIo('http://10.10.114.97:5555');
    socket.on('dataRefresh', (dt) => {
      console.log(dt);
      this.dataService.getDataCount().subscribe(data => { this.count = data;});
    });
    this.dataService.getDataCount().subscribe(data => { this.count = data;});
  }
}
