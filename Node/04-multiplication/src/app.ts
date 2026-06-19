//console.log(process.env.APPDATA);
console.log(process.argv);
// const [tsnode, app, ...args] = process.argv;
// console.log(app);
import { yarg } from "./config/plugins/args.plugins";
console.log(yarg);
console.log(yarg.argv);
