import { Condition } from './Condition'
import { Attribute } from './Attribute'
import { AttributeConstValue } from './AttributeValue'

export interface Target extends Condition {
  [key: Attribute]: AttributeConstValue
}
