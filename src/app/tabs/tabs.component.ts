import {AfterContentInit, Component, ContentChildren, EventEmitter, Output, QueryList} from '@angular/core';
import { TabComponent } from 'app/tab/tab.component';
import { merge, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) protected tabs: QueryList<TabComponent>;
  @Output() public closeTab: EventEmitter<number> = new EventEmitter();

  public ngAfterContentInit(): void {
    // Reset tab selection on init and when selected tab deleted
    merge(of(null),this.tabs.changes)
    // delay to avoid ExpressionChangedAfterItHasBeenCheckedError
      .pipe(delay(0))
      .subscribe(() => {
        this._resetSelectedTab();
      });    
  }

  public selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach(t => t.active = false);
    tab.active = true;
  } 

  public close(tabIndex: number, clickEvent: MouseEvent) {
    // Prevent the tab from being selected
    clickEvent.stopPropagation();
    this.closeTab.emit(tabIndex);
  }

  private _resetSelectedTab(): void {
    if (this.tabs.length > 0) {
      const selectedTab = this.tabs.find(tab => tab.active);

      if (!selectedTab && this.tabs.first) {
        this.tabs.first.active = true;
      }
    }
  }
}

