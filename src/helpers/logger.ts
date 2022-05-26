import winston from "winston";

export const LOGGER_LEVEL = process.env.LOGGER_FORMAT || "info";

export const factoryLogger = (dafaultMeta: any) => {
  const logger = winston.createLogger({
    level: LOGGER_LEVEL,
    format: winston.format.json(),
    defaultMeta: dafaultMeta,
    transports: [
      new winston.transports.Console({
        format: winston.format.simple(),
      }),
    ],
  });

  return logger;
};
