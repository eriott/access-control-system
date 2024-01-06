import { SetMetadata } from '@nestjs/common'

export const PolicyEntity = (entityType: string) => SetMetadata('policyEntityType', entityType)
