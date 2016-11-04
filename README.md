# Angular 2 Snippets

## Behavior Service

> I can't quite remember where I first referenced this concept of a "Behavior Subject," but it worked well and this service evolved from that single article.  There are two files here, the type and the service; be sure they are included and referenced correctly.

```javascript
// USAGE: Watch for Behavior and OPTIONAL DATA

import { BehaviorService } from '../../services/behavior.service';
import { Subscription } from 'rxjs/subscription';
import { IBehaviorType } from '../../types/behavior.type';

@Component({ ... })
export class MainPage {

  constructor(
    private behavior: BehaviorService
  ) { }
  
  ngOnInit() {
    this.subscription = this.behavior.item.subscribe(
      (item: IBehaviorType) => {
        switch (item.type) {
          case ("change crew"):
            (settings.IsDebug) && console.log("home - change crew", item.data);
            this._processCrewChange(item.data)
            break;
        }
      }
    );
  }
}

// USAGE: Trigger a behavior change event

import { BehaviorService } from '../../services/behavior-service';

@Component({ ... })
export class EditPage {
    constructor(
    public behavior: BehaviorService
  ) { }

  applyChange() {
    // ...
    this.behavior.changeBehavior({
      type: "change crew",
      data: this.selectedBridge
    });
    // ...
  }
}
```

## Off-Click Directive

> Clicking outside a modal and having it close correctly was one of those events that seemed to always generate some ugly code.  Since moving to Angular 2 and implementing this code, it has become a breeze.

```html
<!-- usage -->
<div class="modal-wrapper" offclick="closeModalFunction">
  <!--
    Content Here
    The "closeModalFunction" should be part of this content's wrapper class.
  -->
</div>
```
