import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div id="client-c">
      <div class="card">
        <div class="content">
          <a routerLink="page1">Passenger Search</a> | <a routerLink="page2">Details</a>
        </div>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    #client-c { border: navy dashed 5px; padding: 10px }
  `],
})
export class CoreComponent {
}
