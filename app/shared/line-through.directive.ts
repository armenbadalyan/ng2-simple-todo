import { Directive,
		 ElementRef,
		 Renderer,
		 Input } from '@angular/core';

@Directive({ selector: '[lineThrough]' })
export class LineThroughDirective {

	_displayLineThrough: boolean;

	get displayLineThrough() {
		return this._displayLineThrough;
	}

	@Input('lineThrough')
	set displayLineThrough(value:boolean) {
		this._displayLineThrough = value;	 	
		this.updateLineThrough();
	}

	updateLineThrough() {
		var decoration = this.displayLineThrough ? 'line-through' : '';
	 	this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', decoration);
	}

    constructor(private el: ElementRef, private renderer:Renderer) {}
}