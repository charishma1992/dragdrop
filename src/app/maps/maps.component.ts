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
  schemeCatogery: any;
  latestDate: any;
  latestNav: any;
  increment: any;
  filterGraph = ['1Week', '3Months', '6Months', '1Year', '3Years', '5Years', 'All'];
  period: any;
  xAxis: any;
  constructor(private http: CommonService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { 
    this.period ="All";
    this.xAxis = "DD MMM YYYY";
  }
  getFundHistory() {
    this.http.getFundData(this.code).subscribe(data => {
      console.log('data from api', data);
      this.data1 = data['data'];
      this.chartHeading = data['meta'].scheme_name;
      this.schemeCatogery = data['meta'].scheme_category;
      this.latestDate = this.data1[0].date;
      this.latestNav = this.data1[0].nav;
      this.increment = this.data1[0].nav - this.data1[1].nav;
      this.data1.forEach(element => {
        let x = element.date.split("-");
        element.date = new Date(x[2], x[1] - 1, x[0]);
        element.nav = parseFloat(element.nav);
      });
      this.CalculateSIP();
      this.graphData(this.data1);
    })
  }
  graphData(fundData) {
    this.data = [];
    fundData.forEach(element => {
      this.data.push({ y: element.nav, x: element.date });
    });
    var chart = new CanvasJS.Chart("chartContainer",
      {
        title: {
          text: this.chartHeading
        },
        axisX: {
          title: "Mutual fund	",
          valueFormatString: this.xAxis
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
    console.log('this.chart', chart.axisX[0].valueFormatString,chart);
  }
  changeGraph() {

    switch (this.period) {
      case '1Week':
        let x = new Date();
        x.setDate(this.data1[0].date.getDate() - 6);
        var y = [];
        this.data1.forEach(element => {
          if (element.date >= x) {
            y.push(element);
          }
        });
        this.xAxis = "DD MMM";
        this.graphData(y);
        
        break;
      case '3Months':
        var d = new Date();
        d.setMonth(this.data1[0].date.getMonth() - 3);
        var d = new Date(d);
        var y = [];
        this.data1.forEach(element => {
          if (element.date >= d) {
            y.push(element);
          }
        });
        this.xAxis = "DD MMM";
        this.graphData(y);
        break;
      case '6Months':
        var d = new Date();
        d.setMonth(this.data1[0].date.getMonth() - 6);
        var d = new Date(d);
        var y = [];
        this.data1.forEach(element => {
          if (element.date >= d) {
            y.push(element);
          }
        });
        this.xAxis = "DD MMM";
        this.graphData(y);
        break;
      case '1Year':
        var d = new Date();
        d.setFullYear(this.data1[0].date.getFullYear() - 1);
        var y = [];
        this.data1.forEach(element => {
          if (element.date >= d) {
            y.push(element);
          }
        });
        this.xAxis = "DD MMM YYYY";
        this.graphData(y);
        break;
      case '3Years':
        var d = new Date();
        d.setFullYear(this.data1[0].date.getFullYear() - 3);
        var y = [];
        this.data1.forEach(element => {
          if (element.date >= d) {
            y.push(element);
          }
        });
        this.xAxis = "DD MMM YYYY";
        this.graphData(y);
        break;
      case '5Years':
        var d = new Date();
        d.setFullYear(this.data1[0].date.getFullYear() - 3);
        var y = [];
        this.data1.forEach(element => {
          if (element.date >= d) {
            y.push(element);
          }
        });
        this.xAxis = "DD MMM YYYY";
        this.graphData(y);
        break;
      case 'All':
      this.xAxis = "DD MMM YYYY";
        this.graphData(this.data1);
        break;
      default:
        console.log("No such day exists!");
        break;
    }

  }

  CalculateSIP(){
    var d = new Date();
    d.setFullYear(d.getFullYear() - 3);
    console.log('d', d,this.data1);
    var y = [];
    // this.data1.forEach(element => {
     
    // });
  }
  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('code');
    this.getFundHistory();
    
  }

}
