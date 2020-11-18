import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {
  links = [
    { label: 'Collections', link: '/web-app/resource/collections' },
    { label: 'Workspaces', link: '/web-app/resource/experiences' },
    { label: 'My Files', link: '/web-app/resource/my-files' }
  ];
  activeLink = this.links[0].label;

  constructor() { }

  ngOnInit(): void {
  }

}
