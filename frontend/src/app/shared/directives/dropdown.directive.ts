import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[dropdown]'
})
export class DropdownDirective{
    // @HostBinding('class.show') isOpen = false;
    @HostListener('click', ['$event.target']) toggleOpen(el){
        el.closest('.nav-item').querySelector('.dropdown-menu').classList.toggle('show');
        // this.isOpen = !this.isOpen;
    } 
}