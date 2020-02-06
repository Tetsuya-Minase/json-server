import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'atom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonText: string;
  @Output() clickEvent = new EventEmitter<string>();

  onClick() {
    this.clickEvent.emit('click');
  }
}
