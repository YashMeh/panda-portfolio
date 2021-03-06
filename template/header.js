module.exports = () => {
  return `module.exports=(enquirer)=>{
    const { Snippet } = enquirer;

  /**
   * @description             this validate sthe value typed by the user
   * 
   * @param {String}  value   the value of the field enterd by the user
   * 
   * @param {String} message  the message you want to display when the user enter worng vale
   * 
   * @returns                 prompt with the question
   * 
   * @author  Ram Pandey <iamram2510@ieee.org>
   */
  function valdiator(value,message){
    if(value===undefined || value===null || value===''){
      return prompt.styles.danger(message);
    }
  }
  
  const prompt = new Snippet({
    name: 'config',
    message: 'Fill out the fields in config.json',
    fields: [
      {
        name: 'name',
        message: 'Your name',
        validate(value){
          return valdiator(value,'Please enter your name')
        },
        result(value){
          return value.toLowerCase();
        }
      },
      {
        name: 'theme',
        message: 'Theme (dark or light)',
        validate(value){
          console.log(value)
          if(value.toLowerCase()!=='dark' &&  value.toLowerCase()!=='light'){
            return prompt.styles.danger('Please choose between light or dark');
          }
        }
      },
      {
        name: 'pictureDir',
        message: 'enter the profile photo name please keep it in this same directory',
        result(value){
          if(value===undefined){
            return ''
          }else{
            return value
          }
        }
      },
      {
        name: 'resumeLink',
        message: 'enter the resume file name please keep it in this same directory',
        result(value){
          if(value===undefined){
            return ''
          }else{
            return value
          }
        }
      },
      {
        name: 'githubLink',
        message: 'enter Your github profile link or leave empty',
        result(value){
          if(value===undefined){
            return ''
          }else{
            return value
          }
        }
      },
      {
        name: 'linkedinLink',
        message: 'enter Your Linkedin profile link or leave empty',
        result(value){
          if(value===undefined){
            return ''
          }else{
            return value
          }
        }
      },
      {
        name: 'mediumLink',
        message: 'enter Your medium profile link or leave empty',
        result(value){
          if(value===undefined){
            return ''
          }else{
            return value
          }
        }
      },
      {
        name: 'facebookLink',
        message: 'enter Your facebook profile link or leave empty',
        result(value){
          if(value===undefined){
            return ''
          }else{
            return value
          }
        }
      },
      {
        name: 'instagramLink',
        message: 'enter Your instagram profile link or leave empty',
        result(value){
          if(value===undefined){
            return ''
          }else{
            return value
          }
        }
      },
    `
}
