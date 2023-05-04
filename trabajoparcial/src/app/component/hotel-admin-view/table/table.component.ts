import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { HttpDataService } from "../../../services/http-data.service";

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

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  isEditMode = false;

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  constructor(private HttpDataServices: HttpDataService) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllRooms();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllRooms();
  }

  getAllRooms() {
    this.HttpDataServices.getAllRooms().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }
}
