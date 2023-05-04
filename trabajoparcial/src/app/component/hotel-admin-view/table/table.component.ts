import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
})
export class TableComponent {
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    "room",
    "guestName",
    "checkinDate",
    "price",
    "status",
    "time",
  ];
}
