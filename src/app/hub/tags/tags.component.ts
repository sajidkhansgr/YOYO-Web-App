import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  showAddCatIp: string = 'none';
  rowInfo: any;
  showRowInfo: boolean = false;
  showCatgIn: boolean = false;
  constructor(
    public dialog: MatDialog
  ) { }


  ngOnInit(): void {
    console.log("load")
  }

  toggleCatgInp() {
    this.showCatgIn = !this.showCatgIn;
  }

  showCatListIP = (event: any) => {
    event.target.parentNode.nextSibling.style.display = 'block';
  }

  closeCatListIP = (event: any) => {
    event.target.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
  }

  toggleInfo(row: any) {
    if (!this.showRowInfo)
      this.rowInfo = row;
    else
      this.rowInfo = {};
    this.showRowInfo = !this.showRowInfo;
  }

  closeInfo = () => {
    this.showRowInfo = false
  }

  delCatg(catg:any) {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: `Are you sure you want to delete this category? You can't undo this action.?`,
        title: `Delete category`
      }
    }).afterClosed().subscribe(result => {
      if (result) {
      }
    })
  }

}
