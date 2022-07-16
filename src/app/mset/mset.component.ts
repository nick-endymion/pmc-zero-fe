import {Component, OnInit} from '@angular/core';
import {EntityBackendService} from "../services/entity.backend.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Mset} from "../models/mset";
import {RessourceUrls} from "../models/ressourceUrls";

@Component({
  selector: 'app-mset',
  templateUrl: './mset.component.html',
  styleUrls: ['./mset.component.scss']
})
export class MsetComponent implements OnInit {

  mset: Mset;
  ressourceUrlsList: RessourceUrls[] = [];
  tnView = false;

  constructor(
    private msetService: EntityBackendService<Mset>,
    private ressourceUrlsEntityBackendService: EntityBackendService<RessourceUrls>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.mset = new Mset(undefined, "");
    this.route.params.subscribe(params => {
        console.log(params);
        let id = +params['id'];
        if (id) {
          this.mset.id = id;
          this.get();
        }
      }
    );
  }


  ngOnInit(): void {
    // this.get()
  }

  newMset(b: Mset): Mset {
    console.log("ID " + b.id)
    let constructedmset = new Mset(b.id, b.name);
    constructedmset.media = b.media;
    constructedmset.created_at = b.created_at;
    constructedmset.updated_at = b.updated_at;
    return constructedmset;
  }

  get(): void {
    console.log("get ID " + this.mset.id)
    this.msetService.loadEntity(this.mset, "/media").subscribe(mset => this.mset = this.newMset(mset));
  }

  save(): void {
    console.log("save ID " + this.mset.id)
    this.msetService.saveEntity(this.mset).subscribe((mset: Mset) => {
      this.mset = this.newMset(mset)
      this.router.navigate(['/msets', this.mset.id])
    })

  }

  new(): void {
    this.mset = new Mset(undefined, "");
    this.router.navigate(['/msets'])
  }

  delete(): void {
    this.msetService.deleteEntity(this.mset).subscribe(() => this.mset = new Mset(undefined, ""));
  }


  getTitle() {
  }

  showTnView() {
    this.tnView = true;
    this.ressourceUrlsEntityBackendService.loadEntityList(this.mset.id!!, "/api/msets/", "/ressources-urls").subscribe(r => this.ressourceUrlsList = r);

  }

}
