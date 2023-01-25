import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _ArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    Mage._ArchetypeInstances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Mage._ArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}