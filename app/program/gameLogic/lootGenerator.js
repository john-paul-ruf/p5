class lootGenerator {
  constructor() {
  }

  static generateWeapon() {

    const d20 = new dice(20);

    const enhanceWeapon = new function (weapon, modificationArray) {
      _.forEach(modificationArray, m => {
        switch (m.stat) {
          case 'STR':
            'Sharp '.concat(weapon.name);
            weapon.modifications.push(m);
            break;
          case 'DEX':
            'Swift '.concat(weapon.name);
            weapon.modifications.push(m);
            break;
          case 'INT':
            'Shiny '.concat(weapon.name);
            weapon.modifications.push(m);
            break;
        }
      });
    };

    let returnWeapon;

    switch (d20.roll()) {
      case 1:
      case 2:
      case 3:
        returnWeapon = new weapon('Dagger', 1, 2, 'STR');
        break;

      case 4:
      case 5:
      case 6:
        returnWeapon = new weapon('Sword', 1, 4, 'STR');
        break;

      case 7:
      case 8:
      case 9:
        returnWeapon = new weapon('Axe', 2, 3, 'STR');
        break;

      case 10:
      case 11:
      case 12:
        returnWeapon = new weapon('Wand', 1, 2, 'INT');
        break;

      case 13:
      case 14:
      case 15:
        returnWeapon = new weapon('Glyph', 1, 4, 'INT');
        break;

      case 16:
      case 17:
      case 18:
        returnWeapon = new weapon('Staff', 2, 3, 'INT');
        break;

      case 19:
      case 20:
        returnWeapon = new weapon('Dual Blades', 1, 6, 'DEX');
        break;
    }

    switch (d20.roll()) {
      case 15:
      case 16:
      case 17:
        enhanceWeapon(returnWeapon, [weaponModification.generateWeaponModification()]);
        break;

      case 18:
      case 19:
        enhanceWeapon(returnWeapon, [weaponModification.generateWeaponModification(),
        weaponModification.generateWeaponModification()]);
        break;

      case 20:
        enhanceWeapon(returnWeapon, [weaponModification.generateWeaponModification(),
        weaponModification.generateWeaponModification(),
        weaponModification.generateWeaponModification()]);
        break;
    }

    return returnWeapon;

  }
};