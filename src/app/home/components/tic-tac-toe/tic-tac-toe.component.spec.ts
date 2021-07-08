import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/services/auth.service';
import { RoomService } from 'src/app/services/room.service';
import { WebSocketService } from 'src/app/services/web-socket.service';

import { TicTacToeComponent } from './tic-tac-toe.component';

describe('TicTacToeComponent', () => {
  let component: TicTacToeComponent;
  let fixture: ComponentFixture<TicTacToeComponent>;
  component.cachePlayers=[]
  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      declarations: [ TicTacToeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    
    fixture = TestBed.createComponent(TicTacToeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('check user', () => {
    component.cachePlayers.push("Joy","Dom");
    expect(component.checkUser("Joy")).toBeTruthy();
    
  });
});
