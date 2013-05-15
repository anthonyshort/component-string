var strtojs = require('string-to-js'),
    path = require('path'),
    fs = require('fs');

module.exports = function(builder) {
  builder.hook('before scripts', function(pkg, next) {
    var strings = pkg.config.strings;
    if( !strings || strings.length === 0 ) return next();

    strings.forEach(function(file, i){
      var str = fs.readFileSync(pkg.path(file), 'utf8');
      pkg.addFile('scripts', file, strtojs(str));
    });

    next();
  });

};