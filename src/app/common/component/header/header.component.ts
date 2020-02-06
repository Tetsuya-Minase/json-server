import { Component } from '@angular/core';
import { LinkObject } from '../../../model/objects/link.object';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  readonly LINK_LIST: LinkObject[] = [
    {
      text: '編集',
      url: '/edit',
    },
    {
      text: '一覧',
      url: '/list',
    },
  ];
  readonly TOP_LINK: LinkObject = {
    text: 'JSON-SERVER',
    url: '/',
  };
}
