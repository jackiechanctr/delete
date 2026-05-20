import winston from 'winston';
export const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
    defaultMeta: { service: 'mutual-fund-server' },
    transports: [new winston.transports.Console()],
});
