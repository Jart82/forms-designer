import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormElementsMenu } from './components/form-elements-menu/form-elements-menu';
import { MainCanvas } from './components/main-canvas/main-canvas';
import { FieldSettings } from './components/field-settings/field-settings';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormElementsMenu, MainCanvas, FieldSettings],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('forms-designer');
}
