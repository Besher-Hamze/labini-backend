import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BasicAuthGuard } from './common/basic-auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000
  app.useGlobalGuards(new BasicAuthGuard());
  await app.listen(port, () => {
    console.log(`app running on server : http://localhost:${port}`);
  });
}
bootstrap();
