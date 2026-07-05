import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FieldTypeDefinition } from '../../../models/fields.interface';

@Component({
  selector: 'app-field-button',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './field-button.html',
  styleUrls: ['./field-button.scss'],
})
export class FieldButton {
  fieldType = input.required<FieldTypeDefinition>();
}
