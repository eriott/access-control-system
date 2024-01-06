import { Effect, Rule } from '../entities/Rule'
import { Target } from '../entities/Target'
import { Condition, EntityAttributes } from '../entities/Condition'
import { Context } from './AttributeProvider'

export class RuleProvider {
  constructor (
    private readonly rules: Rule[]
  ) {
  }

  getRules (target: Target) {
    return this.rules.filter(rule => isEqual(target, rule.target))
  }
}

export class RuleCalculator {
  getEffect (rule: Rule, context: Context): Effect {
    if (allIncluded(context.calculatedAttributes, rule.condition)) {
      return rule.effect
    }

    return rule.effect === Effect.permit ? Effect.deny : Effect.permit
  }
}

function isEqual (l: Condition, r: Condition): boolean {
  return JSON.stringify(l) === JSON.stringify(r)
}

function allIncluded (set: EntityAttributes, subSet: EntityAttributes): boolean {
  for (const [attrName, attrValue] of Object.entries(subSet)) {
    if (set[attrName] !== attrValue) {
      return false
    }
  }

  return true
}
