var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ContentChild } from '@angular/core';
import { NgModel } from '@angular/forms';
var InputContainerComponent = (function () {
    function InputContainerComponent() {
    }
    InputContainerComponent.prototype.ngOnInit = function () {
    };
    InputContainerComponent.prototype.ngAfterContentInit = function () {
        this.input = this.model;
        if (this.input === undefined) {
            throw new Error('Esse componente precisa ser utilizado com uma diretiva NgModel');
        }
    };
    InputContainerComponent.prototype.hasSuccess = function () {
        return this.input.valid && (this.input.dirty || this.input.touched);
    };
    InputContainerComponent.prototype.hasError = function () {
        return this.input.invalid && (this.input.dirty || this.input.touched);
    };
    return InputContainerComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], InputContainerComponent.prototype, "label", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], InputContainerComponent.prototype, "errorMessage", void 0);
__decorate([
    ContentChild(NgModel),
    __metadata("design:type", NgModel)
], InputContainerComponent.prototype, "model", void 0);
InputContainerComponent = __decorate([
    Component({
        selector: 'mt-input-container',
        templateUrl: './input-container.component.html'
    }),
    __metadata("design:paramtypes", [])
], InputContainerComponent);
export { InputContainerComponent };
//# sourceMappingURL=input-container.component.js.map