import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _ArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    Ranger._ArchetypeInstances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._ArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}