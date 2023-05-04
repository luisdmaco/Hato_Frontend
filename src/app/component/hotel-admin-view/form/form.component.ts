import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { Room } from "src/app/models/room.model";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent {
  roomForm!: NgForm;
  roomData!: Room;

  @ViewChild("roomForm", { static: false })
  paginator!: MatPaginator;
  isEditMode = false;

  cancelEdit() {
    this.isEditMode = false;
    this.roomForm.resetForm();
  }

  onSumit() {
    if (this.roomForm.valid) {
      console.log("valid");
      if ((this.isEditMode = true)) {
        console.log("Update");
        //this.updateRoom();
      } else {
        console.log("Create");
        //this.createRoom();
      }
    } else {
      console.log("invalid data");
    }
  }
}
