import { Component } from '@angular/core';
import CardDetails from '../../assets/details.json';
@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css'],
})
export class CardDetailsComponent {
  CardDetailList: Array<CardDetails> = CardDetails;
}

type CardDetails = { title: string; desc: string; logo: string };
