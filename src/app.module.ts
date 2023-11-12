import { Module } from '@nestjs/common';
import { AlgModule } from './alg/alg.module';

@Module({
    imports: [AlgModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
