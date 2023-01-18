export default abstract class Race {
  constructor(private _name: string, private _dexterity: number) {}

  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this.dexterity;
  }

  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints():number;
}