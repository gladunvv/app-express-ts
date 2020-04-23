import errorHendler from 'errorhandler';
import app from './app';

app.use(errorHendler());

const server = app.listen(app.get('port'), () => {
  console.log(` App is running at http://localhost: 
  ${app.get('port')} in ${app.get('env')}`);
  console.log(' Press CTRL-C to stop\n');
});

export default server;
