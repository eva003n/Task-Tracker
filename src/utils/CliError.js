import { error } from "console";
import process from "process";
// Error handling mostly user specific/ operational errors
class CLIError extends Error {
  constructor(message) {
    // prevent creating a stack trace twice which is expensive
    const { stackTraceLimit } = Error;
    Error.stackTraceLimit = 0;
    super(message);
    Error.stackTraceLimit = stackTraceLimit;

    if (!this.stack) {
      //Capture stack trace manually excluding  counstructor and add a stack property to this instance
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

process.on("uncaughtException", (error) => {
  console.error(`Uncaught exception: ${error.message}`);
  process.exit(1);
});

process.on("unhandledRejection", (error) => {
  console.error(`Uncaught rejection: ${error.message}`);
  process.exit(1);
});


export default CLIError;
