
const fns = {
  saveUserInfo: (state, action) => {
    const { data } = action.payload
    state.userInfo = data
  },

  setHomePageInfo: (state, action) => {
    const { data } = action.payload
    state.homePageInfo = data
  }
}
export default fns
