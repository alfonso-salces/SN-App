import { Component, Input, ViewEncapsulation } from '@angular/core';
import {ButtonConfig} from "../../models/shared.model";

@Component({
  selector: 'sn-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {

  @Input() config: ButtonConfig = {
    disabled: false,
    text: '',
    type: '',
  };

}
