import { Test, TestingModule } from '@nestjs/testing';
import { AssignnmentsService } from './assignments.service';

describe('AssignnmentsService', () => {
  let service: AssignnmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssignnmentsService],
    }).compile();

    service = module.get<AssignnmentsService>(AssignnmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
