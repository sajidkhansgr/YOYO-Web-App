import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss'],
  host: {
    class: 'w-100'
  },
  encapsulation: ViewEncapsulation.None
})
export class HubComponent implements OnInit {
  // workspace variables
  checkWork: string = 'close';
  checkDoc: string = 'close';
  workspDisp: string = 'none';
  docDisp: string = 'none';
  workSecDisp: string = 'none';
  editDisp: string = 'none';
  viewDisp: string = 'block';

  constructor() { }

  ngOnInit(): void {
  }

  // workspace
  workspaceToggle = (event: any) => {
    let id = event.target.id;
    if (id === 'worksp') {
      this.workspDisp = 'block';
      this.docDisp = 'none';
    } else {
      this.workspDisp = 'none';
      this.docDisp = 'block';
    }
    if (this.checkWork === 'close' && this.checkDoc === 'close') {
      this.workspaceOpen();
      if (id === 'worksp') {
        this.checkWork = 'open';
      } else {
        this.checkDoc = 'open';
      }
    } else if (this.checkWork === 'close' && this.checkDoc === 'open') {
      if (id === 'worksp') {
        this.workspaceOpen();
        this.checkWork = 'open';
      } else {
        this.workspaceClose();
        this.checkWork = 'close';
      }
      this.checkDoc = 'close';
    } else if (this.checkWork === 'open' && this.checkDoc === 'close') {
      if (id === 'worksp') {
        this.workspaceClose();
        this.checkDoc = 'close';
      } else {
        this.workspaceOpen();
        this.checkDoc = 'open';
      }
      this.checkWork = 'close';
    }
  }

  // open workspace
  workspaceOpen = () => {
    // for view
    if (document.querySelector('.sub-tab-nav')) {
      document.querySelector('.sub-tab-nav')!.classList.remove('col-md-12');
      document.querySelector('.sub-tab-nav')!.classList.add('col-md-6');
    }
    if (document.querySelector('.sub-tab-nav table')) {
      document.querySelector('.sub-tab-nav table')!.classList.add('hide-rows');
    }
    // search heading
    if (document.querySelector('.sub-tab-nav .heading .search')) {
      document.querySelector('.sub-tab-nav .heading .search')!.classList.remove('col-lg-8', 'col-sm-7');
      document.querySelector('.sub-tab-nav .heading .search')!.classList.add('col-lg-6');
    }

    if (document.querySelector('.sub-tab-nav .heading .add-content')) {
      document.querySelector('.sub-tab-nav .heading .add-content')!.classList.remove('col-lg-4', 'col-sm-5');
      document.querySelector('.sub-tab-nav .heading .add-content')!.classList.add('col-lg-6');
      document.querySelector('.sub-tab-nav .heading .add-content .dropdown')!.classList.replace('mt-sm-0', 'mt-lg-0');
    }

    // for workspace
    this.workSecDisp = 'block';
  }

  // close workspace
  workspaceClose = () => {
    // for view
    if (document.querySelector('.sub-tab-nav')) {
      document.querySelector('.sub-tab-nav')!.classList.remove('col-md-6');
      document.querySelector('.sub-tab-nav')!.classList.add('col-md-12');
    }
    if (document.querySelector('.sub-tab-nav table')) {
      document.querySelector('.sub-tab-nav table')!.classList.remove('hide-rows');
    }
    // search heading
    if (document.querySelector('.sub-tab-nav .heading .search')) {
      document.querySelector('.sub-tab-nav .heading .search')!.classList.remove('col-lg-6');
      document.querySelector('.sub-tab-nav .heading .search')!.classList.add('col-lg-8', 'col-sm-7');
    }

    if (document.querySelector('.sub-tab-nav .heading .add-content')) {
      document.querySelector('.sub-tab-nav .heading .add-content')!.classList.remove('col-lg-6');
      document.querySelector('.sub-tab-nav .heading .add-content')!.classList.add('col-lg-4', 'col-sm-5');
      document.querySelector('.sub-tab-nav .heading .add-content .dropdown')!.classList.replace('mt-lg-0', 'mt-sm-0');
    }

    // for workspace
    this.workSecDisp = 'none';
  }

  // close button on workspace
  closeWorkspace = () => {
    this.workspaceClose();
    this.checkWork = 'close';
    this.checkDoc = 'close';
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
