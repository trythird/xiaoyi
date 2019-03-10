const fetch = require('../../utils/fetch');
Page({
  data: {
      categories:[],
  },
    onLoad: function (options) {
   fetch('categories').then(res => {
          this.setData({ categories: res.data })
    })

    }
})
