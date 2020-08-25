import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BR-inputs-app';
  public cpfCnpjNgModel: string;
  public cpfCnpjAsNumber: number;
  public cpfCnpjFormControl = new FormControl();
}
