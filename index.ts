import * as pm2 from 'pm2';
import * as util from "util";

(async () => {
  pm2.connect(async (e) => {
    if(e) console.log(e)
    await pm2.list(async (e, list) => {
      if (e) console.log(e)
      console.log(list.length)
      if(list.length){
        for (let pm2Process of list) {
          if (pm2Process.name?.includes('bot')) {
            console.log('already started')
            process.exit();
          }
        }
      } else {
        console.log('starting....')
        pm2.start({
          name: 'bot',
          script: __dirname + '/dist/src/main.js'
        }, err => {
          console.log(err);
          process.exit();
        });
      }
    });
  })

})()
