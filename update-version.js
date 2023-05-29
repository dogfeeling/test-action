const fs = require("fs");
const path = require("path");

const newVersion = (process.argv[2]||'').replace(/^v/g, "");

if(!newVersion){
    console.log("请输入版本号");
    process.exit(1)
}

const cwd = process.cwd();
let pkg = fs.readFileSync(path.join(cwd, "package.json"), "utf-8");
pkg = JSON.parse(pkg);

pkg.version = newVersion;
fs.writeFileSync(path.join(cwd, "package.json"), JSON.stringify(pkg, null, 4), "utf-8");
console.log("更新版本号为：", newVersion);