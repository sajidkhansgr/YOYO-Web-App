import { Component, OnInit } from '@angular/core';
import { HubService } from '../hub.service';

@Component({
  selector: 'app-content-workspace',
  templateUrl: './content-workspace.component.html',
  styleUrls: ['./content-workspace.component.scss']
})
export class ContentWorkspaceComponent implements OnInit {
  editDisp: string = 'none';
  viewDisp: string = 'block';
  showAddCatIp: string = 'none';
  showWork: boolean = false;
  showDoc: boolean = false;

  constructor(
    private hubServ: HubService
  ) { }

  ngOnInit(): void {
    // this.getHubs()
  }

  // workspace
  workspaceToggle = () => {
    this.showDoc = false;
    this.showWork = !this.showWork;
  }

  documentToggle = () => {
    this.showWork = false;
    this.showDoc = !this.showDoc;
  }

  // close button on workspace
  closeWorkspace = () => {
    this.showWork = false;
    this.showDoc = false;
  }

  // edit options in documents (workspace)
  openEdit = (event: any) => {
    event = event.target;
    (event.parentNode.parentNode.parentNode.childNodes[1] as HTMLElement).style.display = 'none';
    (event.parentNode.parentNode.parentNode.childNodes[2] as HTMLElement).style.display = 'block';
  }
  closeEdit = (event: any) => {
    event = event.target;
    (event.parentNode.parentNode.parentNode.parentNode.childNodes[1] as HTMLElement).style.display = 'block';
    (event.parentNode.parentNode.parentNode.parentNode.childNodes[2] as HTMLElement).style.display = 'none';
  }
}
