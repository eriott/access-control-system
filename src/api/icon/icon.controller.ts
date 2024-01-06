import { Controller, Delete } from '@nestjs/common'
import { PolicyEntity } from '../../decorators/PolicyEntity'
import { PolicyAction } from '../../decorators/PolicyAction'

@Controller('/icons')
export class IconController {
  @PolicyEntity('User')
  @PolicyAction('Delete')
  @Delete('/:name')
  async delete () {

  }
}
