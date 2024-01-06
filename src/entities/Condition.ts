import { Attribute } from './Attribute'
import { AttributeValue } from './AttributeValue'

export interface Condition {
  [key: Attribute]: AttributeValue
}

export interface EntityAttributes extends Condition {}
