import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[pkSafeHtml]',
  standalone: true,
})
export class SafeHtmlDirective implements OnInit {
  @Input() pkSafeHtml!: string;
  @Input() clickCallback?: () => void;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    if (this.pkSafeHtml) {
      this.elementRef.nativeElement.innerHTML = this.pkSafeHtml;

      // Add click event listeners to elements with data-click attribute
      const clickableElements =
        this.elementRef.nativeElement.querySelectorAll('[data-click]');
      clickableElements.forEach((element: HTMLElement) => {
        element.addEventListener('click', () => {
          if (this.clickCallback) {
            this.clickCallback();
          }
        });
      });
    }
  }
}
