import ip from 'ip';
import app from './app';

app.listen(3333, () => (
  console.log(`Servidor rodando em: ${ip.address()}:3333`)
));
