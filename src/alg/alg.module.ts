import { Module } from '@nestjs/common';
import { AlgController } from './alg.controller';
import { AlgService } from './alg.service';

@Module({
    controllers: [AlgController],
    providers: [AlgService]
})
export class AlgModule {}
