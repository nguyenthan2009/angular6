import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.scss']
})
export class CaculatorComponent implements OnInit {
  pheptinh: any;
  value =1 ;

  constructor() { }


  ngOnInit(): void {
  }
  caculator1( number1: any,number2: any){
      this.value = number1+number2
  }
  caculator2( number1: any,number2: any){
    this.value = number1 -number2
  }
  caculator3( number1: any,number2: any){
    this.value = number1*number2
  }
  caculator4( number1: any,number2: any){
    this.value = number1/number2
  }

}
