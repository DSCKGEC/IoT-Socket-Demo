const RenderHome = async (_, res) => {
  res.render("pages/index");
};

const Render404 = async (req, res) => {
  res.status(404).render("pages/404", { PageTitle: "DSC | 404" });
};

module.exports = {
  RenderHome,
  Render404,
};
