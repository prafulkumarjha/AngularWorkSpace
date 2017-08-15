import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  displayDetail : boolean = false;
  btnClicks = [ ];
  count : number = 0;
  constructor() { }

  ngOnInit() {
  }

  onShowDetail() {
    if(this.displayDetail === true)
      this.displayDetail = false;
    else 
    this.displayDetail = true;
    this.btnClicks.push(new Date());
  }
  

}
