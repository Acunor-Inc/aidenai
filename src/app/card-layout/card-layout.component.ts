import { Component } from '@angular/core';
import data from '../../assets/data.json';

@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.css'],
})
export class CardLayoutComponent {
  CardData: Array<CardData> = data;
}

type CardData = { logo: string; title: string; desc: string };
