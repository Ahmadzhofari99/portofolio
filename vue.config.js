module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'Portofolio Bagus',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      favicon32: 'logo.ico',
      favicon16: 'logo.ico',
      appleTouchIcon: 'logo.ico',
      maskIcon: 'logo.ico',
      msTitleImage: 'logo.ico',
    },
    // workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc: 'src/service-worker.js',
      skipWaiting: true,
    },
    manifestOptions: {
      gcm_sender_id: '522489256827',
      icons: [
        {
          src: 'logo.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'logo.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },
};
