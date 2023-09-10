import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ngOnInit(): void {
    
  }

  hambergerActive = false;
  searchActive=false;
  hamberger() {
    this.hambergerActive = !this.hambergerActive;
    this.searchActive = this.searchActive && !this.searchActive;;
  }

  search(){
    this.searchActive = !this.searchActive;
    this.hambergerActive = this.hambergerActive && !this.hambergerActive;
  }
}
