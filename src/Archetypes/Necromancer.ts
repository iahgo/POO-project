import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _ArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    Necromancer._ArchetypeInstances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._ArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}