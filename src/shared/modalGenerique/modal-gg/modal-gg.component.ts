import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-gg',
  templateUrl: './modal-gg.component.html',
  styleUrls: ['./modal-gg.component.css']
})
export class ModalGgComponent implements OnInit {

  @Input() title: string = '';
  @Input() strictMode: boolean = false;
  _shown: boolean = false;
  closed: EventEmitter<void> = new EventEmitter();
  accepted: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    
  }

  open(): void {

    this._shown = true;
  }
  close(): void {
    this._shown = false;
    this.closed.emit();
  }

  accept(): void {
    this._shown = false;
    this.accepted.emit();
  }



}
