import { Condition, EntityAttributes } from '../entities/Condition'

class Entity {

}

class User extends Entity {
  isDesigner: boolean
  isSuperDesigner: boolean
}

export interface AttributeProvider<Entity> {
  getAttributes (entity: Entity): EntityAttributes
}

export class UserAttributeProvider implements AttributeProvider<User> {
  getAttributes (entity: User): EntityAttributes {
    return {
      isDesigner: entity.isDesigner,
      isSuperDesigner: entity.isSuperDesigner
    }
  }
}

type EntityType = string

export class Context {
  public readonly calculatedAttributes: EntityAttributes

  constructor (
    entities: Record<EntityType, Entity>,
    attributeProviderFactory: Record<EntityType, AttributeProvider<Entity>>
  ) {
    for (const [entityType, entity] of Object.entries(entities)) {
      const providerFactory = attributeProviderFactory[entityType]
      this.calculatedAttributes = {
        ...this.calculatedAttributes,
        ...Object.entries(providerFactory.getAttributes(entity))
          .reduce((res, [attrName, attrValue]) => ({...res, [`${entityType}.${attrName}`]: attrValue}), {} as EntityAttributes)
      }
    }
  }
}
