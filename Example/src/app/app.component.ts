import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [AComponent, BComponent , FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  title = 'Example';

  parentMessage = "Hi from root component"

  message = ""

 @ViewChild(BComponent) child? : BComponent

 ngAfterViewInit(): void {
 
  if (this.child){
    this.message = this.child.childComponentMessage
  }
}
}
