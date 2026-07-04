import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { FieldTypeDefinition } from '../models/fields.interface';

const TEXT_FIELD_DEFINITION = {
  type: 'text',
  label: 'Text',
  icon: 'text_fields',
}

const CHECKBOX_FIELD_DEFINITION = {
  type: 'checkbox',
  label: 'Checkbox',
  icon: 'check_box',
}

@Injectable({
  providedIn: 'root',
})
export class FieldTypesService {

  fieldTypes = new Map<string, FieldTypeDefinition>([
    ['text', TEXT_FIELD_DEFINITION],
    ['checkbox', CHECKBOX_FIELD_DEFINITION],
  ]);

  getAllFieldTypes() {
    return Array.from(this.fieldTypes.values());
  }

  constructor() {}
}
