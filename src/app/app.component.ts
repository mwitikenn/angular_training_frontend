import { Component } from '@angular/core';
import { Model } from './model';
import { PostRequestService} from './post-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public result: any;
  model = new Model('add', '21', '22');
  constructor(private _postRequestService: PostRequestService) {}
  onSubmit() {
    console.log(this.model);
    this._postRequestService.doOperation(this.model)
      .subscribe((data: {}) => {
        console.log(data);
        this.result = data;
      });
  }

}
