import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'src/assets/canvasjs.min';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  data: any = [];
  data1: any;
  code: any;
  chartHeading: any;
  constructor(private http : CommonService ,private fb: FormBuilder, private route:ActivatedRoute, private router:Router) { }
  getFundHistory(){
    this.http.getFundData(this.code).subscribe(data =>{
      console.log('data from api', data);
      this.data1= data['data'];
      this.chartHeading = data['meta'].scheme_name;
      this.data1.forEach(element => {
        let x = element.date.split("-");
        element.date = new Date(x[2], x[1], x[0]);
        element.nav = parseFloat(element.nav);
      });
      this.data1.forEach(element => {
        this.data.push({ y: element.nav, x: element.date });
      });
      var chart = new CanvasJS.Chart("chartContainer",
        {
          title: {
            text: this.chartHeading
          },
          axisX: {
            title: "Mutual fund	",
            // valueFormatString: "MMM"
            // gridThickness: 2
          },
          axisY: {
            title: "NAV"
          },
          data: [
            {
              type: "area",
              dataPoints: this.data
            }
          ]
        });
      chart.render();
      console.log('data1111 from api', this.data1);
    })
  }
  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('code');
    console.log('this.code',this.code);
    this.getFundHistory();
  }

}
