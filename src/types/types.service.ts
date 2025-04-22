import { Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Type } from './models/type.model';

@Injectable()
export class TypesService {
  constructor(@InjectModel(Type) private readonly typeModul: typeof Type){}
  create(createTypeDto: CreateTypeDto) {
    return this.typeModul.create(createTypeDto);
  }

  findAll() {
    return this.typeModul.findAll();
  }

  findOne(id: number) {
    return this.typeModul.findByPk(id);
  }

  update(id: number, updateTypeDto: UpdateTypeDto) {
    return this.typeModul.update(updateTypeDto, {where:{id}, returning: true});
  }

  remove(id: number) {
    return this.typeModul.destroy({where: {id}});
  }
}
