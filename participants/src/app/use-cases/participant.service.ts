import { Injectable } from '@angular/core';
import { ParticipantModel } from '../entities/participant.model';
import ParticipantsMockJson from './mock/participant-mock.json';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor() { }

  getParticipants() : Array<ParticipantModel> {
    return ParticipantsMockJson;
  }
}
