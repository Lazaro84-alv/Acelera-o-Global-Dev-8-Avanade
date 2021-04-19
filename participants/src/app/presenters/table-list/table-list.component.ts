import { Component, OnInit } from '@angular/core';
import { ParticipantService } from 'src/app/use-cases/participant.service';
import { ParticipantModel } from 'src/app/entities/participant.model';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  private participantService: ParticipantService = new ParticipantService();
  
  public participants = new Array<ParticipantModel>();

  constructor() { }

  ngOnInit() {
    this.participants = this.participantService.getParticipants();
  }

}
