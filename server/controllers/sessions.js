userController.setSSIDCookie = (req, res, next) => {
    // write code here
    // console.log('setting ssid', res.locals.userIdWillWork)
    res.locals.ssid = Math.random();
    knex('session')
    .insert({ssid: res.locals.ssid, username})
    res.cookie('ssid', res.locals.ssid, {httpOnly: true})
    next()
}

sessionController.isLoggedIn = (req, res, next) => {
    const { ssid } = req.cookies;
    if (ssid) {
        knex('session')
        .where({ssid})
        .then(rows => {
            if(rows){
                // wrong password put logic here
                return next('WRONG') 
            }else{
                // Enter logic for redirecting to homepage
                // return next();
            }
        })
    } else {
      next();
    }
  };
