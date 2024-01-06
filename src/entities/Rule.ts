import { Target } from './Target'
import { Condition } from './Condition'

export enum Effect {
  permit = 'permit',
  deny = 'deny'
}

export class Rule {
  constructor (
    public readonly name: string,
    public readonly target: Target,
    public readonly effect: Effect,
    public readonly condition: Condition
  ) {
  }
}
