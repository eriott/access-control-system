import { Target } from './Target'
import { Rule } from './Rule'
import { RuleCombinationAlgorithm } from './RuleCombinationAlgorithm'

export class Policy {
  public readonly name: string
  protected target: Target
  protected rules: Rule[]
  protected ruleCombinationAlgorithm: RuleCombinationAlgorithm
}
