import Character from './Character';

export default class Zombie extends Character {
	constructor(name, type, health, level, attack, defence) {
		super(name, type, health, level, attack, defence);
		this.health = 100;
		this.level = 1;
		this.attack = 10;
		this.defence = 40;
	}
}