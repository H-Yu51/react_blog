module.exports = app => {
  const { router, controller } = app;
  router.get('/default/index', controller.default.home.index);
  // / 代表同级目录，然后刚刚同级目录下没有 controller
  router.get('/default/getArticleList', controller.default.home.getArticleList);
  // router.get('/default/getArtcleById/:id', controller.default.home.getArtcleById);
  router.get('/default/getTypeInfo', controller.default.home.getTypeInfo);
  router.get('/default/getListById/:id', controller.default.home.getListById);
};
