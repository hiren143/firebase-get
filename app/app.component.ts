import { Component } from '@angular/core';
import { Data } from './data';
import { DataserviceService} from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dataarray: Data[];


constructor( private ds: DataserviceService) { }

  // getdata()
  // {
  //   console.log('componnrt call subscribe');
  //  let asd = this.ds.getEmployees();
  //  console.log(asd);
  // }

  getdata()
  {
    this.ds.getEmployees().subscribe(data => {
      this.dataarray = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Data
        } ;
    });
    console.log(this.dataarray);
    });

  }

}
