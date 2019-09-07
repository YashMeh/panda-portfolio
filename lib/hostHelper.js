//========================================================================================
/*                                                                                      *
 *                             Require the node dependencies                            *
 *                                                                                      */
//========================================================================================
 
const Octokit = require('@octokit/rest')

//########################################################################################

module.exports = {
  /**
   * @description             this functions create a token to access github
   *   
   * @param {String} creds    the credentials of the user
   * 
   * @returns the token
   *
   * @author Ram Pandey
   */
  getAccessToken: (creds) => {
    return new Octokit({
      auth: {
        username: creds.username,
        password: creds.password,
        async on2fa () {
          // example: ask the user
          return prompt('Two-factor authentication Code:')
        }
      }
     })
  },
  createRemoteRepo:async (userObject,creds)=>{
    try{
    let repo = await userObject.repos.createForAuthenticatedUser({
      name: `${creds.username}.github.io`,
      description: "Hello world",
      private: false
    })
    return true
  } catch (error) {
      // console.log(error)
      switch (error.status) {
        case 401:
          console.log("Bad credentials please enter correct details")
          return false
        case 500:
          console.log("Github servers are exprencing issues please try again later")
          return false
        case 422:
          console.log(`A repo with this name already exist please try other name or delete the previous repo`)
          return false
        default:
          console.log('Something went wrong please try again later')
          console.log(error)
          return false
      }
  }
  },
  /**
   * @description     This function will help in initialisng and pushing code to remote repo
   * 
   * @param {String} The path at which the git repo should be initiaised
   * 
   * @return none
   * 
   * @author Ram Pandey
   */
  pushRepo:(path,creds)=>{
    require('simple-git')(path)
     .init()
     .add('./*')
     .commit("first commit!")
     .addRemote('origin', `https://${creds.username}:${creds.password}@github.com/${creds.username}/${creds.username}.github.io`)
     .exec(() => console.log('Pushing code to remote ...'))
     .push('origin', 'master');
  },

  /**
   * @description    This method will be used to delete a repo created in case of error
   * 
   * @param {String} username The username of the repo username   
   * 
   * @param {Object} accessToken The token generated for github authentication
   */
  deleteRepo:async (username,accessToken)=>{
    let repo = `${username}.github.io`
    let deletedRemoteRepo = await accessToken.repos.delete({
      username,
      repo
    })
  }
}