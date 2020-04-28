import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-convert-form',
  templateUrl: './convert-form.component.html',
  styleUrls: ['./convert-form.component.scss']
})
export class ConvertFormComponent implements OnInit {
  @Input() value: Array<string>;
  @Output() valueChange = new EventEmitter<number>();

  ngOnInit() {
  }

  convertToDec(binaryNumber: string) {
    this.value = [...binaryNumber];
    let result = 0;
    let arrayLength = this.value.length - 1;

    if(this.value.includes("1") || this.value.includes("1")){
      this.value.forEach((e, i) => {
        e === "1" ? result += Math.pow(2, arrayLength - i): result ;
      })
    }

    this.valueChange.emit(result);
  }

}
