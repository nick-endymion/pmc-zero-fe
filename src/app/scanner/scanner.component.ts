import {Component, OnInit} from '@angular/core';
import {EntityBackendService} from "../services/entity.backend.service";
import {Mset} from "../models/mset";
import {Scanner} from "../models/Scanner";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

  scanner: Scanner;
  errorMessage = "";

  constructor(private scannerService: EntityBackendService<Scanner>,
              private route: ActivatedRoute,
              private router: Router
  ) {
    this.scanner = new Scanner(undefined, "")
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        let id = +params['id'];
        if (id) {
          this.scanner.id = id;
          this.get();
        }
      }
    );
  }

  get(): void {
    this.scannerService.loadEntity(this.scanner).subscribe(s =>
      this.scanner = Scanner.copy(s)
    )
  }


  save() {
    this.scannerService.saveEntity(this.scanner).subscribe((s) => {
      this.scanner = Scanner.copy(s)
      this.errorMessage = ""
    }, (error => {
      this.errorMessage = error.error.message;
      console.log(error)
      console.log(error.message)
      console.log(error.error)
      alert(error.message)
    }))
  }

}
