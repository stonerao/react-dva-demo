import dva from 'dva';
import './index.css';
// 1. Initialize
import createLoading from 'dva-loading';
const app = dva();
app.model(require("./models/users"));
app.use(createLoading())
// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example')); 
// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
