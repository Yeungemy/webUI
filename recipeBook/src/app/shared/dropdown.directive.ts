import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private eleRef: ElementRef){}

  /**
   * Toggle open with closing the dropdown list by clicking otherwhere
   * @param {ElementRef} event 
   */
  @HostListener('document: click', ['$event']) toggleOpen(event: Event){
    this.isOpen = this.eleRef.nativeElement.contains(event.target)? !this.isOpen : false;
  }

  /**
   * Toggle open without closing the dropdown list by clicking otherwhere
   * @param {ElementRef} event 
   */
  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }
}
