import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Property } from './models/property.model';

@Injectable()
export class PropertiesService {

  constructor(@InjectModel(Property) private readonly propertyModel: typeof Property){}

  create(createPropertyDto: CreatePropertyDto) {
    return this.propertyModel.create(createPropertyDto);
  }

  findAll() {
    return this.propertyModel.findAll();
  }

  findOne(id: number) {
    return this.propertyModel.findByPk(id);
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return this.propertyModel.update(updatePropertyDto, {where: {id}, returning: true});
  }

  remove(id: number) {
    return this.propertyModel.destroy({where: {id}});
  }
}
