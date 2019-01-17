import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-appareil-view',
    templateUrl: './appareil-view.component.html',
    styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

	@Input() appareilName: string;
	@Input() appareilStatus: string;
	@Input() index: number;
	@Input() id: number;
    isAuth = false;
	appareils: any[];
	appareilsSubscription: Subscription;

	constructor(private appareilService: AppareilService) {}

	ngOnInit() {
		this.appareilsSubscription = this.appareilService.appareilsSubject.subscribe(
			(appareils:any[]) => {
				this.appareils = appareils;
			}
		);
		this.appareilService.emitAppareilSubject();
	}

	onAllumer() {
		this.appareilService.switchOnAll();
	}

	onEteindre() {
		if(confirm('Etes vous sûr de vouloir éteindre tout vos appareils ?')) {
			this.appareilService.switchOffAll();
		} else {
			return null;
		}
	}

	lastUpdate = new Promise((resolve, reject) => {
		const date = new Date();
		setTimeout(
			() => {
				resolve(date);
			}, 2000
		);
	});

	onSave() {
		this.appareilService.saveAppareilsToServer();
	}

	onFetch() {
		this.appareilService.getAppareilsFromServer();
	}
}
