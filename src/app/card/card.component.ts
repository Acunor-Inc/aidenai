import { Component, Input, OnInit } from '@angular/core';
import data from '../../assets/data.json';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  CardData: Array<CardData> = data;
}

type CardData = { logo: string; title: string; desc: string };
