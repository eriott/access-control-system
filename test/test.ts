import { Effect, Rule } from '../src/entities/Rule'
import { Target } from '../src/entities/Target'
import { Context, UserAttributeProvider } from '../src/services/AttributeProvider'
import { RuleCalculator, RuleProvider } from '../src/services/RuleCalculator'

const target: Target = {
  'Object.type': 'Icon',
  'Action.type': 'Delete'
}

const rule1 = new Rule(
  'Удалить иконку может супердизайнер',
  target,
  Effect.permit,
  {
    'User.isSuperDesigner': true
  }
)

const rule2 = new Rule(
  'Удалить иконку может дизайнер, если иконка была создана не больше недели назад',
  target,
  Effect.permit,
  {
    'User.isDesigner': true,
    'Icon.createdAt': { $gt: 'weekAgo' }
  }
)

const user = { isSuperDesigner: true }
const icon = { createdAt: new Date() }

const ruleCalculator = new RuleCalculator()
const ruleProvider = new RuleProvider([rule1, rule2])
const context = new Context({ User: user }, { User: new UserAttributeProvider() })
const rules = ruleProvider.getRules(target)
console.log('rules', rules)
console.log('context', context.calculatedAttributes)
const effects = rules
  .map(rule => ruleCalculator.getEffect(rule, context))
console.log(effects)
