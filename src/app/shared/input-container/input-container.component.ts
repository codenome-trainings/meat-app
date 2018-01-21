import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input-container.component.html'
})
export class InputContainerComponent implements OnInit, AfterContentInit {

  @Input() label: string;
  @Input() errorMessage: string;

  input: any;

  @ContentChild(NgModel) model: NgModel;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.model;
    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser utilizado com uma diretiva NgModel');
    }
  }

  hasSuccess() {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }
  
  hasError() {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }

}
