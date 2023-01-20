import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Btc', 'Eth', 'Xrp', 'Btc', 'Eos', 'Lit', 'Dsh'],
    datasets: [
      { data: [6929.82, 1504.97, 3300.42, 4688.86, 4106.98, 3373.34, 1202.67], label: 'Prices in USD' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };
}
