
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/mon-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/mon-portfolio"
  },
  {
    "renderMode": 2,
    "route": "/mon-portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/mon-portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/mon-portfolio/resume"
  },
  {
    "renderMode": 2,
    "route": "/mon-portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/mon-portfolio/github"
  },
  {
    "renderMode": 2,
    "route": "/mon-portfolio/contact"
  },
  {
    "renderMode": 2,
    "route": "/mon-portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 691, hash: '2f144167e3ac688196ea7a4588fe3eb91a0d3cfeb24afff5b8ba5ae0490a26d1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1204, hash: 'd01cdb9f8cfb9cde766d42fd8ba718c6fd0cf6e2088eb12f982e6603a26f0fd6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 10257, hash: '13610eb19acf21bffbb067e5dc2160669c7e758bd0660afed6251973905e80c9', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 11507, hash: 'f1904f937038a8517df6182aad48a0ca48943a504b1858e3a8955ee2daa35655', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 12362, hash: '0dfdc0ab780bd78b02dcdb6c69668b1279cfb351aa489b9b6744fe8225fb6531', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 9527, hash: 'f121d78154ca9a3e0197e4e6a0e88c4388366dd772d8f741e1a0603740ded49d', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'github/index.html': {size: 8558, hash: 'ad6438873ccfb7b112d7f39b0bbcc893a701c1f77fdc6cf783881cf86877071d', text: () => import('./assets-chunks/github_index_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 10185, hash: 'e5c9bd43418241bdf557134734adb498a6aa66f42c682e9269ce4e3a09be0124', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 11907, hash: '160945ffb751b7415c653b2347559a0ecd84c0f8654c5acdf050c4ad69274efc', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
