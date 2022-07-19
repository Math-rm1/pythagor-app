<div align="center">
  <a href="https://github.com/Math-rm1/pythagor-app">
    <img src="./frontend/src/assets/logo.png" alt="logo" width="140" height="140">
  </a>
  
  <h2 align="center">PythagorApp</h2>
 
  <div align="center">
    PythagorApp é uma calculadora baseada no teorema criado por Pitágoras, um matemático e filósofo grego.
    <br />
  </div>
</div>

## 💬 Sobre
 
 A aplicação conta com uma **API**, que foi criada utilizando **Python** e **Flask** para fazer os cálculos do Teorema de Pitágoras e com um **front-end**, construído com **React**, **TypeScript** e **Material UI**.
  
  As principais funcionalidades da calculadora são:

 - Calcular a hipotenusa com base nos lados do triângulo
 - Calcular um lado do triângulo com base na hipotenusa e no outro lado
 - Limpar campos do formulário;
 
## :cloud: Deploy:
- [Front-end](https://pythagor-app.vercel.app/)
- [Back-end](https://flask-api-vert.vercel.app/api/calculate)

## 🚀 Tecnologias Utilizadas:
### Front-end:
  - [React](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Material-UI](https://material-ui.com/)
  - [React-hook-form](https://react-hook-form.com/)
  - [React-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)
  - [React-hot-toast](https://react-hot-toast.com/)
  - [Framer Motion](https://framer.com/motion/)
  - [Eslint](https://eslint.org/)
  - [Axios](https://axios-http.com/)
  - [Vite](https://vitejs.dev/)
  - [Mathjs](https://mathjs.org/)
  
### Testes Unitários:
 - [Vitest](https://vitest.dev/)
 - [React-testing-library](https://react-testing-library.com/)

### Back-end:
  - [Flask](https://flask.palletsprojects.com/)
  - [Python](https://www.python.org/)


## 🔧 Como executar o projeto localmente:

### Back-end
  Pré-requisitos para o back-end: pip / python3

```bash
# clone o repositório
git clone https://github.com/Math-rm1/pythagor-app.git

# entre na pasta do backend
cd pythagor-app && cd backend

# instale as dependências
pip install -r requirements.txt

# rode o servidor
python3 server.py
``` 

### Front-end
  Pré-requisitos para o front-end: npm / yarn

```bash
# saia da pasta backend e entre na pasta frontend
cd .. && cd frontend

# altere o arquivo .env.example para .env.local 
# troque o conteúdo da variável com o IP e porta do seu servidor backend
VITE_API_URL=http://127.0.0.1:5000

# instale as dependências
npm i / yarn

# rode a aplicação front-end
npm run dev / yarn dev

# execute os testes unitários
npm test / yarn test
```

## :pencil: Licença

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Math-rm1/pythagor-app/blob/master/LICENSE)

Esse projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## :bust_in_silhouette: Autor

[![Matheus](https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/matheus-r-mariano)

Matheus Rodrigues Mariano
