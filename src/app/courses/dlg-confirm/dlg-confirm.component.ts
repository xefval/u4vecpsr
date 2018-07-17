import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dlg-confirm',
  templateUrl: './dlg-confirm.component.html',
  styleUrls: ['./dlg-confirm.component.css']
})
export class DlgConfirmComponent implements OnInit {
  @Input() msg;
  closeResult: string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
