if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/aloys-tab/aloys-tab?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/lv-select/lv-select?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/dn-icon/dn-icon?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/booklist/booklist?hash=08d157451d9ff2fdfa7b25d18ca0ba0fc81b851b');
require('../../components/publish/publish?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/booklist/booklistworman?hash=08d157451d9ff2fdfa7b25d18ca0ba0fc81b851b');
require('../../components/uni-ui/uni-list/uni-list?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-icons/uni-icons?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-badge/uni-badge?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-list-item/uni-list-item?hash=fe1213e9c0f0e8f3af9638ea181ed89769808cde');
require('../../components/rankinglist/man-ranking?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/rankinglist/woman-ranking?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-ui/uni-goods-nav/uni-goods-nav?hash=74adc7affc884ab4340065f9141f18d3ecec70a1');
require('../../components/uni-ui/uni-pagination/uni-pagination?hash=74adc7affc884ab4340065f9141f18d3ecec70a1');
require('../../pages/weChatLogin/weChatLogin?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/index/index?hash=23f746de0a63a8d9149f4052eca446f86b3f48d2');
require('../../pages/my/my?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/bookshelf/bookshelf?hash=b6121b5f7f692767500d0ab81f5e5356729a8d9d');
require('../../pages/Ranking/Ranking?hash=9598bf8e5e540cd6e7fd5e801429e50629ce0d00');
require('../../pages/tobiao/tobiao?hash=80baad2d1506fca6a3ff19834b694ab4ed605c2a');
require('../../pages/classification/classification?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/bookdetail/bookdetail?hash=26f7fc5291a9fe61da04a2885d59ff85838e7c6d');
require('../../pages/details/details?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/detail/detail?hash=26f7fc5291a9fe61da04a2885d59ff85838e7c6d');
require('../../pages/bookshelfs/bookshelfs?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/mulv/mulv?hash=64bf5657ae2172dd97264bfc24f6bbe21c97b33f');
require('../../pages/mys/mys?hash=b6121b5f7f692767500d0ab81f5e5356729a8d9d');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}