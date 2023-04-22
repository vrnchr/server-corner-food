import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';
import { Food, FoodSchema } from './food.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [FoodController],
  providers: [FoodService],
  imports: [
    MongooseModule.forFeature([{ name: Food.name, schema: FoodSchema }]),
    forwardRef(() => AuthModule),
  ],
  exports: [FoodService],
})
export class FoodModule {}
