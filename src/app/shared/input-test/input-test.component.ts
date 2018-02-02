import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core'
import { NgModel } from '@angular/forms'

@Component({
  selector: 'mt-input-test',
  templateUrl: './input-test.component.html'
})
export class InputTestComponent implements OnInit, AfterContentInit {

  @Input() label: string
  @Input() errorMessage: string

  input: any

  @ContentChild(NgModel) model: NgModel

  constructor() { }

  ngOnInit() {
    console.log(`${this.label} and ${this.errorMessage}`)
  }

  ngAfterContentInit() {
    this.input = this.model;
    if (this.input === undefined) {
      throw new Error('This component need implemented with NgModel directive.')
    }
  }

  hasValid(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
