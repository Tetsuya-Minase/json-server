import { Component, Input } from '@angular/core';
import { LinkObject } from '../../../model/objects/link.object';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'atom-router-link',
  templateUrl: './router-link.component.html',
  styleUrls: ['./router-link.component.scss']
})
export class RouterLinkComponent {
  @Input() linkObject: LinkObject;
}
