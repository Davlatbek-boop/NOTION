import { Injectable } from '@nestjs/common';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Block } from './models/block.model';

@Injectable()
export class BlocksService {
  constructor(@InjectModel(Block) private readonly blockModul: typeof Block){}

  create(createBlockDto: CreateBlockDto) {
    return this.blockModul.create(createBlockDto);
  }

  findAll() {
    return this.blockModul.findAll();
  }

  findOne(id: number) {
    return this.blockModul.findByPk(id);
  }

  update(id: number, updateBlockDto: UpdateBlockDto) {
    return this.blockModul.update(updateBlockDto, {where:{id}, returning: true});
  }

  remove(id: number) {
    return this.blockModul.destroy({where: {id}});
  }
}
