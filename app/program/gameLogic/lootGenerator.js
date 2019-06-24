class lootGenerator {
  constructor() {
  }

  static generateWeapon() {

    const d20 = new dice(20);

    var enhanceWeapon = new function (weapon, modificationArray) {
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

    let weapon;

    switch (d20.roll()) {
      case 1:
      case 2:
      case 3:
        weapon = new weapon('Dagger', 1, 2, 'STR');
        break;

      case 4:
      case 5:
      case 6:
        weapon = new weapon('Sword', 1, 4, 'STR');
        break;

      case 7:
      case 8:
      case 9:
        weapon = new weapon('Axe', 2, 3, 'STR');
        break;

      case 10:
      case 11:
      case 12:
        weapon = new weapon('Wand', 1, 2, 'INT');
        break;

      case 13:
      case 14:
      case 15:
        weapon = new weapon('Glyph', 1, 4, 'INT');
        break;

      case 16:
      case 17:
      case 18:
        weapon = new weapon('Staff', 2, 3, 'INT');
        break;

      case 19:
      case 20:
        weapon = new weapon('Dual Blades', 1, 6, 'DEX');
        break;
    }

    switch (d20.roll()) {
      case 15:
      case 16:
      case 17:
        enhanceWeapon(weapon, [weaponModification.generateWeaponModification()]);
        break;

      case 18:
      case 19:
        enhanceWeapon(weapon, [weaponModification.generateWeaponModification(),
        weaponModification.generateWeaponModification()]);
        break;

      case 20:
        enhanceWeapon(weapon, [weaponModification.generateWeaponModification(),
        weaponModification.generateWeaponModification(),
        weaponModification.generateWeaponModification()]);
        break;
    }

    return weapon;

  }
};