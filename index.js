var strtojs = require('string-to-js'),
    path = require('path'),
    resolve = path.resolve,
    fs = require('fs');

module.exports = function(builder) {
  builder.on('config', function(){
    (builder.conf.strings || []).forEach(function(file){
      var str = fs.readFileSync(resolve(file), 'utf8');
      builder.addFile('scripts', file, strtojs(str));
    });
  });
};