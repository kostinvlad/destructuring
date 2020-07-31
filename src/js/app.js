export default function getSpecialAttack(character) {
  const specialAttacks = [];

  for (const item of character.special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;
    specialAttacks.push({
      id, name, icon, description,
    });
  }
  return specialAttacks;
}
