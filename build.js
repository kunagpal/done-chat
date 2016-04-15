var path = reqiure('path').join;
var stealTools = require("steal-tools");

var buildPromise = stealTools.build({
  config: join(__dirname, "package.json!npm")
}, {
  bundleAssets: true
});
