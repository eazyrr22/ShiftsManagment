import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ShiftsModule } from './shifts/shifts.module';
import { AssignnmentsModule } from './assignnments/assignments.module';
import { UsersController } from './users/users.controller';
import { AuthController } from './auth/auth.controller';
import { ShiftsController } from './shifts/shifts.controller';
import { AssignmentsController } from './assignnments/assignments.controller';
import { UsersService} from './users/users.service';
import { AuthService } from './auth/auth.service';
import { ShiftsService } from './shifts/shifts.service';
import { AssignmentsService } from './assignnments/assignments.service';

@Module({
  imports: [UsersModule, AuthModule, ShiftsModule, AssignnmentsModule],
  controllers: [UsersController,AuthController,ShiftsController,AssignmentsController],
  providers: [UsersService,AuthService,ShiftsService,AssignmentsService],
})
export class AppModule {}
