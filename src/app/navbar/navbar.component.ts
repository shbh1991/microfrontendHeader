import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from "../services/data.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  count = {};
  constructor(private dataService: DataService, private changeDetectorRef: ChangeDetectorRef) { }
  ngOnInit() {
    var _self = this;
    window.addEventListener("DataUpdated", () => {
      _self.dataService.getDataCount().subscribe(data => {
        _self.count = data;
        this.changeDetectorRef.detectChanges();
      });
    });
    this.dataService.getDataCount().subscribe(data => { _self.count = data; });
  }
}
