export default class Character {
	constructor(name, type, health, level, attack, defence) {
		if (name.length < 2 || name.length > 10) {
			throw new Error('Name must be between 2 and 10 characters');
		} else if (typeof name !== 'string') {
			throw new Error('The character’s name must be of the "string" type')
		} else {
			this.name = name;
		}

		if (type === Bowman || type === Swordsman || type === Magician || type === Daemon || type === Undead || type === Zombie) {
			throw new Error('Unknown character');
		} else if (typeof name !== 'string') {
			throw new Error('The character’s type must be of the "string" type');
		} else {
			this.type = type;
		}

		this.health = health;
		this.level = level;
		this.attack = attack;
		this.defence = defence;
	}

	levelup() {
		if (this.health > 0) {
			this.level += 1;
			this.attack *= 1.2;
			this.defence *= 1.2;
			this.health = 100;
		} else {
			throw new Error('You cannot raise the level of the deceased');
		}
	}

	damage(points) {
		if (this.health - points * (1 - this.defense / 100) < 0) {
			this.health = 0;
		} else {
			this.health -= points * (1 - this.defense / 100);
		}
	}
}