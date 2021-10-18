import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.scss']
})
export class CaculatorComponent implements OnInit {
  value =1 ;

  constructor() { }


  ngOnInit(): void {
  }
  caculator( number1: any,number2: any,pheptinh: any){
      this.value = eval(number1 + pheptinh + number2) ;

  }

}
