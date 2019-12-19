import { Component, Input } from '@angular/core';
import { LinkObject } from '../../../model/objects/link.object';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'atom-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  @Input() linkObject: LinkObject;
}
