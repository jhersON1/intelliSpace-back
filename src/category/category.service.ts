import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository:Repository<Category>,
  ){

  }
  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const {name,description} = createCategoryDto;
      const newCategory = this.categoryRepository.create({
        name,
        description,
      });
      const savedCategory = await this.categoryRepository.save(newCategory);

      return savedCategory;
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    return this.categoryRepository.find();
  }

  async findOne(id: string) {
    const category = await this.categoryRepository.findOneBy({id});

    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }

    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    try {
      const category = await this.categoryRepository.findOneBy({id});
    
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }

    const updatedCategory = await this.categoryRepository.save({
      ...category,
      ...updateCategoryDto,
    });
  
    return updatedCategory;
  
    } catch (error) {
      
    }
     
  }
}
