import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-field-button',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './field-button.html',
  styleUrls: ['./field-button.scss'],
})
export class FieldButton {
  field = input.required;
}
