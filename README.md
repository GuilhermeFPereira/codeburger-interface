# Interface do code-burger , realizado em <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">

Para dar uniformidade ao código e deixar dinamico, utilizei Eslint + Prettier

Foi utilizado a biblioteca react-hook-form como um formulário para mapear os campos da aplicação, e esse formulário me entregou todos os dados,auxiliando na manipulacão das informações facilmente.
Essa biblioteca, tambem auxiliou para fazer a validação do formulário de Login . (https://react-hook-form.com/get-started/#SchemaValidation).

Adicionado axios para fazer a conexão com meu back-end/banco de dados

Biblioteca prop-types para validação de dados/ props, que cheguem de forma correta.

Foi adcionado uma biblioteca chamada react-toastify , com a função de avisar ao usuário se os requerimentos que ele fez estão corretos ou se deu algum problema, e ele avisa oque tem que ser feito.

Outro react hook utilizado foi useContext API (Redux tambem faz isso) , foi utilizado para facilitar a transição de dados na aplicação. Principalmente quando um usuário estiver logado no site, será necessário esses dados o tempo todo. Se utiliza do UseContext.

Para fazer as rotas, foi utilizado o React-router-Dom.

Foi adicionado Token JWT as chamas a API, para autentização do usuario ou admin, e validação.

Utilizei o react-elastic-carousel, para me auxiliar com a criação dos carroceis da aplicação.

Para a aplicação ficar com o código limpo e organizado, foram criados as pastas de assets para guardar as imagens, a pasta de components para armazenar cada item de cada página, e tambem foi criado a pasta de Containers para separar cada página do site, dessa maneira fica mais fácil para fazer manutenções futuras e identificar como foi feito o projeto.

Adicionado uma biblioteca de componentes, Mui Material, para criação da tabela de organização dos pedidos, na pagina de pedidos do Admin. E vários features visuais na página.

Para me auxiliar na criação do select , de atualizar os pedidos, utilizei a biblioteca react-select.
Novamente foi utilizado o react-hook-form, porem, na parte de Admin da aplicação , para auxiliar na criação e atualização dos produtos da empresa. 

Para cadastrar novos produtos, enviar para o back-end, foi utilizado o FormData.append, foi necessário para encaminhar junto com as informações, a ilustração do produto. 

# Ferramentas :hammer: :computer:

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white">
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
<img src="https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink">






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
