import { Injectable } from '@nestjs/common';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';

@Injectable()
export class AssignmentsService {
  create(createAssignnmentDto: CreateAssignmentDto) {
    return 'This action adds a new assignnment';
  }

  findAll() {
    return `This action returns all assignnments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assignnment`;
  }

  update(id: number, updateAssignnmentDto: UpdateAssignmentDto) {
    return `This action updates a #${id} assignnment`;
  }

  remove(id: number) {
    return `This action removes a #${id} assignnment`;
  }
}
