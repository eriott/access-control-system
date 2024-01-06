import { SetMetadata } from '@nestjs/common'

export const PolicyAction = (actionType: string) => SetMetadata('policyActionType', actionType)
