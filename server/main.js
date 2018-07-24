import fs from 'fs';
WebApp.connectHandlers
.use("/", ( req, res, next ) => {
  console.log(req);
  // if (req.url === ) {
  //
  // }
  let data = fs.readFileSync( `${ process.env.PWD }/private/f203b311854011e8a1915bd95c8990c5.html` );
  res.write( data );
  console.log(req.url);
  return res.end();
})
.use("/layout/", ( req, res, next ) => {
  let data = fs.readFileSync( `${ process.env.PWD }/private/755c7be18f4911e8a8a867e86c7ce07e.html` );
  res.write( data );
  return res.end();
})
.use(( req, res, next ) => {
  res.write( '404' );
  return res.end();
})
//
// import fs from 'fs';
//
// WebApp.connectHandlers
//   .use("/layout", ( req, res, next ) => {
//     let data = fs.readFileSync( `${ process.env.PWD }/private/755c7be18f4911e8a8a867e86c7ce07e.html` );
//     res.write( data );
//     return res.end();
//   })
//   .use("/", ( req, res, next ) => {
//     let data = fs.readFileSync( `${ process.env.PWD }/private/f203b311854011e8a1915bd95c8990c5.html` );
//     res.write( data );
//     return res.end();
//   })
// .use(( req, res, next ) => {
//   res.write( '404' );
//   return res.end();
// })
