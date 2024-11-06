import { PipeTransform, BadRequestException } from '@nestjs/common';
import { ObjectSchema } from 'joi';

export class Validator implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any) {
    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException(`Validation failed: ${error.message}`);
    }
    return value;
  }
}
