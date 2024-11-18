import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class BasicAuthGuard implements CanActivate {
    private readonly validUsername = 'besher';
    private readonly validPassword = 'besher';

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest<Request>();
        const authHeader = request.headers['authorization'];

        if (!authHeader || !authHeader.startsWith('Basic ')) {
            throw new UnauthorizedException('Missing or invalid Authorization header');
        }

        const base64Credentials = authHeader.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('utf8');
        const [username, password] = credentials.split(':');

        if (username === this.validUsername && password === this.validPassword) {
            return true;
        }

        throw new UnauthorizedException('Invalid credentials');
    }
}
