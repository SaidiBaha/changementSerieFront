import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() title: string = '';
  _shown: boolean = false;
  closed: EventEmitter<void> = new EventEmitter();
  accepted: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

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
