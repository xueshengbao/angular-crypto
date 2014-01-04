/*
  Angular-Crypto - v0.0.1 
  2014-01-04
*/
(function(window, angular, Math, undefined) {
    angular.module("gdi2290.crypto", [ "gdi2290.crypto-md5", "gdi2290.crypto-base64" ]);
    angular.module("ngCrypto", [ "gdi2290.crypto" ]);
    angular.module("angular-crypto", [ "gdi2290.crypto" ]);
    angular.module("gdi2290.crypto-md5", []);
    angular.module("gdi2290.crypto-base64", []);
    angular.module("gdi2290.crypto-md5").factory("md5", function() {});
})(this, this.angular, this.Math, void 0);