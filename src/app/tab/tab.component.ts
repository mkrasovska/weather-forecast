import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
})
export class TabComponent {
  @Input() public tabTitle: string;
  @Input() public tabTitleTemplate: TemplateRef<unknown>;
  public active: boolean = false;
}
