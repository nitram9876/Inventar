import { InventarService } from './../inventar.service';
import { Inventar } from './../inventar';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  inventar: Inventar[];
  error = '';
  success: boolean;

  constructor(private inventarService: InventarService) { }

  ngOnInit() {
    this.getInventar();
  }

  getInventar(): void {
    this.inventarService.getAll().subscribe((res: Inventar[]) => {
      this.inventar = res['body'];
      this.success = true;
    },
    (err) => {
      this.error = err;
    });
  }

}
