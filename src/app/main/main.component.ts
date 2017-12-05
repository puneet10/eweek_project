import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public doughnutChartLabels: String[] = ['event 1', 'event 2', 'event 3'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: String = 'doughnut';
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: String[] = ['2014', '2015', '2016', '2017'];
  public barChartType: String = 'bar';
  public barChartLegend: Boolean = true;
  public barChartData: any[] = [
    {data: [65, 59, 80, 81], label: 'event 1'},
    {data: [28, 48, 40, 19], label: 'event 2'},
    {data: [10, 14, 15, 10], label: 'event 3'}
  ];
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }
  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }


  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.doughnutchart').hide();
    $('#showDoughnut').click(function(e) {
      e.stopPropagation();
      $('.doughnutchart').toggle();
    });
  });
  }

}
