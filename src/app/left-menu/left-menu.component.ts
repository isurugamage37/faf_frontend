import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  standalone: true,
  imports: [CommonModule], // Add CommonModule to support *ngFor
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  menuItems: string[] = ['Domestic Flows', 'Foreign Flows', 'Overview', 'About'];
  selectedItem: string = 'Domestic Flows'; // Default selected item

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.navigateToItem(this.selectedItem); // Navigate to the default item initially
  }

  onMenuItemClick(item: string): void {
    this.selectedItem = item; // Set the selected item
    this.navigateToItem(item);
  }

  private navigateToItem(item: string): void {
    let route: string = '';
    switch (item) {
      case 'Domestic Flows':
        route = 'domestic-flow';
        break;
      case 'Foreign Flows':
        route = 'foreign-flow';
        break;
      case 'Overview':
        route = 'overview';
        break;
      case 'About':
        route = 'about';
        break;
      default:
        route = ''; // Optional: Handle other menu items if needed
    }
    if (route) {
      this.router.navigate([route]);
    }
  }
}
