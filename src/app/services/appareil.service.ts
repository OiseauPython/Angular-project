export class AppareilService {
	appareils = [{
		name: 'Machine à laver',
		status: 'eteint'
	  },
	  {
		name: 'Tassimo',
		status: 'allumé'
	  },
	  {
		name: 'Dyson V8',
		status: 'eteint'
	  }
	];

	switchOnAll() {
		for(let appareil of this.appareils) {
		  appareil.status = 'allumé';
		}
	}
	
	switchOffAll() {
		for(let appareil of this.appareils) {
		  appareil.status = 'éteint';
		}
	}
}