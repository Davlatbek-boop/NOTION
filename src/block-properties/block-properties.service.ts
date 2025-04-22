import { Injectable } from '@nestjs/common';
import { CreateBlockPropertyDto } from './dto/create-block-property.dto';
import { UpdateBlockPropertyDto } from './dto/update-block-property.dto';
import { InjectModel } from '@nestjs/sequelize';
import { BlockProperty } from './models/block-property.model';

@Injectable()
export class BlockPropertiesService {

  constructor(@InjectModel(BlockProperty) private readonly blockPropertyModel: typeof BlockProperty){}

  create(createBlockPropertyDto: CreateBlockPropertyDto) {
    return this.blockPropertyModel.create(createBlockPropertyDto);
  }

  findAll() {
    return this.blockPropertyModel.findAll();
  }

  findOne(id: number) {
    return this.blockPropertyModel.findByPk(id);
  }

  update(id: number, updateBlockPropertyDto: UpdateBlockPropertyDto) {
    return this.blockPropertyModel.update(updateBlockPropertyDto, {where:{id}, returning: true});
  }

  remove(id: number) {
    return this.blockPropertyModel.destroy({where:{id}});
  }
}
