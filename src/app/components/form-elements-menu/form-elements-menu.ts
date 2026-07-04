import { Component, inject } from '@angular/core';
import { FieldTypesService } from '../../services/field-types.service';
import { FieldButton } from './field-button/field-button';

@Component({
  selector: 'app-form-elements-menu',
  standalone: true,
  imports: [FieldButton],
  templateUrl: './form-elements-menu.html',
  styleUrls: ['./form-elements-menu.scss'],
})
export class FormElementsMenu {

  fieldTypesService = inject(FieldTypesService);

  fieldTypes = this.fieldTypesService.getAllFieldTypes();

}
