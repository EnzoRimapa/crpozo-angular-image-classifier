import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver) {

  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width:768px)']).subscribe((rest) =>{
      if(rest.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }
    });
  }

}
