import chalk from "chalk";

export const Error = (...args: any[]) => {
	console.log(chalk.red.apply(this, ["❌ ", ...args]));
};

export const Success = (...args: any[]) => {
	console.log(chalk.green.apply(this, ["✔️ ", ...args]));
};

export const Warning = (...args: any[]) => {
	console.log(chalk.yellow.apply(this, ["⚠️ ", ...args]));
};
