import Character from './Character';

export default class Daemon extends Character {
	constructor(name, type, health, level) {
		super(name, type, health, level);
		this.attack = 25;
		this.defence = 25;
	}
}