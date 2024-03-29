import { Module } from '../core/module';
import yanaa from '../assets/yana.jpg';
import asset from '../assets/asset.jpg';
import marat from '../assets/marat.jpg';
import diman from '../assets/dimarik.jpg';
import roman from '../assets/roman.jpg';
import alexy from '../assets/alexey.jpg';
import darya from '../assets/darya.jpg';

import vk from '../assets/vk.png';
import telegram from '../assets/telegram.png';
import github from '../assets/github.png';
import instagram from '../assets/instagram.png';

export default class AboutDevsModule extends Module {
	#isModuleRendered;
	#isModuleDisplayed;
	
	constructor(text) {
		super('AboutDevs', text);
		this.teamContainer = document.createElement('div');
		this.teamContainer.className = 'team-container';
		this.#isModuleRendered = false;
		this.#isModuleDisplayed = false;
	}

	trigger() {
		if (!this.#isModuleRendered) {
			this.#isModuleRendered = true;
			teammates.forEach(teammateInfo => {
				const teammate = new Teammate(teammateInfo.name, teammateInfo.url, teammateInfo.telegram, teammateInfo.github, teammateInfo.vk, teammateInfo.instagram);
				const teammateHTML = teammate.toHTML();
				this.teamContainer.insertAdjacentHTML('beforeend', teammateHTML);
				document.body.append(this.teamContainer);
			});
		}
		
		if (this.#isModuleDisplayed) {
			this.teamContainer.style.display = 'none';
		} else {
			this.teamContainer.style.display = 'flex';
		}
		this.#isModuleDisplayed = !this.#isModuleDisplayed;
	}

}

class Teammate {
	#name;
	#avaUrl;
	#telegram;
	#github;
	#vk;
	#instagram;

	constructor(name, avaUrl, telegram, github, vk, instagram) {
		this.#name = name;
		this.#avaUrl = avaUrl;
		this.#telegram = telegram;
		this.#github = github;
		this.#vk = vk;
		this.#instagram = instagram;
	}

	toHTML() {
		return `<div class="teammate">
			<img src="${this.#avaUrl}" alt="${this.#name}'s ava" />
			<div class='teammate-name'>${this.#name}</div>
			<div class="teammate-contacts">
				<a target="_blank" href="https://t.me/${this.#telegram}"><img src="${telegram}" alt="telegram" /></a>
				<a target="_blank" href="https://www.instagram.com/${this.#instagram}"><img src="${instagram}" alt="instagram" /></a>
				<a target="_blank" href="http://vk.com/${this.#vk}"><img src="${vk}" alt="vk" /></a>
				<a target="_blank" href="https://github.com/${this.#github}"><img src="${github}" alt="github" /></a>
			</div>
		</div>`;
	}
}

const teammates = [
	{
		name: 'Яна',
		url: yanaa,
		telegram: 'domosed27',
		github: 'Nuyrguyana',
		vk: '#',
		instagram: '#'
	},
	{
		name: 'Darya',
		url: darya,
		telegram: 'daryazenko',
		github: 'daryazenko',
		vk: '#',
		instagram: 'daryazenko'
	},
	{
		name: 'Alexey Ionov',
		url: alexy,
		telegram: 'alexeyio',
		github: 'alexion11',
		vk: '#',
		instagram: '#'
	},
	{
		name: 'Roman Kharitonov',
		url: roman,
		telegram: 'seniorjava',
		github: 'KharitonovRoman',
		vk: 'seniorjava',
		instagram: 'seniorjava'
	},
	{
		name: 'Димарик',
		url: diman,
		telegram: 'xgoliy',
		github: '4dimarik',
		vk: '#',
		instagram: '4dimarik'
	},
	{
		name: 'Marat JS',
		url: marat,
		telegram: 'MaratReactJs',
		github: 'MaratReactJs',
		vk: '#',
		instagram: '#'
	},
	{
		name: 'Asset GA',
		url: asset,
		telegram: 'AssetGravitation',
		github: 'AssetGA',
		vk: '#',
		instagram: '#'
	}
];
